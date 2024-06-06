// Modal.tsx

import React, { useEffect, useRef, useState } from "react";
import { MdPlayArrow, MdPause } from 'react-icons/md';
// import AudioPlayer from '../AudioPlayer';
// import { songs } from '../songs';


interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const [currentSongIndex, setCurrentSongIndex] = React.useState(-1);

    const currentSong = songs[currentSongIndex];
  
    useEffect(() => {
        // Prevent scrolling when the modal is open
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling when the modal is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-transparent p-8 rounded-lg">
        
        <div className="flex flex-col h-full bg-zinc-900 text-zinc-300 rounded-xl ">
            
                <div className="container mx-auto px-6 py-2  flex-1">
                <div className=" py-4 flex flex-row-reverse">
                    <button type="button" onClick={onClose} className="items-end bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fuchsia-500 " >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> 
                </div>        
                        <ul>
                        {songs.map((song, index) => (
                            <li key={song.title} className="mb-1">
                            <button
                                onClick={() => setCurrentSongIndex(index)}
                                className={`flex items-center py-4 px-3  w-full space-evenly rounded ${
                                currentSongIndex === index
                                    ? 'bg-fuchsia-600 text-white'
                                    : ' hover:bg-fuchsia-600 hover:text-white'
                                }`}
                            >
                                {/* <span className="text-sm">
                                {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                                </span>    track number label */}
                                <span></span>
                                <h2 className="flex-1">{song.author} - {song.title} </h2>
                                <span>
                                {index === currentSongIndex ? (
                                    <MdPause size={20} />
                                ) : (
                                    <MdPlayArrow size={20} />
                                )}
                                </span>
                            </button>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex-auto flex items-center justify-evenly rounded-b-xl">
                        <AudioPlayer
                            key={currentSongIndex}
                            currentSong={currentSong}
                            songCount={songs.length}
                            songIndex={currentSongIndex}
                            onNext={() => setCurrentSongIndex((i) => i + 1)}
                            onPrev={() => setCurrentSongIndex((i) => i - 1)}
                        />
                    </div>
                </div>  
           
           
        
      </div>
    </div>
  );
};

export default Modal;
