import FeatureCard from "../components/FeatureCard";

export default function Features ({ features }) {
  
  return(
    <section style={{ padding: "2rem"}}>
      <h2>Caracteristicas</h2>

      <div style={{ display:"grid", gap: "1rem"}}>
        {features.map( feat => (
          <FeatureCard
            key={feat.id}
            title={feat.title}
            description={feat.description}
          />
        ))}
      </div>
    </section>
  );
}