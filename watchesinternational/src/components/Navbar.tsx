import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a0a0a] border-b border-[#222] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* الشعار والبراند (Logo) */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Link href="/" className="text-xl sm:text-2xl font-black tracking-wider text-[#D4AF37] hover:opacity-90 transition-opacity">
              WATCHES INTERNATIONAL
            </Link>
            <span className="text-[10px] text-gray-400 tracking-widest text-left uppercase">Abo Youssef</span>
          </div>

          {/* القائمة الرئيسية للكمبيوتر (Desktop Menu) */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/category/watches" className="text-gray-300 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors">
              الساعات الفاخرة
            </Link>
            <Link href="/category/leather" className="text-gray-300 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors">
              الجلود والإكسسوارات
            </Link>
            <Link href="/category/perfumes" className="text-gray-300 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors">
              العطور والميرور
            </Link>
          </div>

          {/* زر الشراء السريع عبر الواتساب لإعلانات الميديا باير المستهدفة */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/201142300919" // رقمك المسجل بالجروب
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black hover:bg-yellow-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#D4AF37]/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>طلب سريع بالواتساب</span>
            </a>
          </div>

          {/* زر القائمة للموبايل (Mobile Menu Button) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#D4AF37] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* قائمة الموبايل المنسدلة (Mobile Dropdown Menu) */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-b border-[#222] animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-right">
            <Link href="/category/watches" className="block text-gray-300 hover:text-[#D4AF37] px-3 py-3 text-base font-medium border-b border-[#222]">
              الساعات الفاخرة
            </Link>
            <Link href="/category/leather" className="block text-gray-300 hover:text-[#D4AF37] px-3 py-3 text-base font-medium border-b border-[#222]">
              الجلود والإكسسوارات
            </Link>
            <Link href="/category/perfumes" className="block text-gray-300 hover:text-[#D4AF37] px-3 py-3 text-base font-medium">
              العطور والميرور
            </Link>
            <div className="pt-4 px-3">
              <a 
                href="https://wa.me/201142300919"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D4AF37] text-black text-center block py-3 rounded-xl font-bold"
              >
                طلب سريع عبر الواتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}