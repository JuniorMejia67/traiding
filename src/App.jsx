import React from 'react';

const Header = () => <header>Este es el Header</header>;
const Menu = () => <nav>Este es el Menú</nav>;
const Contenido = () => <main>Este es el Contenido</main>;
const Footer = () => <footer>Este es el Footer</footer>;

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Contenido />
      <Footer />
    </div>
  );
};

export default App;
