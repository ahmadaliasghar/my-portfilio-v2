import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'; // Import the router
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ahmad Ali Ashghar",
  // metadataBase: new URL(""),
  description: "Ahmad Ali Asghar. MERN Stack Developer",
  openGraph: {
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1689893059/docs/og.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter(); // Get the router instance
  const isStudioPath = router.pathname === '/studio';

  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        {/* Conditionally render Navbar and Footer */}
        {!isStudioPath && <Navbar />}
        {children}
        {!isStudioPath && <Footer />}
      </body>
    </html>
  )
}
