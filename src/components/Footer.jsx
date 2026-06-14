export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        VK<span>.</span>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Vaibhav Kumar · Built with{" "}
        <span className="footer-heart">♥</span> &amp; React
      </p>
      <p className="footer-copy">tyagivaibhav2005@gmail.com</p>
    </footer>
  );
}
