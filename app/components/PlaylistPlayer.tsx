"use client";
import AudioPlayer from 'react-modern-audio-player';
import "/global.css";


const playList = [
	{
		name: 'Prada',
		writer: 'Ricco',
		img: '/playlist/images/01.png',
		src: '/playlist/riccoPrada.mp3',
		id: 1,
	},
	{
		name: 'Different Cities',
		writer: 'Bw0$ama ft. Ricco, Jaaynice',
		img: '/playlist/images/02.jpg',
		src: '/playlist/Jaaynice Ricco Osama - Different Cities.mp3',
		id: 2,
	},
    {
		name: 'Rosetta Stone',
		writer: 'Bw0$ama',
		img: '/playlist/images/03.jpg',
		src: '/playlist/Osama - Rosetta Stone_6.wav',
		id: 3,
	},
];

const PlaylistPlayer = () => {
    return (
    
      <div className="">
        <AudioPlayer
          playList={playList}
          audioInitialState={{
            muted: false,
            volume: 0.6,
            curPlayId: 1,
          }}
          placement={{
            interface: {
              templateArea: {
                artwork: 'row1-1',
                playButton: 'row1-4',
                trackTimeCurrent: 'row2-3',
                progress: 'row2-5',
                trackTimeDuration: 'row2-6',
                repeatType: 'row1-7',
                volume: 'row1-8',
              },
            },
            player: 'bottom',
          }}
          activeUI={{
            all: true,
            progress: 'progress',
          }} 
          
        />
      </div>
    );
  };
  
  export default PlaylistPlayer;
