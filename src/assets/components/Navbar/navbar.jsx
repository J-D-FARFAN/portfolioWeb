import "./navbar.css";

export function NavbarPortfolio() {
  return (
    <>
      <article className="contentAll--navbarPortfolio">
        <section className="content__infoPerson">
          <figure className="bx-image-avatar">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="avatar"
              className="image-avatar"
            />
          </figure>

          <div className="infoPerson__name__profession">
            <span className="name">Juan Farfan</span>
            <span className="circle"></span>
            <span className="profession">Desarrollador FrontEnd</span>
          </div>
        </section>

        <ul className="content__sectionPortfolio--work__contact">
          <li className="sectionPortfolio--work__contact__item">Proyectos</li>
          <li className="sectionPortfolio--work__contact__item">Contacto</li>
        </ul>
      </article>
    </>
  );
}
