import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhatMakesDifferent() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">WHAT MAKES US DIFFERENT?</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-3xl mb-6">Premium Facilities</h3>
            <p className="text-gray-600 mb-4">
              Our storage facilities are designed with your peace of mind in mind. Every location 
              features state-of-the-art security systems, climate-controlled environments, and 
              pristine maintenance standards.
            </p>
            <p className="text-gray-600">
              We invest in the latest technology and infrastructure to ensure your belongings 
              are protected from environmental damage, theft, and unauthorized access.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=600&fit=crop"
                alt="Storage facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                alt="Modern interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
