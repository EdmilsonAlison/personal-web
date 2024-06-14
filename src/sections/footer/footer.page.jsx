import moment from "moment";

import { WrapperFooter } from "./styles";

const Footer = () => {
  const currentYear = moment().format("YYYY");

  return (
    <WrapperFooter>
      <p>
        Copyright ©{currentYear} Todos os direitos reservados | Desenvolvedor
        Fullstack Javascript
        <a
          href="https://www.linkedin.com/in/edmilsondiass/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edmilson Dias
        </a>
      </p>
    </WrapperFooter>
  );
}

export default Footer;