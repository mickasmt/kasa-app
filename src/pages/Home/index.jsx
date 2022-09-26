import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Collapse from "../../components/Collapse";

import data from "../../logements.json";

function Home() {
  return (
    <div>
      <Banner name="home" />

      {data.map((logement) => {
        return <Card logement={logement} key={logement.id} />;
      })}

      <Collapse title="title test">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt quaerat iure dolorum dolores provident consequatur, ut magni animi modi fuga quidem quasi. Similique vel atque adipisci. Aperiam, at dignissimos.</p>
      </Collapse>
    </div>
  );
}

export default Home;
