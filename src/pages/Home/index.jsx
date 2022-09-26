import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Collapse from "../../components/Collapse";
import data from "../../logements.json";

function Home() {
  return (
    <div>
      <Banner />

      {data.map((logement) => {
        return <Card id={logement.id} title={logement.title} />;
      })}

      <Collapse title="title test">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, animi
        consequuntur sint illo deleniti sequi voluptatibus vitae aut ratione
        corrupti quia itaque at nihil esse ullam nam atque numquam natus.
      </Collapse>
    </div>
  );
}

export default Home;
