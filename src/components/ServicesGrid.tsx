import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  data: Array<{
    label: string;
    title: string;
    description: string;
    outcome: string;
  }>;
}

export function ServicesGrid({ data }: ServicesGridProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-[#05282a] py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <p className="text-[#19b2bc] tracking-[0.2em] mb-4">OUR SERVICES</p>
          <h2 className="text-[48px] leading-[1.2] tracking-tight text-white mb-6">
            How We <span className="text-[#19b2bc]">Maximize Your Exit Value</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {data.map((service, index) => (
            <div
              key={index}
              className="bg-[#00686f] p-8 rounded-lg hover:bg-[#007a82] transition-colors group"
            >
              <p className="text-[#19b2bc] text-sm tracking-[0.15em] mb-4">
                {service.label}
              </p>
              
              <h3 className="text-white text-2xl mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/90 text-sm mb-4">
                  <span className="text-[#19b2bc] font-semibold">Outcome: </span>
                  {service.outcome}
                </p>
              </div>

              <button className="text-[#19b2bc] hover:text-white transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                Learn More
                <ArrowRight size={16} className="transition-all" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}