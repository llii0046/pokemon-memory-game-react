import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Pokémon Memory Game</h1>
      <p>Catch 'em all!</p>
    </header>
  );
};

export default Header;
