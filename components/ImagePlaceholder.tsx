'use client';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

const ImagePlaceholder = ({ width = 400, height = 300, alt = 'Placeholder', className = '' }: ImagePlaceholderProps) => {
  return (
    <div
      className={`bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
      role="img"
      aria-label={alt}
    >
      <div className="text-center p-4">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mx-auto mb-2 text-primary/60"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-xs text-primary/60 font-medium">{alt}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;

