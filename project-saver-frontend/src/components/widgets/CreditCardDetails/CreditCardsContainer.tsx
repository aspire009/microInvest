
import React from 'react'
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import Carddetail from './CardDetail';
import './creditCardStyles.css';
import Card from '@material-ui/core/Card';
import CreditCardIcon from '../../../assets/images/credit-card.svg';
import { CARDS } from '../../../constants/CreditCardData';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddCardForm from './AddCard/AddCardForm';

const CreditCardsContainer = () => {
    const [addCardPopup, setAddCardPopup] = React.useState(false);

    function showAddCardPopupHandler() {
        setAddCardPopup(true);
    }

    function closeAddCardPopupHandler() {
        setAddCardPopup(false);
    }

    return (
        <Card>
            <div className="credit-card-header">
                <img className="credit-card-icon" src={CreditCardIcon} />
                <label className="credit-card-title">Credit Cards</label>
                <Button onClick={showAddCardPopupHandler} startIcon={<PlaylistAddIcon />}>Add Card</Button>
                {addCardPopup && <AddCardForm addCardPopup={addCardPopup} closePopup={closeAddCardPopupHandler} />}
            </div>
            <List>
                {CARDS.map((card) => {
                    return (<CardContent className="cards">
                        <Carddetail card={card} />
                    </CardContent>)
                })}
            </List>
        </Card>
    )
}

export default CreditCardsContainer;