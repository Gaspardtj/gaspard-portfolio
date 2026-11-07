
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Photo({
  src,
  alt,
  className = "",
}: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-slate-800 text-slate-500 ${className}`}
      >
        <ImageIcon size={48} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
