interface WhyWeBuiltSectionProps {
  data: {
    left: {
      title: string;
      content: string[];
    };
    right: {
      title: string;
      content: string[];
    };
  };
}

export function WhyWeBuiltSection({ data }: WhyWeBuiltSectionProps) {
  if (!data || (!data.left?.title && !data.right?.title)) return null;

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="text-[40px] leading-[1.2] tracking-tight mb-6">
              {data.left.title.includes('Centaura') ? (
                <>
                  Why We Built <span className="text-[#00686f]">Centaura</span>
                </>
              ) : (
                data.left.title
              )}
            </h2>
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            
            {(data.left?.content || []).map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-[40px] leading-[1.2] tracking-tight mb-6">
              {data.right.title.includes('Perspective') ? (
                <>
                  A Global <span className="text-[#00686f]">Perspective</span>
                </>
              ) : (
                data.right.title
              )}
            </h2>
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            
            {(data.right?.content || []).map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
