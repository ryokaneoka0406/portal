import Icon from "./icon.jpg";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter as IconDefinition);
library.add(faGithub as IconDefinition);
library.add(faLinkedin as IconDefinition);

const Avater = () => {
  return (
    <>
      <h1>ryopenguin</h1>
      <Avaterwrapper>
        <Avaterimage src={Icon} alt="icon"></Avaterimage>
      </Avaterwrapper>
      <SocialIconFlow>
        <SocialLink href="https://twitter.com/ryopenguin" target="_blank">
          <SocialIcons>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcons>
        </SocialLink>
        <SocialLink href="https://github.com/ryokaneoka0406" target="_blank">
          <SocialIcons>
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcons>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/ryokaneoka/"
          target="_blank"
        >
          <SocialIcons>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcons>
        </SocialLink>
      </SocialIconFlow>
    </>
  );
};

export default Avater;

const Avaterimage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
`;

const Avaterwrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

const SocialIconFlow = styled.ul`
  display: flex;
  justify-content: center;
  justify-items: center;
  padding-left: 0;
`;

const SocialIcons = styled.li`
  list-style: none;
  margin: 0.5rem 1rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

const SocialLink = styled.a`
  color: inherit;
`;
