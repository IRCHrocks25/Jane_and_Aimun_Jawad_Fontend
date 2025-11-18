import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';

export function StorageSolutions() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">DISCOVER OUR STORAGE SOLUTIONS</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
              alt="Professional woman"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl mb-6">Personal Storage</h3>
            <p className="text-gray-600 mb-6">
              Perfect for home decluttering, seasonal items, or during a move. Our personal storage 
              units come in various sizes to fit your needs.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="text-orange-500 flex-shrink-0" size={20} />
                <span>Climate-controlled units available</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-orange-500 flex-shrink-0" size={20} />
                <span>Month-to-month leasing options</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-orange-500 flex-shrink-0" size={20} />
                <span>24/7 access to your belongings</span>
              </li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl mb-6">Business Storage</h3>
            <p className="text-gray-600 mb-6">
              Flexible storage solutions for businesses of all sizes. From inventory management 
              to document storage, we have you covered.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="text-orange-500 flex-shrink-0" size={20} />
                <span>Commercial-grade security systems</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-orange-500 flex-shrink-0" size={20} />
                <span>Loading dock access available</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-orange-500 flex-shrink-0" size={20} />
                <span>Scalable solutions as you grow</span>
              </li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
              LEARN MORE
            </button>
          </div>
          
          <div className="relative h-96 overflow-hidden rounded-lg order-1 md:order-2">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=800&fit=crop"
              alt="Business professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
