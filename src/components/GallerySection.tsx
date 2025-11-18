import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
              <ImageWithFallback 
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl mb-6">Ready to Secure Your Storage?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their valuable belongings. 
            Reserve your unit today and experience the difference.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
            GET STARTED TODAY
          </button>
        </div>
      </div>
    </div>
  );
}
