import React from 'react';
import ICard from '../../interface/card';
import CardBack from '../../assets/images/pokemon_card_back.jpg';
import styles from './Cards.module.css';
import { Tilt } from "react-tilt";
interface CardProps {
  card: ICard;
  index: number;
  isPicked: boolean;
  isMatched: boolean;
  cardClicked: (index: number) => void;
}

const Card: React.FC<CardProps> = ({ card, index, isPicked, isMatched, cardClicked }) => (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={styles.card}>
      <div onClick={() => cardClicked(index)}>
        <div className={`${styles.inside} ${isPicked || isMatched ? styles.picked : ''}`}>
          <div className={styles.front}>
            <img src={card.img} alt={card.name} />
          </div>
          <div className={styles.back}>
            <img src={CardBack} alt="Pokemon" />
          </div>
        </div>
      </div>
    </Tilt>
)

export default Card;
