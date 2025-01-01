import { NavbarPortfolio } from "../Navbar/navbar";
import { BtnContact } from "./btn-contact/btn-contact";
import "./hero.css";

export function HeroPortfolio() {
  return (
    <>
      <article className="contentAll--hero">
        <nav className="content--navbarPortfolio">
          <NavbarPortfolio />
        </nav>

        <section className="introductionHero--portfolio">
          <span className="AvailableForNewOpportunities">
            Disponible para nuevas oportunidades
          </span>

          <h1 className="title--portfolio">
            Construyo interfaces que combinan creatividad y funcionalidad
          </h1>

          <div className="content--btn-contact">
            <BtnContact />
          </div>
        </section>
      </article>
    </>
  );
}
