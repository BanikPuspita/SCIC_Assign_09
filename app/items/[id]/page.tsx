"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  stock?: number;
}

export default function ItemDetailsPage() {
  const params = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
        const response = await fetch(`${apiBase}/api/items/${params.id}`);
        if (!response.ok) throw new Error("Item not found");
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError("Failed to load item details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchItem();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-100 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg text-red-600 mb-4 font-semibold">{error || "Product not found"}</p>
          <Link href="/items" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 justify-center">
            <span>←</span> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const inStock = item.stock && item.stock > 0;
  const discount = Math.round((item.price * 0.1) / 10) * 10; // Calculate 10% discount

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href="/items" className="text-blue-600 hover:text-blue-800">Products</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{item.name}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-50 rounded-xl p-8">
              <div className="relative w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {inStock && (
                  <div className="absolute top-4 right-4 bg-linear-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    In Stock
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="mb-6">
                  {item.category && (
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                      {item.category}
                    </p>
                  )}
                  <h1 className="text-4xl font-bold text-slate-900 mb-3">{item.name}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                    </div>
                    <span className="text-gray-600">(128 reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price Section */}
                <div className="mb-8 pb-8 border-b-2 border-gray-200">
                  <div className="flex items-baseline gap-4 mb-3">
                    <p className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      ${item.price}
                    </p>
                    <p className="text-xl text-gray-500 line-through">
                      ${item.price + discount}
                    </p>
                    <p className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">
                      Save ${discount}
                    </p>
                  </div>
                  <p className="text-green-600 font-semibold">Free shipping on orders over $50</p>
                </div>

                {/* Stock & Specs */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">Availability</p>
                    <p className="text-lg font-bold text-slate-900">
                      {item.stock && item.stock > 0 ? `${item.stock} units` : "Out of Stock"}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">Product ID</p>
                    <p className="text-lg font-bold text-slate-900">TECH-{item.id}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <label className="text-gray-700 font-semibold">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-200 transition"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center border-none focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-200 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    disabled={!inStock}
                    className={`flex-1 font-bold py-4 px-4 rounded-lg transition transform hover:scale-105 text-lg ${
                      inStock
                        ? "bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {inStock ? `Add to Cart (${quantity})` : "Out of Stock"}
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-4 rounded-lg transition">
                    ❤ Wishlist
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="bg-linear-to-r from-blue-50 to-blue-100 p-4 rounded-lg text-sm text-gray-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> 30-day money-back guarantee
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> 1-year manufacturer warranty
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> Secure SSL encryption
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🚚", title: "Fast Shipping", desc: "Arrive in 2-5 business days" },
            { icon: "🔄", title: "Easy Returns", desc: "30-day hassle-free returns" },
            { icon: "💬", title: "Support", desc: "24/7 customer assistance" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Category</span>
              <span className="text-gray-600">{item.category || "General"}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Product ID</span>
              <span className="text-gray-600">TECH-{item.id}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Price</span>
              <span className="text-gray-600">${item.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Stock Status</span>
              <span className={`font-semibold ${inStock ? "text-green-600" : "text-red-600"}`}>
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link href="/items" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg hover:gap-3 transition">
            <span>←</span> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
