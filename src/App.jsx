import Header from './components/Header';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Editorial from './components/Editorial';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CollectionGrid />
        <Editorial />
        <Lookbook />
      </main>
      <Footer />
    </>
  );
}

export default App;
