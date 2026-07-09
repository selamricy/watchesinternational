import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-[#050505] overflow-hidden border-b border-[#1a1a1a] py-20 sm:py-28 text-center px-4">
      
      {/* خلفية جمالية متدرجة ومضيئة خفيفة تعطي شعور الفخامة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        
        {/* شارة ذهبية صغيرة فوق العنوان لتوثيق تاريخ البراند */}
        <span className="inline-block border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          ساعتك تعكس هويتك • حيتان الساعات منذ 2019
        </span>

        {/* العنوان الرئيسي الضخم والفاخر الموجه لزوار الإعلانات */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          مرحباً بك في <span className="text-[#D4AF37] block sm:inline">WATCHES INTERNATIONAL</span>
        </h1>

        {/* النص البيعي الإقناعي */}
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          المصدر الأول في مصر لأقوى موديلات الساعات العالمية (هاي كوبي، ميرور أوريجينال، وأوريجينال)، بالإضافة إلى أفخم أنواع الجلود الطبيعية والعطور العالمية المستوردة.
        </p>

        {/* أزرار الأكشن السريعة للتوجيه السريع */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#shop"
            className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-yellow-600 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#D4AF37]/10"
          >
            تصفح المجموعات الحالية
          </a>
          <a
            href="https://facebook.com/look.907/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#111] text-gray-300 hover:text-white border border-[#222] hover:border-[#D4AF37]/50 px-8 py-3.5 rounded-xl font-bold transition-all duration-300"
          >
            شاهد معاينات الريلز الحية
          </a>
        </div>

      </div>
    </div>
  );
}