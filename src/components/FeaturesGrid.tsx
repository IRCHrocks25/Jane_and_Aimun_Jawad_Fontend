import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturesGrid() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
              alt="Storage units"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl mb-2">CLIMATE CONTROLLED</h3>
                <p className="text-white/80">Premium storage solutions</p>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&h=600&fit=crop"
              alt="Security system"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl mb-2">24/7 SECURITY</h3>
                <p className="text-white/80">Advanced monitoring systems</p>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop"
              alt="Storage facility"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl mb-2">EASY ACCESS</h3>
                <p className="text-white/80">Convenient 24/7 access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
