import Image from "next/image";

const sectionAboutData = [
  {
    id: 1,
    cardPosition: 1,
    title: "But also the leap into",
    description:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.",
    image: "/images/img1.jpeg",
  },
  {
    id: 2,
    cardPosition: 2,
    title: "But also the leap into",
    description:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.",
    image: "/images/img2.jpeg",
  },
  {
    id: 3,
    cardPosition: 3,
    title: "But also the leap into",
    description:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.",
    image: "/images/img5.jpeg",
  },
  {
    id: 4,
    cardPosition: 4,
    title: "But also the leap into",
    description:
      "Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.",
    image: "/images/img2.jpeg",
  },
];

const SectionAbout = () => {
  return (
    <section className="section-about-container">
      <header className="section-about-header-title-wrapper">
        <h1 className="section-about-header-title">
          Scrambled it to make a&apos;
        </h1>
        <span className="section-about-header-title-line"></span>
        <p className="section-about-header-description">
          Of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </header>
      <div className="section-about-number-container">
        {/* 1 */}
        <div className="section-about-number-wrapper number-one">
          <span className="section-about-number-circle number-one-circle"></span>
          <div className="section-about-number-wrap">
            <h3 className="section-about-number number-one">1</h3>
          </div>
        </div>
        {/* 2 */}
        <div className="section-about-number-wrapper number-two">
          <span className="section-about-number-circle number-two-circle"></span>
          <div className="section-about-number-wrap">
            <h3 className="section-about-number number-two">2</h3>
          </div>
        </div>
        {/* 3 */}
        <div className="section-about-number-wrapper number-three">
          <span className="section-about-number-circle number-three-circle"></span>
          <div className="section-about-number-wrap">
            <h3 className="section-about-number number-three">3</h3>
          </div>
        </div>
        {/* 4 */}
        <div className="section-about-number-wrapper number-four">
          <span className="section-about-number-circle number-four-circle"></span>
          <div className="section-about-number-wrap">
            <h3 className="section-about-number number-four">4</h3>
          </div>
        </div>
        <div className="section-about-card-container">
          {sectionAboutData.map((card) => (
            <div
              key={card.id}
              className={`section-about-card ${
                card.cardPosition === 2 || card.cardPosition === 4
                  ? "margin-top"
                  : ""
              }`}
            >
              <div className="section-about-card-image-wrapper">
                <Image
                  width={500}
                  height={280}
                  className="section-about-card-image"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="section-about-card-text">
                <h2 className="section-about-card-title">{card.title}</h2>
                <span className="section-about-card-title-line"></span>
                <p className="section-about-card-description">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
