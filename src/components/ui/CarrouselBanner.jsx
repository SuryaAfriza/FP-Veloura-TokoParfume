function CarrouselBanner(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        {props.title}
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        {props.subtitle}
      </p>
    </div>   
  );
}
export default CarrouselBanner;