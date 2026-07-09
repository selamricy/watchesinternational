import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  // حالة التحكم في التصفح حسب الأقسام (All, watches, leather, perfumes)
  const [activeCategory, setActiveCategory] = useState<'all' | 'watches' | 'leather' | 'perfumes'>('all');

  // تصفية المنتجات بناءً على القسم المختار
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased text-right" dir="rtl">
      <Head>
        <title>Watches International | حيتان الساعات العالمية في مصر</title>
        <meta name="description" content="متجر أبو يوسف للساعات الفاخرة - ميرور أوريجينال، هاي كوبي، وأوريجينال، بالإضافة إلى أرقى أنواع الجلود الطبيعية والعطور العالمية ثبات وفوحان." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* القائمة العلوية الفخمة */}
      <Navbar />

      {/* قسم الهيرو (البانر الرئيسي للموقع) */}
      <Hero />

      {/* القسم الرئيسي للمتجر */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* العناوين الرئيسية الموجهة لرفع رغبة الشراء */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
            المجموعات الفاخرة الحالية
          </h2>
          < p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            ساعتك مش مجرد وقت.. ساعتك هويتك. تصفح أحدث الموديلات المتاحة فوراً وقم بالطلب بالقطعة أو بالطلب الخاص.
          </p>
        </div>

        {/* أزرار الفلترة الذكية السريعة لترتيب الموقع حسب رغبة الزبون */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#111] text-gray-400 border border-[#222] hover:border-[#D4AF37]/50'
            }`}
          >
            جميع المنتجات
          </button>
          <button
            onClick={() => setActiveCategory('watches')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === 'watches'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#111] text-gray-400 border border-[#222] hover:border-[#D4AF37]/50'
            }`}
          >
            الساعات (هاي كوبي وميرور)
          </button>
          <button
            onClick={() => setActiveCategory('leather')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === 'leather'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#111] text-gray-400 border border-[#222] hover:border-[#D4AF37]/50'
            }`}
          >
            الجلود والإكسسوارات
          </button>
          <button
            onClick={() => setActiveCategory('perfumes')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === 'perfumes'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#111] text-gray-400 border border-[#222] hover:border-[#D4AF37]/50'
            }`}
          >
            العطور والميرور
          </button>
        </div>

        {/* شبكة عرض المنتجات المستجيبة (Responsive Grid) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-[#222] rounded-2xl">
            <p className="text-gray-500 text-lg">جاري تجهيز وتحديث موديلات هذا القسم حالياً...</p>
          </div>
        )}

      </main>

      {/* تذييل الصفحة (Footer) لحفظ الحقوق وربط السوشيال ميديا الخاصة بك */}
      <footer className="bg-[#0a0a0a] border-t border-[#222] py-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} Watches International - Abo Youssef. جميع الحقوق محفوظة.</p>
          <p className="text-[#D4AF37] font-medium">حيتان الساعات العالمية في مصر منذ 2019</p>
        </div>
      </footer>
    </div>
  );
}