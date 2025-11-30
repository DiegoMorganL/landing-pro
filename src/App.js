import './App.css';
import Hero from './sections/Hero';
import { initialFeatures } from './data/features.js';
import Features from './sections/Features.jsx';

function App() {
  return (
    <div className="App">
      <Hero 
        title="Bienvenido a mi Landing"
        description="Todo el contenido de esta página es dinámico."
        buttonText="Comenzar"
      />
      <Features features={initialFeatures} />
    </div>
  );
}

export default App;
