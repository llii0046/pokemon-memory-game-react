import React from 'react';
import styles from './styles.module.css';

interface ModalOverlayProps {
    visible: boolean;
    onReset: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ visible, onReset }) => {
    if (!visible) return null;
    
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2 className={styles.winner}>Congratulations, Pokémon Master!</h2>
                <button className={styles.restart} onClick={onReset}>Embark on Another Adventure!</button>
                <p className={styles.message}>Developed with <a href="https://react.dev/" target='_blank' rel="noopener noreferrer">React</a> in the world of <a href="https://www.pokemon.com/" target='_blank' rel="noopener noreferrer">Pokémon</a> by <a href="https://github.com/llii0046" target='_blank' rel="noopener noreferrer">Luxing</a></p>
            </div>
        </div>
    );
};

export default ModalOverlay;
