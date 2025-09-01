"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Button } from "./ui/button";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  return (
    <div className="relative w-full rounded-2xl overflow-hidden h-full flex justify-center items-center">
      <ReactPlayer
        className="aspect-video"
        controls
        width={"100%"}
        height={"100%"}
        src="https://youtu.be/FLp4817DQ3E"
      />
    </div>
  );
}
