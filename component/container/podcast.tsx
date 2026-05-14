// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import AuthProvider from "../authProvider";
import Link from "next/link";
import Button from "../ui/button";
import { ArrowLeft, Heart, Pause, Play, Repeat } from "lucide-react";
import ThemeToggler from "../ui/themeToggler";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { cn, formatTime } from "@/lib/util";
import podcastData from "@/data/podcast";

// Creating and Exporting Podcast page container
export default function PodcastContainer() {
   // Defining hooks
   const audioRef = useRef<HTMLAudioElement | null>(null);
   const [playing, setPlaying] = useState<boolean>(false);
   const [repeat, setRepeat] = useState<boolean>(false);
   const [currentTime, setCurrentTime] = useState<number>(0);
   const [duration, setDuration] = useState<number>(0);
   const [activeSentenceIndex, setActiveSenctenceIndex] = useState<
      number | undefined
   >(undefined);

   const [liked, setLiked] = useLocalStorageState<boolean>("podcastLiked", {
      defaultValue: false,
   });

   // Defining variables
   const percentage = duration > 0 ? (currentTime / duration) * 100 : 0;

   // Using useEffect to set activeSentenceIndex
   useEffect(() => {
      if (audioRef.current && podcastData.length > 0) {
         let newActiveIndex: number | undefined = undefined;

         for (let i = 0; i < podcastData.length; i++) {
            if (currentTime >= podcastData[i].time) {
               if (
                  i === podcastData.length - 1 ||
                  currentTime < podcastData[i + 1].time
               ) {
                  newActiveIndex = i;
               }
            }
         }

         setActiveSenctenceIndex(newActiveIndex);
      }
   }, [currentTime]);

   // Returning JSX
   return (
      <AuthProvider>
         <audio
            hidden
            src="/audio/podcast.mp3"
            preload="none"
            ref={audioRef}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => {
               if (repeat) {
                  audioRef.current?.play();
               }
            }}
            onTimeUpdate={() => {
               const time = audioRef.current?.currentTime || 0;
               setCurrentTime(time);
            }}
            onLoadedMetadata={() =>
               setDuration(audioRef.current?.duration || 0)
            }
         />
         <div className="h-[calc(100dvh-32px)] flex items-center justify-between flex-col gap-4">
            <div className="w-full shrink-0 flex items-center justify-start gap-3">
               <ThemeToggler />
               <Button asChild variant="outline" size="icon">
                  <Link href="/home">
                     <ArrowLeft className="size-4" />
                  </Link>
               </Button>
            </div>
            <div className="relative h-full w-full overflow-auto">
               <div className="flex flex-col gap-4">
                  {podcastData.map((item, index) => (
                     <p
                        key={index}
                        className={cn(
                           "text-center font-bold text-2xl block transition-all duration-500",
                           index === activeSentenceIndex
                              ? "dark:text-white text-neutral-900"
                              : "dark:text-white/40 text-neutral-400",
                        )}
                     >
                        {item.value}
                     </p>
                  ))}
               </div>
            </div>
            <div className="shrink-0 w-full">
               <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="shrink-0 font-normal text-xs text-neutral-500">
                     {formatTime(currentTime)}
                  </span>
                  <div className="flex-1 w-full h-1 rounded-[45rem] bg-neutral-300">
                     <div
                        className="bg-base h-1 rounded-[45rem] relative transition-all duration-500"
                        style={{
                           width: `${percentage.toFixed(2)}%`,
                        }}
                     >
                        <div className="size-3 absolute left-full top-1/2 bg-white border-3 rounded-full border-base -translate-1/2" />
                     </div>
                  </div>
                  <span className="shrink-0 font-normal text-xs text-neutral-500">
                     {formatTime(duration)}
                  </span>
               </div>
               <div className="flex items-center justify-center gap-3">
                  <button
                     data-active={repeat}
                     onClick={() => setRepeat((prev) => !prev)}
                     className={cn(
                        "size-14 flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer active:scale-95 outline-0",
                        "data-[active=false]:text-neutral-500 data-[active=false]:bg-transparent",
                        "data-[active=true]:text-white data-[active=true]:bg-indigo-600",
                        "ring-0 data-[active=false]:ring-neutral-500/40 data-[active=true]:ring-indigo-600/40 focus-visible:ring-4",
                     )}
                  >
                     <Repeat className="size-5" />
                  </button>
                  <button
                     onClick={() => {
                        if (!playing) audioRef?.current?.play();
                        else audioRef?.current?.pause();

                        setPlaying((prev) => !prev);
                     }}
                     className={cn(
                        "size-18 flex items-center justify-center bg-base text-white rounded-full active:scale-95 transition-all duration-500 cursor-pointer",
                        "outline-0 ring-0 ring-base/40 focus-visible:ring-4 shadow-xl shadow-black/30",
                     )}
                  >
                     {!playing ? (
                        <Play className="size-8 fill-current" />
                     ) : (
                        <Pause className="size-8 fill-current" />
                     )}
                  </button>
                  <button
                     data-active={liked}
                     onClick={() => setLiked((prev) => !prev)}
                     className={cn(
                        "size-14 flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer active:scale-95 outline-0",
                        "data-[active=false]:text-neutral-500 data-[active=false]:bg-transparent",
                        "data-[active=true]:text-white data-[active=true]:bg-rose-600",
                        "ring-0 data-[active=false]:ring-neutral-500/40 data-[active=true]:ring-rose-600/40 focus-visible:ring-4",
                     )}
                  >
                     <Heart className="size-5 fill-current" />
                  </button>
               </div>
            </div>
         </div>
      </AuthProvider>
   );
}
