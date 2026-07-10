import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  // البحث عن المنتج المطابق للـ id في الرابط
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen text-center py-20">
        <h2 className="text-xl font-bold">جاري تحميل تفاصيل الموديل...</h2>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen text-right" dir="rtl">
      <Head>
        <title>{product.name} | Watches International</title>
      </Head>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black">{product.name}</h1>
        <p className="text-gray-400 mt-4">{product.description}</p>
        <div className="text-3xl font-black mt-6">
          {product.price.toLocaleString('ar-EG')} ج.م
        </div>
      </main>
    </div>
  );
}

// هذه الدوال هي الحل الجذري للـ 404
export async function getStaticPaths() {
  // توليد قائمة بكل المسارات المتاحة بناءً على ملف المنتجات
  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return { props: {} };
}