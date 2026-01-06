// MinimalNavButton.tsx
"use client";

interface MinimalNavButtonProps {
  text: string;
  link: string;
  color?: string;      // text color
}

export default function MinimalNavButton({
  text,
  link,
  color = "#e6e6e6",
}: MinimalNavButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-[16px] font-bold cursor-pointer transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
      style={{ color }}
    >
      {text}
      {/* Underline */}
        <span
            className="absolute left-1/2 -bottom-[2px] h-[2px] w-0 bg-white transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] bg-gradient-to-br from-[#a855f7] to-[#6366f1]"
        ></span>

      {/* Hover effect via Tailwind + inline styles */}
      <style jsx>{`
        a:hover span {
          width: 100%;
          left: 0%;
        }
        a:hover {
          color: ${color};
        }
      `}</style>
    </a>
  );
}
