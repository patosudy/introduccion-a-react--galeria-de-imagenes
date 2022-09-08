import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header titulo = "Galeria de imagenes con React" />
      <Card titulo = "rocas piedras cantos rodados" url = "https://pixabay.com/es/photos/r%c3%ado-rocas-piedras-cantos-rodados-7411236/" descripcion = "pequeñas cascadas"></Card>
      <Card titulo = "la carretera" url = "https://pixabay.com/es/photos/la-carretera-asia-tailandia-bangkok-7425079/" descripcion = "ciudad"></Card>
      <Card titulo = "playa mar costa" url = "https://pixabay.com/es/photos/playa-mar-costa-arena-muelle-7416035/" descripcion = "costa"></Card>
      <Footer/>   
    </div>
  );
}

export default App;
