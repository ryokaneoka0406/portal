import Avater from "./components/Avater";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BodyWrapper>
        <Avater />
        <Contents />
        <Footer />
      </BodyWrapper>
    </div>
  );
}

export default App;

const BodyWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 28rem;
  padding: 2rem;
  @media (min-width: 640px) {
    max-width: 42rem;
    padding: 1rem;
  }
`;
