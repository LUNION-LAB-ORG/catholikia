import React, {ElementType} from "react";
import { tv } from "tailwind-variants";

export const titleStyle = tv({
  base: "font-black font-barlow text-foreground text-left",
  variants: {
    color: {
      violet: "from-violet-500 to-pink-500",
      yellow: "from-yellow-500 via-yellow-600 to-orange-800",
      blue: "from-blue-500 to-cyan-500",
      cyan: "from-cyan-500 to-teal-500",
      green: "from-green-500 to-emerald-500",
      pink: "from-pink-500 to-red-500",
    },
    size: {
      xs: "text-2xl lg:text-3xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-3xl lg:text-4xl xl:text-5xl",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },

  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?:ElementType;
  color?: keyof typeof titleStyle.variants.color;
  size?: keyof typeof titleStyle.variants.size;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export default function Title({
  as = "h1",
  color,
  size,
  fullWidth,
  children,
  className,
  ...props
}: TitleProps) {
	const Tag = as || "h1";
  return (
    <Tag className={titleStyle({ color, size, fullWidth, className })} {...props}>
      {children}
    </Tag>
  );
}
