import Navbar from "./components/Navbar.tsx";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

function App() {
  return (
      
    <div className='overflow-x-hidden'>
      <Navbar/>
      {/* background */}
      <video src="./src/assets/bacground.mp4" loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>

      {/* content */}
  </div>
  );
}

export default App;
