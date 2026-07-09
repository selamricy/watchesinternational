// 1. تعريف مواصفات المنتج (Product Interface) بدقة عالية لضمان التصفح السريع
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'watches' | 'leather' | 'perfumes'; // الأقسام الرئيسية
  gender?: 'men' | 'women' | 'unisex';          // تحديد الجنس للساعات والعطور
  quality?: 'high-copy' | 'mirror' | 'original'; // مستويات الجودة المخصصة لك
  price: number;
  oldPrice?: number;                            // لعرض الخصومات في الإعلانات المموّلة
  description: string;
  images: string[];                             // مصفوفة صور لدعم زوايا تصوير مختلفة لكل منتج
  inStock: boolean;
  isFeatured?: boolean;                         // لعرض المنتج في الواجهة الرئيسية كموديل مميز
  whatsappLink?: string;                        // رابط مباشر لطلب الموديل بالطلب
}

// 2. مصفوفة المنتجات (قاعدة البيانات التجريبية) - يمكنك التعديل عليها وإضافة آلاف المنتجات
export const products: Product[] = [
  {
    id: "rolex-submariner-01",
    name: "Rolex Submariner Green Dial",
    brand: "Rolex",
    category: "watches",
    gender: "men",
    quality: "mirror",
    price: 8500, // السعر افتراضي للتجربة
    oldPrice: 10000,
    description: "ساعة رولكس سبمارينر ميرور أوريجينال بأعلى مواصفات وتقفيل ماكينة سويسري أوتوماتيك، مقاومة للماء بالكامل.",
    images: [
      "/images/rolex/submariner-1.jpg",
      "/images/rolex/submariner-2.jpg"
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: "cartier-santos-01",
    name: "Cartier Santos Diamond Rose Gold",
    brand: "Cartier",
    category: "watches",
    gender: "women",
    quality: "high-copy",
    price: 4500,
    description: "ساعة كارتير سانتوس حريمي هاي كوبي درجة أولى فخمة جداً، مرصعة بفصوص الزيركون اللامعة وثبات ممتاز للألوان.",
    images: ["/images/cartier/santos-1.jpg"],
    inStock: true,
    isFeatured: true
  },
  {
    id: "leather-wallet-01",
    name: "محفظة جلد طبيعي بايلوت فاخرة",
    brand: "MontBlanc",
    category: "leather",
    price: 1200,
    description: "محفظة رجالي من الجلد الطبيعي 100% بتصميم عصري يتسع لجميع الكروت والعملات الورقية مع علبة البراند الفاخرة.",
    images: ["/images/leather/wallet-1.jpg"],
    inStock: true
  },
  {
    id: "perfume-creed-01",
    name: "Creed Aventus Mirror Original",
    brand: "Creed",
    category: "perfumes",
    gender: "men",
    quality: "mirror",
    price: 2800,
    description: "عطر كريد أفينتوس ميرور أوريجينال بنفس الثبات والفوحان العطري الأصلي، يأتي بعبوة البراند الأصلية.",
    images: ["/images/perfumes/creed-1.jpg"],
    inStock: true,
    isFeatured: false
  }
];