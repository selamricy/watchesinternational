import Link from "next/link";
import { products } from "../data/products";

export default function ProductCard() {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f5f5f5",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "36px",
        }}
      >
        أحدث الساعات
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "260px",
                background: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,.15)",
                transition: ".3s",
                cursor: "pointer",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginBottom: "15px",
                  }}
                >
                  {product.description}
                </p>

                <h2
                  style={{
                    color: "#d4af37",
                    marginBottom: "15px",
                  }}
                >
                  {product.price} جنيه
                </h2>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  أضف إلى السلة
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}