import React from 'react';
import { Product } from '../data/products';

// استقبال بيانات منتج واحد كـ Prop لعرضه بشكل ديناميكي
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // حساب نسبة الخصم تلقائياً إذا وجد سعر قديم
  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  // إعداد نص رسالة الواتساب التلقائية ليأتيك العميل من الإعلان بالموديل المطلوب بدقة
  const whatsappMessage = encodeURIComponent(
    `أهلاً يا أبو يوسف، محتاج أستفسر عن/أطلب: ${product.brand} - ${product.name}\nالجودة: ${
      product.quality === 'mirror' ? 'ميرور أوريجينال' : product.quality === 'high-copy' ? 'هاي كوبي' : 'أوريجينال'
    }\nالسعر: ${product.price} ج.م`
  );

  const whatsappLink = `https://wa.me/201142300919?text=${whatsappMessage}`;

  return (
    <div className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
      
      {/* منطقة الصورة والشارات (Badges) */}
      <div className="relative overflow-hidden aspect-square bg-[#0a0a0a] flex items-center justify-center">
        
        {/* شارة الجودة المخصصة لزباين الـ Premium */}
        {product.quality && (
          <span className={`absolute top-3 right-3 z-10 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${
            product.quality === 'mirror' 
              ? 'bg-[#D4AF37] text-black' // ميرور أوريجينال تأخذ اللون الذهبي الفاخر
              : product.quality === 'high-copy'
              ? 'bg-blue-600 text-white' // هاي كوبي تأخذ أزرق احترافي
              : 'bg-emerald-600 text-white' // الأوريجينال تأخذ الأخضر
          }`}>
            {product.quality === 'mirror' ? 'Mirror' : product.quality === 'high-copy' ? 'High Copy' : 'Original'}
          </span>
        )}

        {/* شارة الخصم الجذابة للإعلانات المموّلة */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[11px] font-black px-2.5 py-1 rounded-md animate-pulse">
            خصم {discount}%
          </span>
        )}

        {/* صورة المنتج مع أنيميشين زووم خفيف عند تمرير الماوس */}
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* في حالة نفاذ المخزون */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-lg border border-red-500 text-sm">
              نفذت الكمية (متاح بالطلب)
            </span>
          </div>
        )}
      </div>

      {/* تفاصيل المنتج (Details) */}
      <div className="p-4 sm:p-5 text-right flex-grow flex flex-col justify-between">
        <div>
          {/* اسم البراند والماركة */}
          <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block mb-1">
            {product.brand}
          </span>
          
          {/* اسم الموديل */}
          <h3 className="text-white text-base font-bold line-clamp-2 group-hover:text-[#D4AF37] transition-colors mb-2">
            {product.name}
          </h3>
        </div>

        {/* الأسعار وأزرار الشراء */}
        <div className="mt-4">
          <div className="flex items-baseline justify-start gap-3 flex-row-reverse mb-4">
            {/* السعر الحالي */}
            <span className="text-xl font-black text-white">
              {product.price.toLocaleString('ar-EG')} ج.م
            </span>
            {/* السعر القديم إن وجد */}
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.oldPrice.toLocaleString('ar-EG')} ج.م
              </span>
            )}
          </div>

          {/* زر الأكشن: اطلب عبر واتساب فوراً */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black block text-center py-3 rounded-xl text-sm font-bold transition-all duration-300 transform active:scale-95"
          >
            اطلب الآن عبر واتساب
          </a>
        </div>
      </div>

    </div>
  );
}