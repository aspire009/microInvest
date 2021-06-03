import React, { useState } from "react";
import CardDetailsRow from "../CardDetailsRow/CardDetailsRow";
import { CardDetailsRowModel } from "../CardDetailsRow/CardDetailsRowModel";
import CardPallette from "../CardPallette/CardPallette";
import { CardDetailsContainerProps } from "./CardDetailsContainerModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBolt, faMinus } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import './CardDetailsContainer.css'
import RoundIconButton from "../../RoundIconButton/RoundIconButton";
import { CardModel } from "../../models/CardModel";
import AddCardForm from '../AddCard/AddCardForm';


const CardDetailsContainer: React.FC<CardDetailsContainerProps> = ({ cardDetailContainerModel }: CardDetailsContainerProps) => {
    const [cardList, setCardList] = useState<CardDetailsRowModel[]>([
        { id: 1, bankName: 'Citi Bank', cardNumber: '1234 **** **** 6789', dueAmount: '3,200.98', dueDate: '30 May 2021' },
        { id: 1, bankName: 'Bank of America', cardNumber: '3456 **** **** 0987', dueAmount: '1,220.08', dueDate: '27 May 2021' },
        // { bankName: 'Chase Bank', cardNumber: '8821 **** **** 3429', dueAmount: '2,510.21', dueDate: '31 May 2021' },
        // { bankName: 'Wells Fargo', cardNumber: '3456 **** **** 0987', dueAmount: '1,220.08', dueDate: '27 May 2021' },
    ]);

    const [cardIndex, setCardIndex] = useState(0);
    const [addCardPopup, setAddCardPopup] = useState(false);

    const showAddCardPopupHandler = () => {
        console.log('before open popup flag:', addCardPopup)
        setAddCardPopup(true);
        console.log('after open popup flag:', addCardPopup)
    }

    const closeAddCardPopupHandler = () => {
        console.log('before close popup flag:', addCardPopup)
        setAddCardPopup(false);
        console.log('after close popup flag:', addCardPopup)
    }

    const addCardHandler = (addedCard: CardModel) => {
        //call api on backedn
        console.log('cardValue received: ', addedCard)

        const cardDisplay: CardDetailsRowModel = {
            id: 1,
            bankName: 'Citi Bank',
            cardNumber: addedCard.cardNumber,
            dueAmount: '1,000',// + addedCard.dueAmount,
            dueDate: '28 Math 2021'//addedCard.dueDate
        }

        const updatedCardList = cardList;
        updatedCardList.push(cardDisplay);

        setCardList(updatedCardList);

        console.log(cardList)
        // setCardList([
        //     { bankName: 'Chase Bank', cardNumber: '8821 **** **** 3429', dueAmount: '2,510.21', dueDate: '31 May 2021' },
        //     { bankName: 'Wells Fargo', cardNumber: '3456 **** **** 0987', dueAmount: '1,220.08', dueDate: '27 May 2021' },
        // ]);


    }

    return (
        <div className="card-details-container-main">
            <label className="card-details-container-heading" style={{ color: COLORS.textPrimary }}>Credit Cards</label>

            <div className="card-details-container-content">
                <div className="card-details-container-card">
                    <CardPallette cardDetailsRowModel={cardList[cardIndex]} />
                </div>

                <div className="card-details-row-1">
                    <div className="card-details-pay-now-wrapper">
                        <RoundIconButton icon={faBolt} text="Pay Now" iconBackground="#1924c2" backgroundColor="#334ee3" textColor="#FFF" iconColor="#ffbf00" />
                    </div>

                    <div className="card-details-remove-card-wrapper">
                        <RoundIconButton icon={faMinus} text="Remove" iconBackground="#1924c2" backgroundColor="#334ee3" textColor="#FFF" iconColor="#FF8C00" />
                    </div>
                </div>
                <div className="card-details-container-list-wrapper">
                    <div className="card-details-container-list">
                        {
                            cardList.map((cardModel, index) => {
                                return (
                                    <div onClick={() => setCardIndex(index)}>
                                        <CardDetailsRow cardDetailsRowModel={cardModel} deleteCard={undefined} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="card-details-container-add-card" onClick={showAddCardPopupHandler}>
                    <FontAwesomeIcon className="card-details-container-add-card-icon" icon={faPlusCircle} style={{ color: COLORS.textSecondary }} />
                    <label className="card-details-container-add-card-text" style={{ color: COLORS.textSecondary }}>Add Card</label>
                </div>

                {addCardPopup && <AddCardForm addCardPopup={addCardPopup} closePopup={closeAddCardPopupHandler} saveCardHandler={addCardHandler} />}

            </div>
        </div>
    )
}

export default CardDetailsContainer;