import React from "react";

interface LogoProps {
  className?: string;
  color?: string;
}

// Canva monochrome/minimal SVG
export const CanvaLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 50C15 30.67 30.67 15 50 15C69.33 15 85 30.67 85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50ZM50 20C33.43 20 20 33.43 20 50C20 66.57 33.43 80 50 80C66.57 80 80 66.57 80 50C80 33.43 66.57 20 50 20Z"
      fill={color}
    />
    <path
      d="M32C36.5 45.5 42 58 52 58C62 58 64.5 45.5 61.5 39C57.5 30.5 44 26 36.5 32.5C29 39 30 52 35.5 60.5C41 69 51 72.5 59.5 70C68 67.5 70.5 59 70.5 59"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// CapCut minimalist SVG vector
export const CapCutLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 30L45 50L20 70V30ZM80 30L55 50L80 70V30Z"
      fill={color}
      stroke={color}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path d="M45 50H55" stroke={color} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

// Meta (infinity logo) SVG
export const MetaLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32.8 35.6C40.6 35.6 47.9 44.8 50 49C52.1 44.8 59.4 35.6 67.2 35.6C75.3 35.6 82.5 42.1 82.5 50C82.5 57.9 75.3 64.4 67.2 64.4C59.4 64.4 52.1 55.2 50 51C47.9 55.2 40.6 64.4 32.8 64.4C24.7 64.4 17.5 57.9 17.5 50C17.5 42.1 24.7 35.6 32.8 35.6Z"
      stroke={color}
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
  </svg>
);

// TikTok (music note logo) SVG
export const TikTokLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M55 20V65C55 73.28 48.28 80 40 80C31.72 80 25 73.28 25 65C25 56.72 31.72 50 40 50C42.5 50 44.83 50.62 46.88 51.7V35.62C40.9 34.69 35 39.42 35 45.62C23.16 41.51 22.8 62.48 31 71C40.67 80.99 64.41 78.43 65 62V40C72 40 78 45 78 51V39C78 39 72 37 65 31V20H55Z"
      fill={color}
    />
  </svg>
);

// Google Ads stylized logo SVG
export const GoogleAdsLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M62 25L32 77L20 56L50 4L62 25Z"
      fill={color === "currentColor" ? "#4285F4" : color}
    />
    <path
      d="M62 25L92 77H68L62 25Z"
      fill={color === "currentColor" ? "#F4B400" : color}
    />
    <path
      d="M68 77H32L68 77Z"
      fill={color === "currentColor" ? "#0F9D58" : color}
    />
    <path
      d="M32 77L68 77L50 46L32 77Z"
      fill={color === "currentColor" ? "#0F9D58" : color}
    />
  </svg>
);

// Meta Business Suite logo icon
export const MetaBusinessSuiteLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="70" height="70" rx="14" stroke={color} strokeWidth="5" />
    <path
      d="M36 43C40 43 44 49 45 51C46 49 50 43 54 43C58.5 43 62 46.5 62 51C62 55.5 58.5 59 54 59C50 59 46 53 45 51C44 53 40 59 36 59C31.5 59 28 55.5 28 51C28 46.5 31.5 43 36 43Z"
      stroke={color}
      strokeWidth="4"
    />
    <circle cx="50" cy="50" r="2" fill={color} />
  </svg>
);

// Google Analytics standard bar logo
export const GoogleAnalyticsLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bar 1 */}
    <rect
      x="22"
      y="55"
      width="14"
      height="25"
      rx="4"
      fill={color === "currentColor" ? "#F4B400" : color}
    />
    {/* Bar 2 */}
    <rect
      x="43"
      y="35"
      width="14"
      height="45"
      rx="4"
      fill={color === "currentColor" ? "#DB4437" : color}
    />
    {/* Bar 3 */}
    <rect
      x="64"
      y="15"
      width="14"
      height="65"
      rx="4"
      fill={color === "currentColor" ? "#4285F4" : color}
    />
  </svg>
);

// Buffer sheets stack logo
export const BufferLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 25L50 15L80 25L50 35L20 25Z" fill={color} />
    <path d="M20 42L50 32L80 42M20 42L50 52L80 42" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 62L50 52L80 62M20 62L50 72L80 62" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Hootsuite modern owl outline logo
export const HootsuiteLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="20" width="50" height="60" rx="12" stroke={color} strokeWidth="5" />
    {/* Eyes */}
    <circle cx="40" cy="42" r="6" stroke={color} strokeWidth="3" />
    <circle cx="40" cy="42" r="2" fill={color} />
    <circle cx="60" cy="42" r="6" stroke={color} strokeWidth="3" />
    <circle cx="60" cy="42" r="2" fill={color} />
    {/* Beak */}
    <path d="M50 48L46 55H54L50 48Z" fill={color} />
    {/* Ears */}
    <path d="M28 20L38 28M72 20L62 28" stroke={color} strokeWidth="4" />
  </svg>
);

// Instagram Camera standard outline logo
export const InstagramLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Facebook standard minimal logo
export const FacebookLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// LinkedIn letter logo
export const LinkedInLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// X logo
export const XLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

// YouTube play logo
export const YouTubeLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);
