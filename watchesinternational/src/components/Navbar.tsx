export default function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        color: "#fff",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>⌚ Watches International</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          الرئيسية
        </a>

        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          الساعات
        </a>

        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          العروض
        </a>

        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          تواصل معنا
        </a>
      </div>
    </nav>
  );
}