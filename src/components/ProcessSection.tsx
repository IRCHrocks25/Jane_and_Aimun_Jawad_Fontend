interface ProcessSectionProps {
  data: {
    label: string;
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    cta_text: string;
    cta_url: string;
  };
}

export function ProcessSection({ data }: ProcessSectionProps) {
  if (!data || !data.title || !data.steps || data.steps.length === 0) return null;

  return (
    <div className="bg-[#05282a] py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <p className="text-[#19b2bc] tracking-[0.2em] mb-4">{data.label}</p>
          <h2 className="text-[48px] leading-[1.2] tracking-tight text-white mb-6">
            {data.title.includes('Premium Exit') ? (
              <>
                Four Steps to Your <span className="text-[#19b2bc]">Premium Exit</span>
              </>
            ) : (
              data.title
            )}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {data.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-[#00686f] text-[80px] leading-none mb-6" style={{ fontWeight: 100 }}>
                {step.number}
              </div>
              
              <h3 className="text-white text-2xl mb-4">
                {step.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>

              {index < data.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-[#00686f]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
