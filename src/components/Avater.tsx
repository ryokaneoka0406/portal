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

      <FontAwesomeIcon icon={faTwitter as IconDefinition} />
      <FontAwesomeIcon icon={faLinkedin as IconDefinition} />
      <FontAwesomeIcon icon={faGithub as IconDefinition} />
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
  text-align: center;
`;
