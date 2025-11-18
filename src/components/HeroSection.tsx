import imgRectangle9 from "figma:asset/4cb9d1befb6ac84e63b1b26de9d2d3d6a1e96b8e.png";
import imgEllipse1 from "figma:asset/8e469a9244e61470ddb5a8bb6b97cd1876447c0a.png";
import imgEllipse2 from "figma:asset/5f3ed505e90b92544a56eed55deb7ffbb1d2e2db.png";
import { ArrowUpRight, Info } from 'lucide-react';
import { Navigation } from './Navigation';
import { ScrollingBanner } from './ScrollingBanner';

function FounderImages({ images }: { images: string[] | string }) {
  const fallbackImages = [imgEllipse1, imgEllipse2];
  
  // Handle both string and array formats
  let imageArray: string[] = [];
  if (typeof images === 'string') {
    // Split by space if it's a space-separated string
    imageArray = images.trim().split(/\s+/).filter(img => img.length > 0 && !img.startsWith('figma:'));
  } else if (Array.isArray(images)) {
    imageArray = images.filter(img => !img.startsWith('figma:'));
  }
  
  // If all images are figma URLs or empty, use fallbacks
  const displayImages = imageArray.length > 0 ? imageArray : fallbackImages;

  return (
    <div className="flex items-start -space-x-3">
      {displayImages.map((img, index) => (
        <div key={index} className="relative shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
          <img alt="" className="w-full h-full object-cover" src={img} />
        </div>
      ))}
    </div>
  );
}

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    cta_text: string;
    cta_url: string;
    background_image_url: string;
    quote: string;
    founders: {
      names: string;
      title: string;
      images: string[];
    };
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  // Don't return null - always render something, even if empty
  if (!data || !data.title || (typeof data.title === 'string' && data.title.trim() === '')) {
    console.warn('HeroSection: No title provided, skipping render', data);
    return null;
  }

  // Use provided background image or fallback
  // Handle figma:asset URLs - if it's a figma URL, use fallback, otherwise use the URL
  const bgImage = (data.background_image_url && !data.background_image_url.startsWith('figma:')) 
    ? data.background_image_url 
    : imgRectangle9;
  const titleLines = (data.title || '').split('\n');

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          alt="" 
          className="w-full h-full object-cover" 
          src={bgImage} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#05282a]/90" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative h-full flex items-center px-[60px] pt-[120px] pb-[200px]">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="grid grid-cols-2 gap-[100px] items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-[40px]">
              {/* Main Heading */}
              <h1 className="text-white text-[72px] leading-[1.1] tracking-tight">
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="text-white text-[20px] leading-[1.6] max-w-[500px]">
                <span className="font-['Poppins:Bold',sans-serif]">Centaura </span>
                {data.subtitle || ''}
              </p>

              {/* CTA Button */}
              <a 
                href={data.cta_url || '#'}
                className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-[35px] py-[15px] inline-flex items-center gap-3 transition-colors self-start"
              >
                <span className="tracking-wide">{data.cta_text}</span>
                <ArrowUpRight size={20} />
              </a>
            </div>

            {/* Right Column - Quote Box */}
            <div className="flex flex-col gap-[25px] pt-[80px]">
              {/* Quote Card */}
              <div className="bg-gradient-to-br from-[#00686f]/90 to-[#004d52]/90 backdrop-blur-sm p-[30px] border border-[#19b2bc]/30 relative">
                {/* Info Icon */}
                <div className="absolute -top-4 left-8 bg-[#1e90ff] p-2 rounded">
                  <Info size={20} className="text-white" />
                </div>

                <p className="text-white text-[16px] leading-[1.7] italic mt-4">
                  "{data.quote || ''}"
                </p>
              </div>

              {/* Founders Info */}
              <div className="flex items-center gap-4">
                <FounderImages images={data.founders?.images || []} />
                <div className="text-white">
                  <div className="tracking-wide">{data.founders?.names || ''}</div>
                  <div className="text-sm opacity-80">{data.founders?.title || ''}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Banner */}
      <ScrollingBanner />
    </div>
  );
}