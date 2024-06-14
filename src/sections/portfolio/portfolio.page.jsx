import loadable from "@loadable/component";
import {useInView} from "react-intersection-observer";

import {ContentPortfolio, WrapperPortfolio} from "./styles";
import logoHelppy from "../../assets/images/hellpy-example.png";
import logoGdat from "../../assets/images/gdat-all.png";
import logoDryve from "../../assets/images/dryve-example.png";

const TitleComponent = loadable(() =>
  import("../../components/title/title.components")
);

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const portfolios = [
    {
      logo: logoHelppy,
      title: "HELPPY",
      description:
        "Landing Page que profissionaliza redes digitais e ajuda a vender mais na internet.",
      url: "https://www.helppy.com.br/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoGdat,
      title: "ASSISTÊNCIA WEB",
      description: "Aplicação simplificada para controle e gestão de estoque.",
      url: "https://gdat.surge.sh/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoDryve,
      title: "DRYVE",
      description: "Challenger Dryve. Desafio proposto pela Dryve.",
      url: "https://dryve-challenge.surge.sh/",
      link: "VISITAR PÁGINA",
    },
  ];

  return (
    <WrapperPortfolio id="portfolio">
      <TitleComponent title="MEU" titleSpan="PORTFÓLIO" />
      <ContentPortfolio ref={ref}>
        {portfolios.map((item, idx) => (
          <div
            key={idx}
            className={`${inView ? `animation` : ""}${
              inView ? `animation-${idx}` : ""
            }`}
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <img
                src={item.logo}
                alt={item.title}
                aria-labelledby={item.title}
                loading="lazy"
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="link-page">{item.link}</span>
              </div>
            </a>
          </div>
        ))}
      </ContentPortfolio>
    </WrapperPortfolio>
  );
}
