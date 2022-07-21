import Footer from "../../components/Footer";
import Nav from "../../components/Navbar";
import Main from "../../components/Main";
import Ray from "../../components/Ray";
import "./styles.scss";

function Home() {
  return (
    <div className="container">
      <div className="fade">
        <Nav />
        <Main />
        <Footer />
        <Ray />
      </div>
    </div>
  );
}

export default Home;
