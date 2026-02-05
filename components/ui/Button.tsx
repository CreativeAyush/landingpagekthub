"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const variants = {
            primary: "bg-cyan-500 text-black hover:bg-cyan-400 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]",
            secondary: "bg-indigo-600 text-white hover:bg-indigo-500 border border-indigo-500/50",
            outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
            ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-1.5 text-sm",
            md: "px-6 py-2.5 text-[15px]",
            lg: "px-8 py-3.5 text-base font-medium",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
