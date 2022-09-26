import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

function About() {
  return (
    <div>
      <Banner name="about" />

      <Collapse title="title test">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt quaerat iure dolorum dolores provident consequatur, ut magni animi modi fuga quidem quasi. Similique vel atque adipisci. Aperiam, at dignissimos.</p>
      </Collapse>
    </div>
  );
}

export default About;
