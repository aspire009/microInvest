import { useState } from "react";
import CardDetailsRow from "../CardDetailsRow/CardDetailsRow";
import { CardDetailsRowModel } from "../CardDetailsRow/CardDetailsRowModel";
import CardPallette from "../CardPallette/CardPallette";
import { CardDetailsContainerProps } from "./CardDetailsContainerModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import './CardDetailsContainer.css'
import PayButton from '../../CreditCardDetails/PayButton'
import AcceptPayment from "../../../Payment/acceptPayment";
import {cardList, CITI, BOA, CB} from '../../../../constants/CreditCardData'
import AddCardPopup from "../AddCardPopup";
import Button from '@material-ui/core/Button'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const CardDetailsContainer = (props:{username:string}) => {
   const [cards, setCards] = useState<CardDetailsRowModel[]>(cardList);
    const [cardIndex, setCardIndex] = useState(0);
    const [addCardPopup, setAddCardPopup] = useState(false);
    
    
    const showAddCardPopupHandler = () => {
        setAddCardPopup(true);
    }

    const closeAddCardPopupHandler = () => {
        setAddCardPopup(false);
    }

    const deleteCardHandler = (id: number) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    }

    const addCardHandler = (card: CardDetailsRowModel) => {
        //call api on backedn
        card.id = Math.floor(Math.random() * 10000);
        card.bankName= CITI;
        card.dueAmount = "1000";
        card.dueDate = "27 June 2021"
        const updatedCards = cards;
        updatedCards.push(card);
        setCards(updatedCards);
    }

    

    return (
        <div className="card-details-container-main">
            <label className="card-details-container-heading" style={{ color: COLORS.textPrimary }}>Credit Cards</label>

            <div className="card-details-container-content">
                <div className="card-details-container-card">
                    {cardIndex <= cards.length &&<CardPallette cardDetailsRowModel={cards[cardIndex]} />}
                </div>
                <div className="card-details-container-list">
                    {
                        cards.map((cardModel, index) => {
                            return (
                                <div onClick={() => setCardIndex(index)}>
                                    <CardDetailsRow deleteCard={deleteCardHandler} cardDetailsRowModel={cardModel} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="card-details-container-add-card">
                    {/* <FontAwesomeIcon className="card-details-container-add-card-icon" icon={faPlusCircle} style={{ color: COLORS.textSecondary }} /> */}
                    {/* <label className="card-details-container-add-card-text" style={{ color: COLORS.textSecondary }}>Add Card</label> */}
                    <AcceptPayment/>
                    {addCardPopup && <AddCardPopup addCardPopup={addCardPopup} closePopup={closeAddCardPopupHandler} saveCardHandler={addCardHandler} />}
                </div>
                <div className="card-details-container-add-card"><Button onClick={showAddCardPopupHandler} startIcon={<PlaylistAddIcon />}>Add Card</Button></div>
                
            </div>
        </div>
    )
}

export default CardDetailsContainer;