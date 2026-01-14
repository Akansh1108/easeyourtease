'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              🎭 Ease Your Tease
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/corporates" className="hover:text-blue-600">For Corporates</Link>
              <Link href="/schools" className="hover:text-blue-600">For Schools</Link>
              <Link href="/edtech" className="hover:text-blue-600">For Edtech</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
            </nav>
            <a href="https://calendly.com/easeyourtease/30min" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">AI, NEP & EdTech Transformation Studio</h1>
          <h2 className="text-3xl text-blue-600 font-semibold mb-4">by Akansh Tyagi</h2>
          <p className="text-xl text-gray-600 mb-8">One strategist, three tracks: Corporates · Schools · Edtech</p>
          <div className="flex gap-4 justify-center">
            <a href="https://calendly.com/easeyourtease/30min" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Book a Consultation →
            </a>
            <a href="/about" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">AI Transformation Across Every Sector</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">For Corporates</h3>
              <p className="text-gray-600 mb-6">Transform your organization with AI-powered workflows, automation, and strategic implementation.</p>
              <a href="/corporates" className="text-blue-600 hover:text-blue-700 font-semibold">Explore Solutions →</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">For Schools</h3>
              <p className="text-gray-600 mb-6">NEP 2020-aligned AI education programs that nurture innovation at the school level.</p>
              <a href="/schools" className="text-blue-600 hover:text-blue-700 font-semibold">View Programs →</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">For Edtech</h3>
              <p className="text-gray-600 mb-6">Cohort-based programs for AI-native product and project management professionals.</p>
              <a href="/edtech" className="text-blue-600 hover:text-blue-700 font-semibold">Join Cohorts →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Ease Your Tease</h3>
              <p className="text-gray-400">AI/AGI Strategy & Transformation for the 2030-ready world</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/corporates" className="text-gray-400 hover:text-white">For Corporates</Link></li>
                <li><Link href="/schools" className="text-gray-400 hover:text-white">For Schools</Link></li>
                <li><Link href="/edtech" className="text-gray-400 hover:text-white">For Edtech</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">easeyourtease@gmail.com</p>
              <p className="text-gray-400 mb-4">+91 9632528538</p>
              <a href="https://calendly.com/easeyourtease/30min" className="text-blue-400 hover:text-blue-300">Schedule a Call</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 Ease Your Tease. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
