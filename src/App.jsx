import "./App.css";
import { HeroPortfolio } from "./assets/components/Hero/hero";

function App() {
  return (
    <>
      <article className="content__all--portfolio">
        <section className="contentHero--portfolio">
          <HeroPortfolio />
        </section>
      </article>
    </>
  );
}

export default App;
