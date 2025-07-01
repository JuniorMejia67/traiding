import React from 'react';
import InputTexto from './InputTexto';
import MostrarTexto from './MostrarTexto';

const Header = () => <header>Este es el Header</header>;
const Menu = () => <nav>Este es el Menú</nav>;
const Contenido = () => <main>Este es el Contenido</main>;
const Footer = () => <footer>Este es el Footer</footer>;

const App = () => {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <InputTexto onChange={setTexto} />
      <MostrarTexto texto={texto} />
    </div>
  );
};

export default App;

