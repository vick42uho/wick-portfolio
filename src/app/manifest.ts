import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wick Thaweep Poraha | Senior Software Engineer',
    short_name: 'Wick Portfolio',
    description: 'Senior Full-Stack Software Engineer Portfolio & Technical Blog',
    start_url: '/',
    display: 'standalone',
    background_color: '#050d1a',
    theme_color: '#050d1a',
    icons: [
      {
        src: '/icon',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
