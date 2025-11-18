import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">THE PEOPLE BEHIND THE STRATEGY</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop"
              alt="Business professional"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <Quote className="text-orange-500 mb-6" size={48} />
            <blockquote className="text-2xl mb-6 italic">
              "We've been using their storage services for our business inventory for over 5 years. 
              The level of security and customer service is unmatched."
            </blockquote>
            <div>
              <div className="text-xl">Michael Chen</div>
              <div className="text-gray-400">CEO, TechStart Solutions</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
            READ MORE STORIES
          </button>
        </div>
      </div>
    </div>
  );
}
