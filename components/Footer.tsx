export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">TechHub</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for premium tech products. Quality, reliability, and innovation at your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/items" className="hover:text-blue-400 transition">Products</a></li>
              <li><a href="/login" className="hover:text-blue-400 transition">Login</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Returns</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">📧 <a href="mailto:support@techhub.com" className="hover:text-blue-400 transition">support@techhub.com</a></li>
              <li className="flex gap-2">📞 <a href="tel:+1234567890" className="hover:text-blue-400 transition">+1 (234) 567-890</a></li>
              <li className="flex gap-2">📍 123 Tech Street, Silicon Valley</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">f</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">𝕏</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">in</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">📷</a>
          </div>

          {/* Bottom Info */}
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2026 TechHub. All rights reserved.</p>
            <div className="mt-3 flex justify-center gap-4 text-xs">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}
