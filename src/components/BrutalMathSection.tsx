interface BrutalMathSectionProps {
  data: {
    title: string;
    subtitle: string;
    statistics: Array<{
      value: string;
      description: string;
    }>;
    closing_text: string;
  };
}

export function BrutalMathSection({ data }: BrutalMathSectionProps) {
  if (!data || !data.title) return null;

  return (
    <div className="bg-[#f8f8f8] py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <h2 className="text-[48px] leading-[1.2] tracking-tight mb-6">
            {data.title.includes('Missed Preparation') ? (
              <>
                The Brutal Math of <span className="text-[#00686f]">Missed Preparation</span>
              </>
            ) : (
              data.title
            )}
          </h2>
          <p className="text-gray-600 text-lg">
            {data.subtitle}
          </p>
        </div>

        <div className="bg-white border border-[#00686f]/20 rounded-lg p-12">
          <div className="grid grid-cols-3 gap-12">
            {(data.statistics || []).map((stat, index) => (
              <div key={index}>
                <div className="text-[96px] text-[#00686f] leading-none mb-4" style={{ fontWeight: 100 }}>
                  {stat.value}
                </div>
                <p className="text-gray-700">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#00686f]/10 border-l-4 border-[#00686f] p-8 rounded">
          <p className="text-lg text-gray-800">
            {data.closing_text}
          </p>
        </div>
      </div>
    </div>
  );
}
