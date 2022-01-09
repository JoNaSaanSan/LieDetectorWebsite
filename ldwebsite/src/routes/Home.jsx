import '../styles/home.scss';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  return (
    <main>
      <button className="button-59" onClick={() => navigate('/game', { replace: true })}>Let's Play!</button>
    </main>
  );
}

export default Home;
