export default function FeatureCard({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
