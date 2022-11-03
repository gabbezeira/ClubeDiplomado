import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Card from './components/Card';
import Vantagens from "./components/Vantagens";
import Conveniados from "./components/Conveniados";
import Solicitar from "./components/Solicitar";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

import "./styles/default.css";
import "./styles/global.js";
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    <Slider />
    <Vantagens />
    <Card />
    <Conveniados />
    <Solicitar />
    <Formulario />
    <Footer />
    </ThemeProvider>
  );
}

export default App;
