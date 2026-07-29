import './App.css';
import wallpaperFrei from './wallpaper-frei.jpg';

function App() {
  return (
    <div className="App">
      <h1>Olá, Frei!</h1>
      <img src={wallpaperFrei} alt="Wallpaper Frei" />
      <i className="fa-brands fa-500px" style={{ color: "rgb(0, 255, 151)" }}></i>
      
    </div>
  );
}

export default App;
