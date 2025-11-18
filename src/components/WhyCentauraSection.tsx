import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface WhyCentauraSectionProps {
  data: {
    label: string;
    title: string;
    image_url: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    cta_text: string;
    cta_url: string;
  };
}

export function WhyCentauraSection({ data }: WhyCentauraSectionProps) {
  if (!data || !data.title) return null;

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={data.image_url || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"}
                alt="Professional consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-[#00686f] tracking-[0.2em] mb-4">{data.label}</p>
            <h2 className="text-[48px] leading-[1.2] tracking-tight mb-6">
              {data.title.includes('Exit Strategy') ? (
                <>
                  A Smarter Path to <span className="text-[#00686f]">Exit Strategy</span>
                </>
              ) : (
                data.title
              )}
            </h2>
            
            <div className="space-y-6 mb-8">
              {(data.features || []).map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00686f] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={data.cta_url || '#'}
              className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-[35px] py-[15px] inline-flex items-center gap-3 transition-colors"
            >
              {data.cta_text}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
