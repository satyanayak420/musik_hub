import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const PlayPause = ({ song, handlePause, handlePlay }) => {
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
};
export default PlayPause;
