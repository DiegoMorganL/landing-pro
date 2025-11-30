import './App.css';
import Hero from './sections/Hero';
import { initialFeatures } from './data/features.js';
import { useState } from "react";
import Features from './sections/Features.jsx';
import AddFeatureForm from './components/AddFeatureForm.jsx';

function App() {
  const [features, setFeatures] = useState(initialFeatures);

  function handleAddFeature(newF) {
    setFeatures([...features, newF]);
  }

  return (
    <div className="App">
      <Hero 
        title="Bienvenido a mi Landing"
        description="Todo el contenido de esta página es dinámico."
        buttonText="Comenzar"
      />
      <AddFeatureForm onAdd={handleAddFeature} />
      <Features features={initialFeatures} />
    </div>
  );
}

export default App;
