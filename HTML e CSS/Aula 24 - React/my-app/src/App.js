
import './App.css';
import wallpaper from './wallpaper-frei.jpg';
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Welcome to your React app!</p>
      <div className='b'>
        <img src={wallpaper} alt="Wallpaper" />
        <p>This is a simple React component.</p>
      </div>
      <i className="fa-solid fa-house"></i>
    </div>
  );
}

export default App;
