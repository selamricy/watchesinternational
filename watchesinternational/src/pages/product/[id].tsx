import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  // الإصلاح السحري: البحث عن الـ id كنص (String) مباشرة بدون تحويله لرقم
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen text-right flex flex-col" dir="rtl">
        <Navbar />
        <div className="text-center py-20 flex-grow">
          <h2 className="text-xl font-bold text-gray-500">جاري تحميل تفاصيل الموديل...</h2>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `أهلاً يا أبو يوسف، محتاج أطلب: ${product.brand} - ${product.name}\nالجودة: ${
      product.quality === 'mirror' ? 'ميرور أوريجينال' : product.quality === 'high-copy' ? 'هاي كوبي' : 'أوريجينال'
    }\nالسعر: ${product.price} ج.م`
  );

  return (
    <div className="bg-black text-white min-h-screen text-right" dir="rtl">
      <Head>
        <title>{product.name} | Watches International</title>
      </Head>
      
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* صورة المنتج الفاخرة */}
          <div className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* تفاصيل الموديل والأكشن */}
          <div className="flex flex-col h-full justify-between py-4">
            <div>
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">{product.brand}</span>
              <h1 className="text-2xl sm:text-4xl font-black mt-2 mb-4 text-white">{product.name}</h1>
              
              {product.quality && (
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                  {product.quality === 'mirror' ? 'Mirror Original (ماكينة سويسري)' : 'High Copy (درجة أولى)'}
                </span>
              )}

              <p className="text-gray-400 leading-relaxed mb-8 text-base sm:text-lg">{product.description}</p>
            </div>

            <div>
              <div className="text-3xl font-black text-white mb-6 border-t border-[#1a1a1a] pt-6">
                {product.price.toLocaleString('ar-EG')} ج.م
              </div>

              <a
                href={`https://wa.me/201142300919?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-[#D4AF37] text-black font-black py-4 rounded-xl hover:bg-yellow-600 transition-all text-lg shadow-xl shadow-[#D4AF37]/10 transform active:scale-95"
              >
                تأكيد الطلب وحجز القطعة عبر واتساب
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}