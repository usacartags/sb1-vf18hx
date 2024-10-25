import { Users, Award, TrendingUp } from 'lucide-react';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  heroImage: string;
  stats: Array<{
    icon: 'users' | 'trending' | 'award';
    value: string;
    label: string;
  }>;
  sections: Array<{
    title: string;
    content: string;
    image: string;
    bullets?: string[];
  }>;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-revolution',
    title: 'E-commerce Revolution',
    description: 'How we transformed a traditional retailer into a digital powerhouse, achieving 300% growth in online sales.',
    category: 'Digital Marketing',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    stats: [
      {
        icon: 'trending',
        value: '300%',
        label: 'Increase in Sales'
      },
      {
        icon: 'users',
        value: '2M+',
        label: 'New Customers'
      },
      {
        icon: 'award',
        value: '50%',
        label: 'Cost Reduction'
      }
    ],
    sections: [
      {
        title: 'The Challenge',
        content: 'Our client, a traditional brick-and-mortar retailer, needed to transform their business for the digital age. They faced declining foot traffic and increasing competition from online retailers.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        bullets: [
          'Outdated technology infrastructure',
          'Limited online presence',
          'No digital marketing strategy',
          'High operational costs'
        ]
      },
      {
        title: 'Our Approach',
        content: 'We implemented a comprehensive digital transformation strategy, focusing on creating a seamless omnichannel experience while optimizing operations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        bullets: [
          'Custom e-commerce platform development',
          'Data-driven marketing campaigns',
          'Supply chain optimization',
          'Staff training and development'
        ]
      },
      {
        title: 'The Results',
        content: 'The transformation led to remarkable results, with significant improvements across all key metrics and a strong foundation for future growth.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        bullets: [
          '300% increase in online sales',
          '2M+ new customers acquired',
          '50% reduction in operational costs',
          '95% customer satisfaction rate'
        ]
      }
    ]
  },
  {
    slug: 'brand-transformation',
    title: 'Global Brand Identity',
    description: 'A comprehensive brand refresh that positioned our client for international success and Series B funding.',
    category: 'Branding',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    stats: [
      {
        icon: 'trending',
        value: '85%',
        label: 'Brand Recognition'
      },
      {
        icon: 'award',
        value: '$40M',
        label: 'Series B Funding'
      },
      {
        icon: 'users',
        value: '12',
        label: 'New Markets'
      }
    ],
    sections: [
      {
        title: 'The Challenge',
        content: 'A promising tech startup needed to evolve their brand identity to appeal to international markets and attract significant investment.',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        bullets: [
          'Inconsistent brand messaging',
          'Limited international appeal',
          'Complex product offering',
          'Strong competition'
        ]
      },
      {
        title: 'Our Strategy',
        content: 'We developed a comprehensive brand strategy that would resonate globally while maintaining the company\'s core values and innovation spirit.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        bullets: [
          'Global market research',
          'Brand identity redesign',
          'Message refinement',
          'Cultural adaptation'
        ]
      },
      {
        title: 'The Impact',
        content: 'The brand transformation led to immediate recognition and opened doors to new opportunities and markets.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        bullets: [
          'Successful $40M Series B funding',
          'Expansion to 12 new markets',
          '85% brand recognition in target markets',
          '3x increase in qualified leads'
        ]
      }
    ]
  }
];