import { Mail, Globe, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  data: any; // Footer data structure from API
}

export function Footer({ data }: FooterProps) {
  // Always render footer, even with empty data
  const logo = data?.logo || {};
  const navigation = data?.navigation || {};
  const contact = data?.contact || {};
  const newsletter = data?.newsletter || {};
  const tagline = data?.tagline || {};
  const legalLinks = data?.legal_links || [];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-[60px] py-16">
        <div className="grid grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-[40px] h-[40px]">
                  <svg viewBox="0 0 83 80" fill="none" className="w-full h-full">
                    <g>
                      <circle cx="77.348" cy="39.779" fill="#FF7E2E" r="5.30387" />
                      <circle cx="37.1271" cy="39.779" fill="#FF7E2E" r="2.20994" />
                      <circle cx="47.9558" cy="39.779" fill="#FF7E2E" r="3.53591" />
                      <circle cx="60.9945" cy="39.779" fill="#FF7E2E" r="4.41989" />
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl tracking-wide mb-1">{logo.text || 'Centaura'}</h3>
              <p className="text-xs tracking-widest text-gray-400">{logo.tagline || 'STRATEGIC CONSULTANCY'}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6">{navigation.title || 'Navigation'}</h4>
            <ul className="space-y-3 text-gray-400">
              {(navigation.links || []).map((link: any, index: number) => (
                <li key={index}>
                  <a href={link.url || '#'} className="hover:text-[#19b2bc] transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Centaura */}
          <div style={{ marginLeft: '40px' }}>
            <h4 style={{ marginBottom: '48px', color: 'white' }}>{contact.title || 'Connect with Centaura'}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {contact.email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} className="text-white" strokeWidth={1.5} />
                  <a href={`mailto:${contact.email}`} style={{ color: 'white', fontSize: '14px' }} className="hover:opacity-80 transition-opacity">
                    {contact.email}
                  </a>
                </div>
              )}
              {contact.website && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Globe size={18} className="text-white" strokeWidth={1.5} />
                  <a href={contact.website} style={{ color: 'white', fontSize: '14px' }} className="hover:opacity-80 transition-opacity">
                    {contact.website.replace('https://', '').replace('http://', '')}
                  </a>
                </div>
              )}
              {contact.social_links && contact.social_links.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '8px' }}>
                  {contact.social_links.map((link: any, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <a href={link.url || '#'} style={{ color: 'white', fontSize: '14px' }} className="hover:opacity-80 transition-opacity">
                        {link.platform}
                      </a>
                      {index < contact.social_links.length - 1 && (
                        <span style={{ color: 'white', marginLeft: '16px', marginRight: '16px' }}>|</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6">{newsletter.title || 'Newsletter'}</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {newsletter.description || 'Insights on M&A, digital strategy, and exit planning'}
            </p>
            <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 py-2 transition-colors w-full">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-2xl mb-2">
                {tagline.line1 || 'Centaura. Elevate Your Business.'}
              </h3>
              <h3 className="text-2xl">
                {tagline.line2 || 'Protect Your Legacy.'}
              </h3>
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed">
                {tagline.description || 'We stand with mid-market owners and investors to maximize value, accelerate growth, and secure lasting success through M&A excellence, digital transformation, and exit strategy mastery.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#05282a] py-6">
        <div className="max-w-7xl mx-auto px-[60px]">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <p>{data.copyright || '© 2025 Centaura Group. All Rights Reserved.'}</p>
            <div className="flex gap-4">
              {legalLinks.map((link: any, index: number) => (
                <span key={index}>
                  <a href={link.url || '#'} className="hover:text-[#19b2bc] transition-colors">
                    {link.text}
                  </a>
                  {index < legalLinks.length - 1 && <span>|</span>}
                </span>
              ))}
            </div>
            <p>Designed by <span className="text-white">{data.designer || 'KATALYST CRM'}</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
