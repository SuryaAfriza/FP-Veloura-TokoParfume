function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={props.product.image}
        alt={props.product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0" }}>
        {props.product.name}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#555" }}>
        {props.product.description}
      </p>
      <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
        ${props.product.price.toFixed(2)}
      </p>
        <button
            style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
            }}
            onClick={() => alert(`Added ${props.product.name} to cart!`)}
        >
            Add to Cart
        </button>
    </div>

  );
}
export default ProductCard;