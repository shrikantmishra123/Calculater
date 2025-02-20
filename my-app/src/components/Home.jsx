import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Home Page</h1>

      <button className="btn" onClick={() => navigate("/calculator")}>
        Use Calculator
      </button>
    </div>
  );
};

export default Home;
