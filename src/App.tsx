import React, { useState, useEffect } from 'react';
import { cards } from './data/cards';
import ICard from './interface/card';
import { ModalOverlay, Card, Header} from './components'
import './styles/global.css'

const shuffle = (array: ICard[]): ICard[] => {
  let counter = array.length, temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

const App: React.FC = () => {
  const [cardsArray, setCardsArray] = useState<ICard[]>([]);
  const [guess, setGuess] = useState<number | null>(null);
  const [pickedCards, setPickedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [allMatched, setAllMatched] = useState<boolean>(false);

  useEffect(() => {
    if (matchedCards.length === cardsArray.length) {
      setAllMatched(true);
    } else {
      setAllMatched(false);
    }
  }, [matchedCards, cardsArray]);

  useEffect(() => {
    const initialCards: ICard[] = shuffle([...cards, ...cards]);
    setCardsArray(initialCards);
  }, []);

  const handleMatched = (index: number) => {
    setMatchedCards(prev => [...prev, index, guess!]);
    setPickedCards(prev => [...prev, index]);
    setGuess(null);
  };

  const handleNotMatched = (index: number) => {
    const newPickedCards = [...pickedCards, index];
    setPickedCards(newPickedCards);
    setTimeout(() => {
      setGuess(null);
      setPickedCards([]);
    }, 600);
  };

  const cardClicked = (index: number): void => {
    const id = cardsArray[index].id;
    if (!pickedCards.includes(index)) {
      if (guess === null) {
        setGuess(index);
        setPickedCards(prev => [...prev, index]);
      } else {
        if (cardsArray[guess].name === cardsArray[index].name && guess !== index) {
          handleMatched(index);
        } else {
          handleNotMatched(index);
        }
      }
    }
  };

  const reset = (): void => {
    setMatchedCards([]);
    setPickedCards([]);
    setGuess(null);
    const reshuffledCards: ICard[] = shuffle([...cards, ...cards]);
    setCardsArray(reshuffledCards);
  };

  return (
    <>
      <Header />
      <main>
        <div className="wrap">
            {cardsArray.map((card, index) => (
              <Card
                key={`${index}-${card.id}`}
                card={card}
                index={index}
                isPicked={pickedCards.includes(index)}
                isMatched={matchedCards.includes(index)}
                cardClicked={cardClicked}
              />
            ))}
          </div>
          <ModalOverlay visible={allMatched} onReset={reset} />
      </main>
    </>
  );
}

export default App;

