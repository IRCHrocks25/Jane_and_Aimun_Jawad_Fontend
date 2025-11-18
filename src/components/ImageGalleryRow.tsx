import { ImageWithFallback } from './figma/ImageWithFallback';

export function ImageGalleryRow() {
  const images = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&h=400&fit=crop',
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-48 overflow-hidden rounded-lg">
              <ImageWithFallback 
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
            VIEW ALL LOCATIONS
          </button>
        </div>
      </div>
    </div>
  );
}
