import Header from "./components/Header"
import Logo from "./components/Logo";

import GlobalStyled from "./styles/global.js"
import './styles/App.css';

function App() {
  return (
    <>
      <GlobalStyled/>
      <div className="App">
        <Header/>
      </div>
    </>
  );
}

export default App;
