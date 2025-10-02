import React from 'react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

type LectioDivinaStepCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  iconName: IconName;
  color: "yellow" | "blue";
  tag: string;
}

export default function LectioDivinaStepCard(
  { title, description, iconName, subtitle, color, tag }: LectioDivinaStepCardProps
) {
  const variantColors = {
    yellow: {
      bg: "bg-[#F3EACE]",
      text: "text-primary",
    },
    blue: {
      bg: "bg-[#D1E6FA]",
      text: "text-[#0088FF]",
    },
  }
  return (
    <div className="bg-white border border-[#C9C9C9] text-gray-800 p-6 h-full flex flex-col rounded-4xl">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-full ${variantColors[color].bg}`}>
          <DynamicIcon name={iconName} className={`text-xl ${variantColors[color].text}`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start flex-wrap">
            <h3 className="text-lg md:text-xl font-bold text-[#0088FF]">{title}</h3>
            <span className="text-xs md:text-sm text-gray-500">({tag})</span>
          </div>
          <p className="font-semibold text-[#151515] mt-1 text-xs md:text-sm uppercase">
            {subtitle}
          </p>
          <p className="mt-2 text-xs md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
