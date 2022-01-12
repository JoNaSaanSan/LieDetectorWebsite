import '../styles/home.scss';
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate()

  return (
    <main>
      <button className="button-59" onClick={() => navigate('/game', { replace: true })}>Los geht's!</button>
    </main>
  );
}

export default Start;
