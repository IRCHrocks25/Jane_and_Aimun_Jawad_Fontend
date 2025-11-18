import { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { BrutalMathSection } from '../components/BrutalMathSection';
import { ImageGallery } from '../components/ImageGallery';
import { WhyCentauraSection } from '../components/WhyCentauraSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { PeopleBehindStrategy } from '../components/PeopleBehindStrategy';
import { WhyWeBuiltSection } from '../components/WhyWeBuiltSection';
import { ProcessSection } from '../components/ProcessSection';
import { FinalWordSection } from '../components/FinalWordSection';
import { Footer } from '../components/Footer';
import { homepageAPI, type HomepageData } from '../services/homepageApi';

export default function HomePage() {
  const [data, setData] = useState<HomepageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Fetching homepage data from API...');
        const homepageData = await homepageAPI.getHomepageData();
        console.log('Received data:', homepageData);
        setData(homepageData);
      } catch (err) {
        console.error('Failed to fetch homepage data:', err);
        setError('Failed to load content from server. Showing page with default/empty content.');
        setData({
          hero: {},
          stats: [],
          brutal_math: {},
          why_centaura: {},
          services: [],
          comparison_table: {},
          case_studies: [],
          people_behind_strategy: {},
          why_we_built: {},
          process: {},
          final_word: {},
          footer: {},
          image_gallery: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const safeData = data || {
    hero: {},
    stats: [],
    brutal_math: {},
    why_centaura: {},
    services: [],
    comparison_table: {},
    case_studies: [],
    people_behind_strategy: {},
    why_we_built: {},
    process: {},
    final_word: {},
    footer: {},
    image_gallery: [],
  };

  return (
    <div className="min-h-screen bg-white">
      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-gray-600 text-xl">Loading content...</div>
        </div>
      )}
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4">
          <p className="text-yellow-700 text-sm">{error}</p>
        </div>
      )}
      <HeroSection data={safeData.hero} />
      <StatsSection data={safeData.stats} />
      <BrutalMathSection data={safeData.brutal_math} />
      <ImageGallery data={safeData.image_gallery} />
      <WhyCentauraSection data={safeData.why_centaura} />
      <ServicesGrid data={safeData.services} />
      <ComparisonTable data={safeData.comparison_table} />
      <CaseStudiesSection data={safeData.case_studies} />
      <PeopleBehindStrategy data={safeData.people_behind_strategy} />
      <WhyWeBuiltSection data={safeData.why_we_built} />
      <ProcessSection data={safeData.process} />
      <FinalWordSection data={safeData.final_word} />
      <Footer data={safeData.footer} />
    </div>
  );
}

