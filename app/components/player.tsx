"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import { MdPlayArrow, MdPause } from 'react-icons/md';
import AudioPlayer from '../AudioPlayer';
import { songs } from '../songs';

interface PlayerProps {
    onClose: () => void;
  }

export const Player: React.FC<PlayerProps> = ({onClose}) => {
    const [currentSongIndex, setCurrentSongIndex] = React.useState(-1);

    const currentSong = songs[currentSongIndex];
  
  
	return (
		<div className="flex min-h-screen items-center justify-center  ">
            <div className="">
                <div className="flex flex-col h-full bg-zinc-900 text-zinc-300 rounded-xl ">
                    <div className="container mx-auto px-6 py-8 flex-1">
                        
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
                                </span> */}s
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
// function setLoading(arg0: boolean) {
//     throw new Error("Function not implemented.");
// }







{/*         <div className="w-2/3">
                <div className=" border-zinc-100 dark:bg-zinc-800 dark:border-zinc-500 border-b rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8  items-center">
                    <div className="flex items-center space-x-4">
                    <Skeleton circle width={270} height={270} />
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1a/57/56/1a5756bf-1e8b-15ba-6901-4bde09305922/7dae8b2e-f429-4ff1-bba5-d706fa77af27.jpg/316x316bb.webp" alt="" width="270" height="270" className="flex-none rounded-lg bg-zinc-100 " loading="lazy" />
                    <div className="min-w-0 flex-auto space-y-1 font-semibold">
                        <p className="text-fuchsia-500 dark:text-fuchsia-400 text-sm leading-6">
                            <abbr title="Track">Track:</abbr> 01 <Skeleton />
                        </p>
                        <h2 className="text-zinc-500 dark:text-zinc-400 text-sm leading-6 truncate">
                        BredWinner$, BwOsama <Skeleton width={150} />
                        </h2>
                        <p className="text-zinc-900 dark:text-zinc-50 text-lg">
                        Scouts <Skeleton width={100} />
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <div className="relative">
                        <div className="bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div className="bg-fuchsia-500 dark:bg-fuchsia-400 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550">

                            </div>
                        </div>
                        <div className="ring-fuchsia-500 dark:ring-fuchsia-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                            <div className="w-1.5 h-1.5 bg-fuchsia-500 dark:bg-fuchsia-400 rounded-full ring-1 ring-inset ring-zinc-900/5">

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                        <div className="text-fuchsia-500 dark:text-zinc-100">1:75</div>
                        <div className="text-fuchsia-500 dark:text-zinc-400">3:20</div>
                    </div>
                    </div>
                </div>
                <div className="bg-zinc-500 text-zinc-500 dark:bg-zinc-600 dark:text-zinc-200 rounded-b-xl flex items-center">
                    <div className="flex-auto flex items-center justify-evenly">
                        <button title="Like" type="button" aria-label="Add to favorites">
                            <svg width="24" height="24">
                            <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button title="Previous" type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                            <svg width="24" height="24" fill="none">
                            <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button title="10 Seconds" type="button" aria-label="Rewind 10 seconds">
                            <svg width="24" height="24" fill="none">
                            <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        </div>
                        <button title="Play"type="button" className="bg-white text-zinc-900 dark:bg-zinc-100 dark:text-zinc-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-zinc-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                        <svg width="30" height="32" fill="currentColor">
                            <rect x="6" y="4" width="4" height="24" rx="2" />
                            <rect x="20" y="4" width="4" height="24" rx="2" />
                        </svg>
                        </button>
                        <div className="flex-auto flex items-center justify-evenly">
                        <button title="Skip 10 Seconds" type="button" aria-label="Skip 10 seconds">
                            <svg width="24" height="24" fill="none">
                            <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button title="Next" type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                            <svg width="24" height="24" fill="none">
                            <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button title="Playback Speed" type="button" className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-zinc-500 text-zinc-500 dark:text-zinc-100 dark:ring-0 dark:bg-zinc-500">
                            1x
                        </button>
                    </div>
                </div>
            </div> */}
