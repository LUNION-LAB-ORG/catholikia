'use client'

import { useState } from "react";
import { Play, Pause, Volume2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ITemoignage } from "@/features/vie-de-foi/types/vie-de-foi.type";

interface VideoPlayerProps {
  testimonial: ITemoignage;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPlayerModal = ({ testimonial, isOpen, onClose }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!testimonial) return null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl p-0 bg-black/90 border-none shadow-2xl rounded-xl">
        {/* Dialog Title */}
        <DialogTitle className="text-white text-lg font-bold px-4 py-2 border-b border-white/20">
          {testimonial.temoin}
        </DialogTitle>

        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[60vh]">
          {/* Video Background */}
          <img 
            src={testimonial.photo} 
            alt={testimonial.temoin}
            className="w-full h-full object-cover rounded-b-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-b-xl" />

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-white text-2xl font-bold hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Center Play Button */}
            <div className="flex items-center justify-center">
              <Button
                onClick={togglePlay}
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center"
              >
                {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10 ml-1" />}
              </Button>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={togglePlay}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span className="ml-2">{testimonial.temoin}</span>
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">01:17</span>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
