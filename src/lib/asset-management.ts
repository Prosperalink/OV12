// Asset Management System for Orson Vision
// Handles image, video, and document assets with optimization and attribution

export interface IAsset {
  id: string;
  type: 'image' | 'video' | 'document';
  url: string;
  alt?: string;
  title?: string;
  description?: string;
  attribution?: {
    author: string;
    source: string;
    license: string;
    licenseUrl: string;
  };
  metadata?: {
    width?: number;
    height?: number;
    size?: number;
    format?: string;
  };
  tags: string[];
  category: string;
  optimized?: boolean;
}

export interface IAssetCollection {
  id: string;
  name: string;
  description: string;
  assets: IAsset[];
  category: string;
}

// Free asset sources with proper attribution
export const ASSET_SOURCES = {
  unsplash: {
    name: 'Unsplash',
    url: 'https://unsplash.com',
    license: 'Unsplash License',
    licenseUrl: 'https://unsplash.com/license',
    attribution: 'Photo by {author} on Unsplash',
  },
  pexels: {
    name: 'Pexels',
    url: 'https://pexels.com',
    license: 'Pexels License',
    licenseUrl: 'https://pexels.com/license',
    attribution: 'Photo by {author} from Pexels',
  },
  pixabay: {
    name: 'Pixabay',
    url: 'https://pixabay.com',
    license: 'Pixabay License',
    licenseUrl: 'https://pixabay.com/service/license',
    attribution: 'Image by {author} from Pixabay',
  },
  coverr: {
    name: 'Coverr',
    url: 'https://coverr.co',
    license: 'Coverr License',
    licenseUrl: 'https://coverr.co/license',
    attribution: 'Video by {author} from Coverr',
  },
};

// Asset categories for Orson Vision
export const ASSET_CATEGORIES = {
  hero: {
    name: 'Hero Section',
    description: 'Cinematic hero backgrounds and videos',
    tags: ['cinematic', 'hero', 'background', 'video'],
  },
  services: {
    name: 'Services',
    description: 'Service showcase and portfolio images',
    tags: ['services', 'portfolio', 'showcase', 'work'],
  },
  about: {
    name: 'About Section',
    description: 'Team, office, and company culture images',
    tags: ['about', 'team', 'office', 'culture'],
  },
  testimonials: {
    name: 'Testimonials',
    description: 'Client testimonials and success stories',
    tags: ['testimonials', 'clients', 'success', 'reviews'],
  },
  contact: {
    name: 'Contact Section',
    description: 'Contact form and communication imagery',
    tags: ['contact', 'communication', 'support'],
  },
  blog: {
    name: 'Blog & Articles',
    description: 'Blog post images and article illustrations',
    tags: ['blog', 'articles', 'content', 'illustrations'],
  },
};

