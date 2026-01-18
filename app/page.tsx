import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Welcome to TechHub
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover premium technology products at unbeatable prices. Your ultimate destination for innovation and quality.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/items" className="px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Products
            </Link>
            <Link href="/login" className="px-8 py-4 border-2 border-blue-400 text-blue-300 hover:bg-blue-950 font-bold rounded-lg transition transform hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-slate-900">About TechHub</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Since 2020, TechHub has been revolutionizing the way people shop for technology. We partner with the world&apos;s leading brands to bring you the latest gadgets and devices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is simple: make cutting-edge technology accessible to everyone. We combine competitive pricing with exceptional customer service.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
                <p className="text-gray-600 mb-6">Happy Customers</p>
              </div>
              <div className="border-t pt-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">Premium Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">Why Choose TechHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Fast Delivery", desc: "Lightning-quick shipping with tracking to your doorstep" },
              { icon: "🔒", title: "Secure Payment", desc: "SSL encrypted transactions & multiple payment options" },
              { icon: "💰", title: "Best Prices", desc: "Price match guarantee with exclusive deals" },
              { icon: "♻️", title: "Easy Returns", desc: "30-day hassle-free return policy" },
              { icon: "💬", title: "24/7 Support", desc: "Expert customer service whenever you need us" },
              { icon: "⭐", title: "Quality Assured", desc: "100% authentic products with warranty" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Featured Collections</h2>
            <p className="text-gray-600 text-lg">Browse our most popular tech products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "💻", name: "Laptops", count: "15+ Models" },
              { icon: "🎮", name: "Gaming", count: "25+ Products" },
              { icon: "📱", name: "Mobile", count: "30+ Devices" }
            ].map((cat, idx) => (
              <div key={idx} className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition">
                <div className="text-6xl mb-4">{cat.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.count}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/items" className="inline-block px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Browse", desc: "Explore our curated collection of tech products" },
              { num: "2", title: "Compare", desc: "Check specs, prices, and customer reviews" },
              { num: "3", title: "Order", desc: "Add to cart and checkout securely" },
              { num: "4", title: "Enjoy", desc: "Receive your product with fast delivery" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute w-full h-0.5 bg-blue-600 top-8 -right-20"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Content Creator", text: "Excellent products and super fast shipping! TechHub is my go-to place for tech gear." },
              { name: "Mike Chen", role: "Software Developer", text: "Best prices I've found, plus their customer service is outstanding. Highly recommended!" },
              { name: "Emma Davis", role: "Designer", text: "Quality products and reliable delivery. I've already recommended TechHub to all my friends." }
            ].map((review, idx) => (
              <div key={idx} className="bg-linear-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-blue-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{review.text}&quot;</p>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50K+", label: "Happy Customers" },
            { num: "100+", label: "Products" },
            { num: "15+", label: "Categories" },
            { num: "99.8%", label: "Satisfaction" }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-5xl font-bold mb-2">{stat.num}</div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Tech?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of satisfied customers shopping for premium tech products
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/items" className="px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
              Start Shopping
            </Link>
            <Link href="/login" className="px-8 py-4 border-2 border-blue-400 text-blue-300 hover:bg-blue-950 font-bold rounded-lg transition transform hover:scale-105">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
