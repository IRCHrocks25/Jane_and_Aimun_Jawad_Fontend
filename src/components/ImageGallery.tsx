import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageGalleryProps {
  data: Array<{
    url: string;
    alt: string;
  }>;
}

export function ImageGallery({ data }: ImageGalleryProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="grid grid-cols-4 gap-6">
          {data.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
