import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Acme Dashboard',
    template: '%s | Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://dashboard-app-gamma-two.vercel.app/'),
  openGraph: {
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    images: '/opengraph-image.png',
  },
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
