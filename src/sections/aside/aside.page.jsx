import {ContentNamePanel, ContentSocialMedia, SocialList, VerticalDivisor, WrapperAside,} from "./styles";
import iconLinkedin from "../../assets/images/linkedin.png";
import iconWhatsapp from "../../assets/images/whatsapp.png";

const Aside = () => {
  return (
    <WrapperAside>
      <ContentNamePanel>
        <div>
          <p>
            <span>Por</span>
            <strong>Edmilson</strong>Dias
          </p>
        </div>
      </ContentNamePanel>
      <ContentSocialMedia>
        <SocialList>
          <li>
            <VerticalDivisor />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/edmilsondiass/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-social-media"
                src={iconLinkedin}
                alt="Linkedin"
                loading="lazy"
              />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5511993883197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-social-media"
                src={iconWhatsapp}
                alt="Whatsapp"
                loading="lazy"
              />
            </a>
          </li>
        </SocialList>
      </ContentSocialMedia>
    </WrapperAside>
  );
};

export default Aside;
