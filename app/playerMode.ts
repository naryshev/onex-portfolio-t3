import {
    ActiveUI,
    InterfaceGridTemplateArea,
    PlayListPlacement,
    ProgressUI,
    VolumeSliderPlacement
  } from "react-modern-audio-player";
  
  export const playerMode: Record<
    number,
    {
      interfacePlacement: InterfaceGridTemplateArea;
      playListPlacement: PlayListPlacement;
      progressType: ProgressUI;
      volumeSliderPlacement?: VolumeSliderPlacement;
      width?: string;
      activeUI?: ActiveUI;
    }
  > = {
    0: {
      interfacePlacement: {
        artwork: "row1-1",
        trackInfo: "row1-2",
        trackTimeCurrent: "row1-3",
        trackTimeDuration: "row1-4",
        progress: "row1-5",
        repeatType: "row1-6",
        volume: "row1-7",
        playButton: "row1-8",
        playList: "row1-9"
      },
      playListPlacement: "bottom",
      progressType: "waveform"
    },
    1: {
      interfacePlacement: {
        trackTimeDuration: "row1-5",
        progress: "row1-4",
        playButton: "row1-6",
        repeatType: "row1-7",
        volume: "row1-8"
      },
      playListPlacement: "bottom",
      progressType: "bar"
    },
    2: {
      interfacePlacement: {
        artwork: "row1-2",
        playList: "row1-3",
        trackInfo: "row2-2",
        trackTimeCurrent: "row3-1",
        progress: "row3-2",
        trackTimeDuration: "row3-3",
        playButton: "row4-2",
        repeatType: "row4-1",
        volume: "row4-3"
      },
      playListPlacement: "top",
      volumeSliderPlacement: "left",
      progressType: "bar"
    },
    3: {
      interfacePlacement: {
        playList: "row2-1",
        progress: "row1-2",
        playButton: "row2-2",
        volume: "row2-3"
      },
      playListPlacement: "bottom",
      progressType: "bar",
      width: "200px",
      activeUI: {
        playButton: true,
        playList: "sortable",
        prevNnext: true,
        volume: true
      }
    }
  };
  