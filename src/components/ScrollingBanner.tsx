export function ScrollingBanner() {
  const words = ['MANAGEMENT', 'AUTOMATION', 'GOVERNANCE', 'STRATEGY', 'INNOVATION', 'TRANSFORMATION'];
  
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#05282a] border-t-2 border-[#00686f] overflow-hidden py-6">
      <div className="flex items-center gap-8 animate-scroll-banner whitespace-nowrap">
        {[...words, ...words, ...words].map((word, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-white text-4xl font-['Helvetica_Neue:Bold',sans-serif] tracking-wider" style={{ 
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'transparent',
            }}>
              {word}
            </span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}