import { motion } from "framer-motion";
import "./workshop.css";
import Transition from "../../transition";

const industries = [
  {
    title: "Ports and Terminals",
    description:
      "Vital hubs for global trade, facilitating the import and export of goods via ships, connecting nations and enabling economic growth.",
    img: "https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?q=80&w=2347&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
  },
  {
    title: "Aggregate and Forestry",
    description:
      "Industries involved in the extraction and processing of raw materials like sand, gravel, and timber for construction and wood products.",
    img: "https://images.unsplash.com/photo-1664792558934-c7b321605f29?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 2,
  },
  {
    title: "Mining",
    description:
      "Extractive industry focused on obtaining valuable minerals and ores from the earth, supporting infrastructure, energy, and manufacturing sectors.",
    img: "https://plus.unsplash.com/premium_photo-1661911778005-bda918172dd3?q=80&w=2382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 3,
  },
  {
    title: "Manufacturing",
    description:
      "Sector encompassing the production of goods, ranging from automobiles to electronics, often involving assembly, fabrication, and processing operations.",
    img: "https://images.unsplash.com/photo-1598299803204-b73796f43289?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 4,
  },
  {
    title: "Oil and Gas",
    description:
      "Energy sector responsible for exploration, extraction, refining, and distribution of petroleum products, playing a critical role in global energy supply.",
    img: "https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=2383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 5,
  },
  {
    title: "Food & Processing",
    description:
      " Industry involved in the production, packaging, and distribution of food products, ensuring quality, safety, and efficiency in food supply chains.",
    img: "https://plus.unsplash.com/premium_photo-1661876053515-5b7902815759?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 6,
  },
];

function Workshop() {
  return (
    <>
      <Transition />
      <section className="industries">
        <div className="title__container">
          <h1 className="section__title">Industries</h1>
          <p className="section__description">
            Welcome to our Industries section, where we delve into the diverse
            sectors that power economies worldwide.
          </p>
        </div>

        <div className="industries__container">
          <p className="industries__intro">
            The Industries section encompasses diverse sectors, each with unique
            roles and contributions. From facilitating global trade at Ports and
            Terminals to extracting vital resources in Mining, and supporting
            energy needs in Oil and Gas, this section explores the dynamics of
            various sectors driving economic growth and innovation. Whether in
            Manufacturing, Aggregate and Forestry, or Food & Processing, these
            industries play pivotal roles in shaping our modern world.
          </p>
          <div className="industries__box">
            {industries.map((industry) => (
              <article className="industries__card" key={industry.id}>
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="industries__img"
                />
                <span className="industries__title">{industry.title}</span>
                <p className="industries__description">
                  {industry.description}
                </p>
                <div className="industries__shadow"></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Workshop;
