import React from 'react';
import TinderCard from 'react-tinder-card';
import cards from './CardsContainer.module.css';
import { IUser } from '../../../interfaces/IUser';

interface ICardsContainerProps {
  people: IUser[];
  swiped: (direction: string, nameToDelete: string) => void;
  outOfFrame: (name: string) => void;
  childRefs: any;
}

const CardsContainer: React.FC<ICardsContainerProps> = ({
  people,
  swiped,
  outOfFrame,
  childRefs,
}) => {
  return (
    <>
      <div className={cards.cardsContainer}>
        {people.map((person, index) => (
          <div className={cards.cardContainer} key={person.id}>
            <TinderCard
              ref={childRefs[index]}
              preventSwipe={['down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.photos})` }}
                className={cards.card}
              >
                <h3>{person.name}</h3>
                <h4>{person.title ? person.title : ''}</h4>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsContainer;
