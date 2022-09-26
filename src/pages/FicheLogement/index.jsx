import data from "../../logements.json";
import { useParams } from "react-router-dom";

function FicheLogement() {
  // 👇️ get ID from url
  const params = useParams();
  
  const logement = data.find((lgmt) => lgmt.id === params.id)
  // console.log(logement);

  return (
    <div>
      <h1>{logement.title}</h1>
    </div>
  );
}

export default FicheLogement;
