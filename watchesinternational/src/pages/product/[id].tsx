import { useRouter } from "next/router";
import { products } from "../../data/products";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1 style={{ textAlign: "center" }}>جاري التحميل...</h1>;
  }

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "400px",
          borderRadius: "15px",
        }}
      />

      <div style={{ maxWidth: "450px" }}>
        <h1>{product.name}</h1>

        <h2 style={{ color: "#d4af37" }}>
          {product.price} جنيه
        </h2>

        <p
          style={{
            margin: "20px 0",
            fontSize: "18px",
          }}
        >
          {product.description}
        </p>

        <button
          style={{
            padding: "15px 35px",
            background: "#25D366",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          اطلب عبر واتساب
        </button>
      </div>
    </div>
  );
}