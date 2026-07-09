import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section
        style={{
          padding: "80px 8%",
          background: "#f8f8f8",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          أحدث الساعات
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          <ProductCard />
        </div>
      </section>
    </>
  );
}