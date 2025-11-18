import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  data: Array<{
    category: string;
    title: string;
    description: string;
    image_url: string;
  }>;
}

export function CaseStudiesSection({ data }: CaseStudiesSectionProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-[#f8f8f8] py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <p className="text-[#00686f] tracking-[0.2em] mb-4">SUCCESS STORIES</p>
          <h2 className="text-[48px] leading-[1.2] tracking-tight mb-6">
            Real Exits. <span className="text-[#00686f]">Real Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {data.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image_url}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <p className="text-[#00686f] text-sm tracking-[0.15em] mb-3">
                  {caseStudy.category}
                </p>
                
                <h3 className="text-2xl mb-3">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {caseStudy.description}
                </p>
                
                <button className="text-[#00686f] hover:text-[#004d52] transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  Read Case Study
                  <ArrowRight size={16} className="transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
