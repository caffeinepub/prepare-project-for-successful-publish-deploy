import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface CircularImageProps {
  src?: string;
  alt: string;
  size?: number;
}

export function CircularImage({ src, alt, size = 105 }: CircularImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const showPlaceholder = !src || imageError;

  return (
    <div 
      className="relative rounded-full overflow-hidden border-[3px] border-border shadow-soft bg-muted"
      style={{ width: size, height: size }}
    >
      {showPlaceholder ? (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <ImageOff className="w-8 h-8 text-muted-foreground/40" />
        </div>
      ) : (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse" />
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
}
