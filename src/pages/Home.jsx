import CarrouselBanner from "../components/ui/CarrouselBanner";
import ProductCard from "../components/ui/ProductCard";

function Home() {
  return (
    <div style={{ 
      textAlign: 'center',         /* Untuk teks */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',       /* Untuk horizontal */
      justifyContent: 'center',   /* Untuk vertikal */
      minHeight: '50vh'           /* Beri tinggi minimal */
    }}>

      <CarrouselBanner
        title="Discover Your Signature Scent"
        subtitle="Luxury perfumes crafted for you"
        bannerImage="/images/banner.jpg"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          padding: "2rem",
        }}
      >
        <div className="product-list">
          <ProductCard
            product={{
              image: "https://via.placeholder.com/150",
              name: "Product 1",
              description: "This is a great product.",
              price: 19.99,
            }}
          />
          <ProductCard
            product={{
              image: "https://via.placeholder.com/150",
              name: "Product 2",
              description: "This is another great product.",
              price: 29.99,
            }}
          />
          <ProductCard
            product={{
              image: "https://via.placeholder.com/150",
              name: "Product 3",
              description: "This is yet another great product.",
              price: 39.99,
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
