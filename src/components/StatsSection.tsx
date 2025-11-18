interface StatsSectionProps {
  data: Array<{
    label: string;
    value: string;
  }>;
}

export function StatsSection({ data }: StatsSectionProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <p className="text-[#00686f] tracking-[0.2em] mb-4">TRANSFORMING EXITS</p>
          <h2 className="text-[48px] leading-[1.2] tracking-tight mb-6">
            Designed to be <span className="text-[#00686f]">as competitive as possible</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {data.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[72px] text-[#00686f] mb-2" style={{ fontWeight: 100 }}>{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
