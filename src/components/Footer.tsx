import styled from "styled-components";

const Footer = () => {
  return <Stickeyfooter>ryopenguin ©</Stickeyfooter>;
};

export default Footer;

const Stickeyfooter = styled.footer`
  position: sticky;
  top: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28rem;
  padding: 2rem;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  @media (min-width: 640px) {
    max-width: 42rem;
    padding: 1rem;
  }
  }
`;
