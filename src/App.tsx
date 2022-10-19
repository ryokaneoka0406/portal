import Avater from "./components/Avater";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <HeightControler>
        <ContentsWrapper>
          <Avater />
          <Contents />
        </ContentsWrapper>
      </HeightControler>
      <Footer />
    </>
  );
}

export default App;

const HeightControler = styled.div`
  height: 100%;
`;

const ContentsWrapper = styled.div`
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
`;
