import "./App.css";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed w-full backdrop-blur-lg z-20">
        <Header />
      </div>
      <Hero />
      <Feature />
      <Faq />
    </div>
  );
}

export default App;
