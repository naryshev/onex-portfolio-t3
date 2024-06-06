import { useState } from "react";
import {
  ProgressUI,
  PlayerPlacement,
  InterfaceGridTemplateArea,
  PlayListPlacement,
  VolumeSliderPlacement,
  ActiveUI
} from "react-modern-audio-player";
import { playerMode } from "./playerMode";

interface EditorProps {
  setProgressType: React.Dispatch<React.SetStateAction<ProgressUI>>;
  setPlayerPlacement: React.Dispatch<React.SetStateAction<PlayerPlacement>>;
  setInterfacePlacement: React.Dispatch<
    React.SetStateAction<InterfaceGridTemplateArea | undefined>
  >;
  setPlayListPlacement: React.Dispatch<React.SetStateAction<PlayListPlacement>>;
  setVolumeSliderPlacement: React.Dispatch<
    React.SetStateAction<VolumeSliderPlacement | undefined>
  >;
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | undefined>>;
  setActiveUI: React.Dispatch<React.SetStateAction<ActiveUI>>;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({
  setProgressType,
  setPlayerPlacement,
  setInterfacePlacement,
  setPlayListPlacement,
  setVolumeSliderPlacement,
  setTheme,
  setActiveUI,
  setWidth
}: EditorProps) {
  const [curPlayerModeIdx, setCurPlayerModeIdx] = useState(0);

  const changePlayerMode = () => {
    const nextIdx = (curPlayerModeIdx + 1) % Object.keys(playerMode).length;

    setCurPlayerModeIdx(nextIdx);
    setInterfacePlacement(playerMode[nextIdx].interfacePlacement);
    setProgressType(playerMode[nextIdx].progressType);
    setPlayListPlacement(playerMode[nextIdx].playListPlacement);
    setVolumeSliderPlacement(playerMode[nextIdx].volumeSliderPlacement);
    setWidth(playerMode[nextIdx].width ?? "100%");
    setActiveUI(playerMode[nextIdx].activeUI ?? { all: true });
  };

  const changeTheme = () => {
    const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    setTheme((prevTheme) => {
      switch (prevTheme) {
        case undefined:
          return isSystemDarkTheme ? "light" : "dark";
        case "dark":
          return "light";
        case "light":
          return undefined;
        default:
          return undefined;
      }
    });
  };

  return (
    <div className="editor">
      <div className="editor-section">
        <button
          onClick={() =>
            setProgressType((prev) => (prev === "bar" ? "waveform" : "bar"))
          }
        >
          change progress type
        </button>

        <button
          onClick={() => {
            setPlayerPlacement((prevPlacement) => {
              switch (prevPlacement) {
                case "static":
                  return "top-left";
                case "top-left":
                  return "bottom-left";
                case "bottom-left":
                  return "static";
                default:
                  return "static";
              }
            });
          }}
        >
          change player placement
        </button>
      </div>

      <div className="editor-section">
        <button onClick={changePlayerMode}>change player mode</button>
        <button onClick={changeTheme}>change theme</button>
      </div>
    </div>
  );
}
