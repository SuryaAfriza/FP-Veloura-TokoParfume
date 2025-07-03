function Footer(props) {
  return (
    <footer style={{ textAlign: "center", backgroundColor: '#333', padding: "1.5rem 0", color: '#fff' , marginTop: '2rem'}}>
        <div className="container mx-auto">
        <p className="text-xs mt-2">
          Follow us on{' '}
          <a href="https://instagram.com" className="text-blue-400 hover:underline">
            Instagram
          </a>{' '}
          {' '}
          <a href="https://github.com" className="text-blue-400 hover:underline">
            GitHub
          </a>
          {' '}
          <a href="https://linkedin.com" className="text-blue-400 hover:underline">
            LinkedIn
            </a>
            {' '}| © 2025 Veloura. All rights reserved.
        </p>
      </div>
    </footer>
    );
}
export default Footer;