// Optimized asset URLs with proper attribution
export const OPTIMIZED_ASSETS: IAsset[] = [
  // Hero Section Assets
  {
    id: 'hero-cinematic-office-01',
    type: 'image',
    url: '/assets/images/hero/cinematic-office-01.jpg',
    alt: 'Modern office space with cinematic lighting',
    title: 'Cinematic Office Environment',
    description:
      'Professional office space with dramatic lighting for hero section',
    attribution: {
      author: 'John Doe',
      source: 'Unsplash',
      license: 'Unsplash License',
      licenseUrl: 'https://unsplash.com/license',
    },
    metadata: {
      width: 1920,
      height: 1080,
      format: 'jpg',
    },
    tags: ['cinematic', 'hero', 'office', 'professional'],
    category: 'hero',
    optimized: true,
  },
  {
    id: 'hero-video-background-01',
    type: 'video',
    url: '/assets/videos/hero/cinematic-background-01.mp4',
    alt: 'Cinematic background video with abstract motion',
    title: 'Cinematic Background Video',
    description: 'Abstract motion video for hero section background',
    attribution: {
      author: 'Creative Studio',
      source: 'Coverr',
      license: 'Coverr License',
      licenseUrl: 'https://coverr.co/license',
    },
    metadata: {
      width: 1920,
      height: 1080,
      format: 'mp4',
    },
    tags: ['cinematic', 'hero', 'video', 'background', 'motion'],
    category: 'hero',
    optimized: true,
  },

  // Services Assets
  {
    id: 'services-digital-innovation-01',
    type: 'image',
    url: '/assets/images/services/digital-innovation-01.jpg',
    alt: 'Digital innovation and technology concept',
    title: 'Digital Innovation',
    description: 'Technology and innovation imagery for digital services',
    attribution: {
      author: 'Tech Studio',
      source: 'Pexels',
      license: 'Pexels License',
      licenseUrl: 'https://pexels.com/license',
    },
    metadata: {
      width: 800,
      height: 600,
      format: 'jpg',
    },
    tags: ['services', 'digital', 'innovation', 'technology'],
    category: 'services',
    optimized: true,
  },
  {
    id: 'services-creative-design-01',
    type: 'image',
    url: '/assets/images/services/creative-design-01.jpg',
    alt: 'Creative design and artistic process',
    title: 'Creative Design',
    description: 'Artistic and creative design process imagery',
    attribution: {
      author: 'Design Studio',
      source: 'Unsplash',
      license: 'Unsplash License',
      licenseUrl: 'https://unsplash.com/license',
    },
    metadata: {
      width: 800,
      height: 600,
      format: 'jpg',
    },
    tags: ['services', 'creative', 'design', 'artistic'],
    category: 'services',
    optimized: true,
  },

  // About Section Assets
  {
    id: 'about-team-collaboration-01',
    type: 'image',
    url: '/assets/images/about/team-collaboration-01.jpg',
    alt: 'Team collaboration and creative meeting',
    title: 'Team Collaboration',
    description: 'Team working together in creative environment',
    attribution: {
      author: 'Team Studio',
      source: 'Pixabay',
      license: 'Pixabay License',
      licenseUrl: 'https://pixabay.com/service/license',
    },
    metadata: {
      width: 800,
      height: 600,
      format: 'jpg',
    },
    tags: ['about', 'team', 'collaboration', 'meeting'],
    category: 'about',
    optimized: true,
  },

  // Testimonials Assets
  {
    id: 'testimonials-client-success-01',
    type: 'image',
    url: '/assets/images/testimonials/client-success-01.jpg',
    alt: 'Successful client project showcase',
    title: 'Client Success Story',
    description: 'Successful project outcome and client satisfaction',
    attribution: {
      author: 'Success Studio',
      source: 'Unsplash',
      license: 'Unsplash License',
      licenseUrl: 'https://unsplash.com/license',
    },
    metadata: {
      width: 600,
      height: 400,
      format: 'jpg',
    },
    tags: ['testimonials', 'success', 'client', 'project'],
    category: 'testimonials',
    optimized: true,
  },
];

// Asset utility functions
export class AssetManager {
  private static instance: AssetManager;
  private assets: Map<string, IAsset> = new Map();

  private constructor() {
    // Initialize with optimized assets
    OPTIMIZED_ASSETS.forEach(asset => {
      this.assets.set(asset.id, asset);
    });
  }

  static getInstance(): AssetManager {
    if (!AssetManager.instance) {
      AssetManager.instance = new AssetManager();
    }
    return AssetManager.instance;
  }

  // Get asset by ID
  getAsset(id: string): IAsset | undefined {
    return this.assets.get(id);
  }

  // Get assets by category
  getAssetsByCategory(category: string): IAsset[] {
    return Array.from(this.assets.values()).filter(
      asset => asset.category === category
    );
  }

  // Get assets by tags
  getAssetsByTags(tags: string[]): IAsset[] {
    return Array.from(this.assets.values()).filter(asset =>
      tags.some(tag => asset.tags.includes(tag))
    );
  }

  // Get random asset from category
  getRandomAsset(category: string): IAsset | undefined {
    const categoryAssets = this.getAssetsByCategory(category);
    if (categoryAssets.length === 0) return undefined;

    const randomIndex = Math.floor(Math.random() * categoryAssets.length);
    return categoryAssets[randomIndex];
  }

  // Add new asset
  addAsset(asset: IAsset): void {
    this.assets.set(asset.id, asset);
  }

  // Remove asset
  removeAsset(id: string): boolean {
    return this.assets.delete(id);
  }

  // Get attribution text
  getAttributionText(asset: IAsset): string {
    if (!asset.attribution) return '';

    const source =
      ASSET_SOURCES[asset.attribution.source as keyof typeof ASSET_SOURCES];
    if (!source) return '';

    return source.attribution.replace('{author}', asset.attribution.author);
  }

  // Optimize image URL for different sizes
  getOptimizedImageUrl(asset: IAsset): string {
    if (asset.type !== 'image') return asset.url;

    // For now, return the original URL
    // In production, this would integrate with an image optimization service
    return asset.url;
  }

  // Get video poster image
  getVideoPoster(asset: IAsset): string | undefined {
    if (asset.type !== 'video') return undefined;

    // Generate poster image path based on video ID
    const posterId = asset.id.replace('-video-', '-poster-');
    const posterAsset = this.getAsset(posterId);

    return posterAsset?.url;
  }
}

// Export singleton instance
export const assetManager = AssetManager.getInstance();

// React hook for asset management
export function useAsset(id: string): IAsset | undefined {
  return assetManager.getAsset(id);
}

// React hook for category assets
export function useAssetsByCategory(category: string): IAsset[] {
  return assetManager.getAssetsByCategory(category);
}
