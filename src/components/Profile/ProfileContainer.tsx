import React, { useState, useMemo } from 'react';
import CardsContainer from '../Cards';
import Header from '../Header';
import CardsButtons from '../Cards/CardsButtons';
import { IUser } from '../../../interfaces/IUser';

const db: IUser[] = [
  {
    id: 1,
    name: 'Kirill',
    photos: [
      'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6.png',
      'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6.png',
    ],
    sex: 'male',
    title: "Heeeeeeeloo I'm title",
    city: 'Homel',
    like: null,
    likeMe: null,
    search: 'female',
  },
  {
    id: 2,
    name: 'Nasya',
    photos: [
      'https://bigpicture.ru/wp-content/uploads/2019/10/1564493406756-belle-delphine-tik.jpg',
    ],
    sex: 'male',
    title: 'Общительная, люблю гулять.',
    city: 'Homel',
    like: null,
    likeMe: null,
    search: 'female',
  },
  {
    id: 3,
    name: 'Kate',
    photos: [
      'https://cdn11.bigcommerce.com/s-1js1zluvaj/images/stencil/1280x1280/products/3982/21673/Obrix-Denim-Female-Casual-Style-Coat-Spring-Cotton-Korean-fashion-Streetwear-Loose-Polo-Collar-Full-Sleeve__60195.1562825471.jpg?c=2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NNUm7tCGleLMd_Q_nIZJrzSZBvs_Ac0OtA&usqp=CAU',
    ],
    sex: 'male',
    title: 'Люблю кушать!',
    city: 'Homel',
    like: null,
    likeMe: null,
    search: 'female',
  },
  {
    id: 4,
    name: 'Nastya',
    photos: [
      'https://pickytop.com/wp-content/uploads/2020/03/Margot-Robbie.jpg',
      'https://pickytop.com/wp-content/uploads/2020/03/Margot-Robbie.jpg',
    ],
    sex: 'female',
    title: 'Общительная, люблю гулять.',
    city: 'Homel',
    like: null,
    likeMe: null,
    search: 'female',
  },
  {
    id: 5,
    name: 'Kirill555',
    photos: [
      'https://specials-images.forbesimg.com/imageserve/5fc9f4754e7bf641f3497d1f/0x0.jpg?cropX1=68&cropX2=3091&cropY1=67&cropY2=2986',
      'https://specials-images.forbesimg.com/imageserve/5fc9f4754e7bf641f3497d1f/0x0.jpg?cropX1=68&cropX2=3091&cropY1=67&cropY2=2986',
    ],
    sex: 'female',
    title: "Heeeeeeeloo I'm title",
    city: 'Homel',
    like: null,
    likeMe: null,
    search: 'female',
  },
];

const alreadyRemoved: string[] = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const ProfileContainer = () => {
  const [people, setPeople] = useState<IUser[]>(db);
  const [lastDirection, setLastDirection] = useState<string>();

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef<any>()),
    [],
  );

  const swiped: (direction: string, nameToDelete: string) => void = (
    direction,
    nameToDelete,
  ) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame: (name: string) => void = (name) => {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(
      (character) => character.name !== name,
    );
    setPeople(charactersState);
  };

  const swipe: (direction: string) => void = (direction) => {
    const cardsLeft = people.filter(
      ({ name }) => !alreadyRemoved.includes(name),
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map(({ name }) => name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(direction); // Swipe the card!
    }
  };

  return (
    <>
      <Header />
      <CardsContainer
        people={people}
        swiped={swiped}
        outOfFrame={outOfFrame}
        childRefs={childRefs}
      />
      <CardsButtons swipe={swipe} />
    </>
  );
};

export default ProfileContainer;
