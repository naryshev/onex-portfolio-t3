interface ProgressCSSProps extends React.CSSProperties {
    '--progress-width': number;
    '--buffered-width': number;
  }
  
  interface AudioProgressBarProps
    extends React.ComponentPropsWithoutRef<'input'> {
    duration: number;
    currentProgress: number;
    buffered: number;
  }
  
  export default function AudioProgressBar(props: AudioProgressBarProps) {
    const { duration, currentProgress, buffered, ...rest } = props;
  
    const progressBarWidth = isNaN(currentProgress / duration)
      ? 0
      : currentProgress / duration;
    const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;
  
    const progressStyles: ProgressCSSProps = {
      '--progress-width': progressBarWidth,
      '--buffered-width': bufferedWidth,
    };
  
    return (
      <div className="absolute h-2 -top-[4px] left-6 right-6 rounded-xl ">
        <input
          type="range"
          name="progress"
          className={`progress-bar absolute inset-0  m-0  h-full bg-transparent cursor-pointer dark:bg-gray-700 group-hover:h-2 transition-all accent-fuchsia-600 hover:accent-fuchsia-600 before:absolute before:inset-0 before:h-full before:w-full before:bg-fuchsia-600 before:origin-left before:rounded-xl after:absolute after:h-full after:w-full after:bg-fuchsia-600/50 after:rounded-xl`}
          style={progressStyles}
          min={0}
          max={duration}
          value={currentProgress}
          {...rest}
        />
      </div>
    );
  }
  