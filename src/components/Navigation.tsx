import { ArrowUpRight } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-[60px] py-[30px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-[50px] h-[50px]">
            <svg viewBox="0 0 83 80" fill="none" className="w-full h-full">
              <g>
                <circle cx="77.348" cy="39.779" fill="#FF7E2E" r="5.30387" />
                <circle cx="37.1271" cy="39.779" fill="#FF7E2E" r="2.20994" />
                <circle cx="47.9558" cy="39.779" fill="#FF7E2E" r="3.53591" />
                <circle cx="60.9945" cy="39.779" fill="#FF7E2E" r="4.41989" />
                <circle cx="25.6353" cy="28.2873" fill="#FF7E2E" r="2.20994" />
                <circle cx="36.464" cy="28.2873" fill="#FF7E2E" r="3.53591" />
                <circle cx="49.5027" cy="28.2873" fill="#FF7E2E" r="4.41989" />
                <circle cx="13.7016" cy="16.7956" fill="#FF7E2E" r="2.20994" />
                <circle cx="24.5304" cy="16.7956" fill="#FF7E2E" r="3.53591" />
                <circle cx="37.5691" cy="16.7956" fill="#FF7E2E" r="4.41989" />
                <circle cx="2.20994" cy="5.30389" fill="#FF7E2E" r="2.20994" />
                <circle cx="13.0386" cy="5.30388" fill="#FF7E2E" r="3.53591" />
                <circle cx="2.20994" cy="74.6962" fill="#FF7E2E" r="2.20994" />
                <circle cx="13.0386" cy="74.6962" fill="#FF7E2E" r="3.53591" />
                <circle cx="25.6353" cy="51.7127" fill="#FF7E2E" r="2.20994" />
                <circle cx="36.464" cy="51.7127" fill="#FF7E2E" r="3.53591" />
                <circle cx="49.5027" cy="51.7127" fill="#FF7E2E" r="4.41989" />
                <circle cx="13.7016" cy="63.2044" fill="#FF7E2E" r="2.20994" />
                <circle cx="24.5304" cy="63.2045" fill="#FF7E2E" r="3.53591" />
                <circle cx="37.5691" cy="63.2045" fill="#FF7E2E" r="4.41989" />
                <circle cx="65.8564" cy="27.8453" fill="#FF7E2E" r="5.30387" />
                <circle cx="65.8564" cy="51.2708" fill="#FF7E2E" r="5.30387" />
                <circle cx="54.3646" cy="16.7956" fill="#FF7E2E" r="5.30387" />
                <circle cx="54.3646" cy="63.2045" fill="#FF7E2E" r="5.30387" />
                <circle cx="42.873" cy="5.30387" fill="#FF7E2E" r="5.30387" />
                <circle cx="42.873" cy="74.6962" fill="#FF7E2E" r="5.30387" />
                <circle cx="26.5193" cy="4.86188" fill="#FF7E2E" r="4.41989" />
                <circle cx="26.5193" cy="74.6962" fill="#FF7E2E" r="4.41989" />
              </g>
            </svg>
          </div>
          <div className="text-white">
            <div className="tracking-wider">Centaura</div>
            <div className="text-xs tracking-widest opacity-80">GROUP</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-[40px]">
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            HOME
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            ABOUT US
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors inline-flex items-center gap-1">
            SERVICES
            <ArrowUpRight size={16} />
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            PRICING
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            CONTACT US
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-[30px] py-[12px] inline-flex items-center gap-2 transition-colors">
          BOOK A MEETING
          <ArrowUpRight size={18} />
        </button>
      </div>
    </nav>
  );
}
