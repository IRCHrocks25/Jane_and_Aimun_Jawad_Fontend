import { ArrowRight } from 'lucide-react';

interface FinalWordSectionProps {
  data: {
    label: string;
    title: string;
    content: string[];
    background_image?: string;
    cta_text: string;
    cta_url: string;
  };
}

export function FinalWordSection({ data }: FinalWordSectionProps) {
  if (!data || !data.title) return null;

  // Group content by empty strings (paragraph breaks)
  const paragraphs: string[][] = [];
  let currentParagraph: string[] = [];

  (data.content || []).forEach((line) => {
    if (line === '') {
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph);
        currentParagraph = [];
      }
    } else {
      currentParagraph.push(line);
    }
  });
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph);
  }

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#00686f' }}
    >
      {/* Content - Centered container with left-aligned text */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-[60px] py-20">
        <div className="max-w-[600px] mx-auto">
          {/* Label - Centered */}
          {data.label && (
            <p className="text-white/90 tracking-[0.15em] text-xs mb-6 uppercase font-medium text-center">
              {data.label}
            </p>
          )}

          {/* Title - Centered */}
          <h2 className="text-white text-[40px] leading-[1.2] mb-8 font-semibold text-center">
            {data.title}
          </h2>

          {/* Content paragraphs - Centered */}
          <div className="text-center">
            {paragraphs.map((paragraph, pIndex) => {
              const isLastParagraph = pIndex === paragraphs.length - 1;
              
              // Last paragraph becomes a heading
              if (isLastParagraph) {
                return (
                  <h3
                    key={pIndex}
                    className="text-white mb-8 font-semibold text-base leading-relaxed"
                  >
                    {paragraph.map((line, lIndex) => (
                      <span key={lIndex}>
                        {line}
                        {lIndex < paragraph.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                );
              }
              
              // Regular paragraphs
              return (
                <div
                  key={pIndex}
                  className={`text-white mb-8 text-center ${
                    pIndex === 1 ? 'space-y-4' : 'space-y-1'
                  }`}
                >
                  {paragraph.map((line, lIndex) => (
                    <p
                      key={lIndex}
                      className="leading-relaxed text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* CTA Button - Centered box style */}
          <div className="text-center mt-10">
            <a
              href={data.cta_url || '#'}
              className="inline-flex items-center gap-3 bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-8 py-4 uppercase tracking-[0.1em] text-sm font-semibold transition-colors"
            >
              {data.cta_text}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
