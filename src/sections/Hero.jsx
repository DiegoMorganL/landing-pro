export default function Hero ({title, description, buttonText}) {

  return(
    <header style={{padding: "4em, 2em"}}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </header>
    
  );
}