import './globals.css'

export const metadata = {
  title: 'Ease Your Tease - AI Transformation Studio',
  description: 'AI, NEP & EdTech transformation studio by Akansh Tyagi. Professional portfolio showcasing AI solutions for corporates, schools, and edtech platforms.',
  keywords: 'AI, NEP 2020, EdTech, Transformation, Akansh Tyagi',
  authors: [{ name: 'Akansh Tyagi' }],
  metadataBase: new URL('https://easeyourtease.in'),
  openGraph: {
    title: 'Ease Your Tease - AI Transformation Studio',
    description: 'AI, NEP & EdTech transformation by Akansh Tyagi',
    url: 'https://easeyourtease.in',
    siteName: 'Ease Your Tease',
    images: [
      {
        url: 'https://easeyourtease.in/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
