interface VolumeInputProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
  }
  
  export default function VolumeInput({
    volume,
    onVolumeChange,
  }: VolumeInputProps) {
    return (
      <input
        aria-label="volume"
        name="volume"
        type="range"
        min={0}
        step={0.05}
        max={1}
        value={volume}
        className="hidden sm:block w-[50px] sm:w-[80px] m-0 h-2 rounded-full accent-fuchsia-600 bg-gray-700 appearance-none cursor-pointer"
        onChange={(e) => {
          onVolumeChange(e.currentTarget.valueAsNumber);
        }}
      />
    );
  }
  