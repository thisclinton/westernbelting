import "./partners.css";

const workforceCompliance = [
  {
    img: "https://veriforce.com/wp-content/themes/wp-veriforce/assets/images/veriforce-light.svg",
    id: 1,
    link: "https://www.complyworks.com/en/home/",
    title: "Comply Works",
  },

  {
    img: "https://www.avetta.com/themes/custom/avetta/logo.png",
    id: 2,
    link: "https://www.avetta.com/",
    title: "Avetta",
  },

  {
    img: "https://www.isnetworld.com/en/assets/images/footer/new/ISN-Logo@2x.png",
    id: 3,
    link: "https://www.isnetworld.com/",
    title: "IsNet World",
  },

  {
    img: "https://static.wixstatic.com/media/2b8fca_6446378c3af946c7b707c5e78543ede8~mv2.jpg/v1/crop/x_0,y_0,w_272,h_57/fill/w_381,h_78,al_c,lg_1,q_80,enc_auto/logo%2520Cognibox_edited.jpg",
    id: 4,
    link: "https://www.cognibox.com/en/",
    title: "Cogni Box",
  },

  {
    img: "https://mltgroup-conveyor.com/sites/default/files/mlt_logo/logo_mlt-group-cse_white.png",
    id: 5,
    link: "https://mltnorthamerica.com/",
    title: "MLT North America",
  },
];

function Partners() {
  return (
    <section className="client">
      <h2 className="client__title">Workforce Compliance</h2>

      <div className="client__gallery">
        {workforceCompliance.map((compliance) => (
          <a href={compliance.link} target="_blank" key={compliance.id}>
            <img
              src={compliance.img}
              alt={compliance.title}
              className="client__img"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Partners;
