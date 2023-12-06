import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
  MdVolumeOff,
} from 'react-icons/md';
import { CgSpinner } from 'react-icons/cg';
import IconButton from './components/IconButton';
import AudioProgressBar from './components/AudioProgressBar';
import VolumeInput from './components/VolumeInput';

function formatDurationDisplay(duration: number) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? '0' + n : n)).join(':');

  return formatted;
}

interface AudioPlayerProps {
  currentSong?: { title: string; src: string; author: string};
  songIndex: number;
  songCount: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function AudioPlayer({
  currentSong,
  songCount,
  songIndex,
  onNext,
  onPrev,
}: AudioPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);
  const [volume, setVolume] = React.useState(0.75);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currrentProgress);

  React.useEffect(() => {
    audioRef.current?.pause();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [songIndex]);

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;

    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    
    <div className="bg-zinc-900 text-slate-400 p-3 relative rounded-xl ">
      {currentSong && (
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleNext}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onTimeUpdate={(e) => {
            setCurrrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        >
          <source type="audio/mpeg" src={currentSong.src} />
        </audio>
      )}
      <AudioProgressBar
        duration={duration}
        currentProgress={currrentProgress}
        buffered={buffered}
        onChange={(e) => {
          if (!audioRef.current) return;

          audioRef.current.currentTime = e.currentTarget.valueAsNumber;

          setCurrrentProgress(e.currentTarget.valueAsNumber);
        }}
      />
      
        <div className="flex justify-between text-sm leading-6 pl-3.5 pr-4 font-medium tabular-nums">
          <div className="text-zinc-500 dark:text-zinc-100"> {elapsedDisplay}</div>
          <div className="text-zinc-500 dark:text-zinc-400">{durationDisplay}</div>
        </div>
      
      
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-1 min-w-0 flex-auto space-y-1 font-semibold">
          <p className="text-zinc-900 dark:text-zinc-50 text-lg ">
            {currentSong?.title ?? 'Select a song'}
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs truncate"> {currentSong?.author ?? 'Artist Name'}</p> 
         
        </div>
       
      </div>
      
      <div className="grid grid-cols-3 items-center rounded-t-xl  pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 ">
        <span></span>
        <div className="flex items-center gap-4 justify-self-center ">
          <IconButton
            onClick={handlePrev}
            disabled={songIndex === 0}
            aria-label="go to previous"
            intent="secondary"
          >
            <MdSkipPrevious size={24} />
          </IconButton>
          <IconButton
            disabled={!isReady}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            size="lg"
          >
            {!isReady && currentSong ? (
              <CgSpinner size={24} className="animate-spin" />
            ) : isPlaying ? (
              <MdPause size={30} />
            ) : (
              <MdPlayArrow size={30} />
            )}
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={songIndex === songCount - 1}
            aria-label="go to next"
            intent="secondary"
          >
            <MdSkipNext size={24} />
          </IconButton>
        </div>

        <div className="flex gap-3 items-center justify-self-end">
          <IconButton
            intent="secondary"
            size="sm"
            onClick={handleMuteUnmute}
            aria-label={volume === 0 ? 'unmute' : 'mute'}
          >
            {volume === 0 ? (
              <MdVolumeOff size={20} />
            ) : (
              <MdVolumeUp size={20} />
            )}
          </IconButton>
          <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
}
