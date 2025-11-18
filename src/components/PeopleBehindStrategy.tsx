import imgEllipse1 from "figma:asset/8e469a9244e61470ddb5a8bb6b97cd1876447c0a.png";
import imgEllipse2 from "figma:asset/5f3ed505e90b92544a56eed55deb7ffbb1d2e2db.png";
import imgVector3 from "figma:asset/1c97b3750e449f4ea10a4fb95c04f98dd6d3b897.png";
import imgVector4 from "figma:asset/e2fe93898bac6de46a3b4706a72fe118b8567992.png";
import { ArrowRight } from 'lucide-react';

interface PeopleBehindStrategyProps {
  data: {
    title: string;
    intro: string;
    jane: {
      name: string;
      title: string;
      image_url: string;
      bio: string[];
    };
    aimun: {
      name: string;
      title: string;
      image_url: string;
      bio: string[];
    };
    cta_text: string;
    cta_url: string;
  };
}

export function PeopleBehindStrategy({ data }: PeopleBehindStrategyProps) {
  if (!data || !data.title) return null;

  const janeNameParts = (data.jane?.name || 'Jane').split(' ');
  const aimunNameParts = (data.aimun?.name || 'Aimun').split(' ');

  return (
    <div className="bg-[#070707] py-20">
      <div className="max-w-7xl mx-auto px-[60px]">
        <div className="text-center mb-16">
          <h2 className="text-[72px] leading-[1.1] tracking-tight text-white mb-8">
            {data.title}
          </h2>
          <p className="text-white text-xl max-w-4xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Jane */}
        <div className="grid grid-cols-2 gap-16 mb-20 items-start">
          <div className="text-white">
            <h3 className="text-[56px] leading-none mb-6">
              {janeNameParts.map((part, i) => (
                <span key={i}>
                  {i === 0 && <span className="font-semibold">{part}</span>}
                  {i > 0 && ` ${part}`}
                </span>
              ))}
            </h3>
            <div className="w-full h-px bg-white/20 mb-8"></div>
            
            {(data.jane?.bio || []).map((paragraph, index) => (
              <p key={index} className="text-white/80 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={(data.jane?.image_url && !data.jane.image_url.startsWith('figma:')) ? data.jane.image_url : imgVector3} 
              alt={data.jane?.name || 'Jane'} 
              className="w-full" 
            />
            {/* Gradient overlay from transparent to teal at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00686f]/95 via-[#00686f]/60 to-transparent pointer-events-none"></div>
            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-lg font-medium">
                {data.jane?.title || ''}
              </p>
            </div>
          </div>
        </div>

        {/* Aimun */}
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={(data.aimun?.image_url && !data.aimun.image_url.startsWith('figma:')) ? data.aimun.image_url : imgVector4} 
              alt={data.aimun?.name || 'Aimun'} 
              className="w-full" 
            />
            {/* Gradient overlay from transparent to teal at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00686f]/95 via-[#00686f]/60 to-transparent pointer-events-none"></div>
            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-lg font-medium">
                {data.aimun?.title || ''}
              </p>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-[56px] leading-none mb-6">
              {aimunNameParts.map((part, i) => (
                <span key={i}>
                  {i === 0 && <span className="font-semibold">{part}</span>}
                  {i > 0 && ` ${part}`}
                </span>
              ))}
            </h3>
            <div className="w-full h-px bg-white/20 mb-8"></div>
            
            {(data.aimun?.bio || []).map((paragraph, index) => (
              <p key={index} className="text-white/80 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
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
  );
}
