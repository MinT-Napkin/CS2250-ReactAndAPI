import "../App.css";
import DanteImage from "../images/dantesticker.png";

const Home = () => {
    return (
      <div>
        <h1 className="App-header">Home</h1>
        <div className="center">
          <img src={DanteImage} className="App-logo" alt="logo" />
        </div>
      </div>
    );
};
  
export default Home;