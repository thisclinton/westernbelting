import "./contact.css";

function Contact() {
  return (
    <section className="client">
      <h2 className="client__title">Text goes in Here.</h2>
      <div className="client__gallery">
        <img
          src="https://static.wixstatic.com/media/2b8fca_e754a6f2dc8b4e6fb773b140cc9230de~mv2.png/v1/fill/w_490,h_158,al_c,lg_1,q_85,enc_auto/2b8fca_e754a6f2dc8b4e6fb773b140cc9230de~mv2.png"
          alt="comply works"
          className="client__img"
        />
        <img
          src="https://static.wixstatic.com/media/2b8fca_904e4da632754f04bfc239305c9dd9b1~mv2.png/v1/fill/w_232,h_84,al_c,lg_1,q_85,enc_auto/2b8fca_904e4da632754f04bfc239305c9dd9b1~mv2.png"
          alt="Avetta"
          className="client__img"
        />
        <img
          src="https://static.wixstatic.com/media/2b8fca_222e00e55bb24f5fbc58b6937d038fb5~mv2.png/v1/fill/w_531,h_148,al_c,lg_1,q_85,enc_auto/2b8fca_222e00e55bb24f5fbc58b6937d038fb5~mv2.png"
          alt="ISN"
          className="client__img"
        />
        <img
          src="https://static.wixstatic.com/media/2b8fca_6446378c3af946c7b707c5e78543ede8~mv2.jpg/v1/crop/x_0,y_0,w_272,h_57/fill/w_381,h_78,al_c,lg_1,q_80,enc_auto/logo%2520Cognibox_edited.jpg"
          alt="Cogni Box"
          className="client__img"
        />
        <img
          src="https://static.wixstatic.com/media/2b8fca_9fe9363013144ef6a2c5be2e53f618e5~mv2.jpg/v1/fill/w_349,h_132,al_c,lg_1,q_80,enc_auto/MLT_Logo.jpg"
          alt="MLT"
          className="client__img"
        />
      </div>
    </section>
  );
}

export default Contact;
