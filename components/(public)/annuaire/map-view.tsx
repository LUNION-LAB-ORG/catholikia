import { MapPin } from "lucide-react";

import Image from "next/image";

interface MapMarker {
  id: string;
  x: number; // Position en pourcentage (0-100)
  y: number; // Position en pourcentage (0-100)
  title: string;
}

interface MapViewProps {
  markers: MapMarker[];
}

export const MapView = ({ markers }: MapViewProps) => {
  return (
    <div className="bg-card rounded-lg shadow-sm border p-6">
      <div className="relative w-full max-w-md mx-auto">
        <Image
          src={"/assets/annuaire/map.png"} 
          alt="Carte des diocèses" 
          className="w-full h-auto"
          width={200}
          height={200}
        />
        
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="absolute transform -translate-x-1/2 text-red-500 font-bold -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
            }}
          >
            <MapPin className="w-6 h-6 text-marker-color drop-shadow-sm hover:scale-110 transition-transform" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {marker.title}
            </div>
          </div>
        ))}
        
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-foreground">CARTE DES DIOCÈSES</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;