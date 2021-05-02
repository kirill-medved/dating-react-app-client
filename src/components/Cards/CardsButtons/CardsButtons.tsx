import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import cardsButtons from './CardsButtons.module.css';

interface ICardsButtonsProps {
  swipe: (direction: string) => void;
}

const CardsButtons: React.FC<ICardsButtonsProps> = ({ swipe }) => {
  return (
    <div className={cardsButtons.container}>
      <div className={cardsButtons.wrapper}>
        <IconButton className={cardsButtons.iconButton}>
          <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton
          className={cardsButtons.iconButton}
          onClick={() => swipe('left')}
        >
          <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton
          className={cardsButtons.iconButton}
          onClick={() => swipe('up')}
        >
          <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton
          className={cardsButtons.iconButton}
          onClick={() => swipe('right')}
        >
          <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className={cardsButtons.iconButton}>
          <FlashOnIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
};

export default CardsButtons;
