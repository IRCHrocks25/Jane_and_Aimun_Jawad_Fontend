import axios from 'axios';

// Use production backend URL in production, otherwise use localhost or env variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD 
    ? 'https://janeandaimunjawadbackend-production.up.railway.app/api'
    : 'http://localhost:8000/api');

export interface HomepageData {
  hero: {
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
  stats: Array<{
    label: string;
    value: string;
  }>;
  brutal_math: {
    title: string;
    subtitle: string;
    statistics: Array<{
      value: string;
      description: string;
    }>;
    closing_text: string;
  };
  why_centaura: {
    label: string;
    title: string;
    image_url: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    cta_text: string;
    cta_url: string;
  };
  services: Array<{
    label: string;
    title: string;
    description: string;
    outcome: string;
  }>;
  comparison_table: {
    title: string;
    subtitle: string;
    features: Array<{
      name: string;
      typical: boolean;
      centaura: boolean;
    }>;
    cta_text: string;
    cta_url: string;
  };
  case_studies: Array<{
    category: string;
    title: string;
    description: string;
    image_url: string;
  }>;
  people_behind_strategy: {
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
  why_we_built: {
    left: {
      title: string;
      content: string[];
    };
    right: {
      title: string;
      content: string[];
    };
  };
  process: {
    label: string;
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    cta_text: string;
    cta_url: string;
  };
  final_word: {
    label: string;
    title: string;
    content: string[];
    background_image?: string;
    cta_text: string;
    cta_url: string;
  };
  footer: any;
  image_gallery: Array<{
    url: string;
    alt: string;
  }>;
}

export const homepageAPI = {
  async getHomepageData(): Promise<HomepageData> {
    console.log('API_BASE_URL:', API_BASE_URL);
    const url = `${API_BASE_URL}/homepage/`;
    console.log('Fetching from:', url);
    const response = await axios.get<HomepageData>(url);
    console.log('API Response status:', response.status);
    console.log('API Response data keys:', Object.keys(response.data));
    return response.data;
  },
};

