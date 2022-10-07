import Footer from "./Components/Footer";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import "./assets/css/orbit-5.css";

function App() {
  return (
    <>
      <div className="wrapper mt-lg-5">
        <SideBar />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
