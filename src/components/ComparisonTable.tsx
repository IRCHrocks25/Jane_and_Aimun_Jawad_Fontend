import { Check, X } from 'lucide-react';

interface ComparisonTableProps {
  data: {
    title: string;
    subtitle: string;
    features: Array<{
      name: string;
      typical: boolean;
      centaura: boolean;
    }>;
    cta_text: string;
    cta_url: string;
  };
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  if (!data || !data.features || data.features.length === 0) return null;

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <h2 className="text-[48px] leading-[1.2] tracking-tight mb-6">
            {data.title.includes('Different') ? (
              <>
                What Makes Us <span className="text-[#00686f]">Different?</span>
              </>
            ) : (
              data.title
            )}
          </h2>
          <p className="text-gray-600 text-lg">
            {data.subtitle}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-6"></div>
            <div className="p-6 text-center border-x border-gray-200">
              <h3 className="text-lg text-gray-600">Typical Exit Advisor</h3>
            </div>
            <div className="p-6 text-center bg-[#00686f] text-white">
              <h3 className="text-lg">Centaura Group</h3>
            </div>
          </div>

          {data.features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="p-6">
                <p className="font-medium text-gray-900">{feature.name}</p>
              </div>
              
              <div className="p-6 flex justify-center items-center border-x border-gray-200">
                {feature.typical ? (
                  <Check className="text-green-500" size={24} />
                ) : (
                  <X className="text-gray-300" size={24} />
                )}
              </div>
              
              <div className="p-6 flex justify-center items-center">
                {feature.centaura ? (
                  <Check className="text-[#00686f]" size={24} />
                ) : (
                  <X className="text-gray-300" size={24} />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href={data.cta_url || '#'}
            className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-[35px] py-[15px] transition-colors inline-block"
          >
            {data.cta_text}
          </a>
        </div>
      </div>
    </div>
  );
}
