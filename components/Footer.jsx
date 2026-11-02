export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2026 Arjun Sharma. All rights reserved. · Built with Next.js 15</p>
        <div className="footer-links">
          <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a>
          <a href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
