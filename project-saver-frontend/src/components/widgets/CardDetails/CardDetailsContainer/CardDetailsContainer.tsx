import { useState } from "react";
import CardDetailsRow from "../CardDetailsRow/CardDetailsRow";
import { CardDetailsRowModel } from "../CardDetailsRow/CardDetailsRowModel";
import CardPallette from "../CardPallette/CardPallette";
import { CardDetailsContainerProps } from "./CardDetailsContainerModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import './CardDetailsContainer.css'

const CardDetailsContainer: React.FC<CardDetailsContainerProps> = ({ cardDetailContainerModel }: CardDetailsContainerProps) => {
    //const [cardList, setCardList] = useState<CardDetailsRowModel[]>([]);
    const [cardIndex, setCardIndex] = useState(0);

    const cardList: CardDetailsRowModel[] = [
        { bankName: 'Citi Bank', cardNumber: '1234 **** **** 6789', dueAmount: '3,200.98', dueDate: '30 May 2021' },
        { bankName: 'Bank of America', cardNumber: '3456 **** **** 0987', dueAmount: '1,220.08', dueDate: '27 May 2021' },
        { bankName: 'Chase Bank', cardNumber: '8821 **** **** 3429', dueAmount: '2,510.21', dueDate: '31 May 2021' }
    ];

    return (
        <div className="card-details-container-main">
            <label className="card-details-container-heading" style={{ color: COLORS.textPrimary }}>Credit Cards</label>

            <div className="card-details-container-content">
                <div className="card-details-container-card">
                    <CardPallette cardDetailsRowModel={cardList[cardIndex]} />
                </div>
                <div className="card-details-container-list">
                    {
                        cardList.map((cardModel, index) => {
                            return (
                                <div onClick={() => setCardIndex(index)}>
                                    <CardDetailsRow cardDetailsRowModel={cardModel} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="card-details-container-add-card">
                    <FontAwesomeIcon className="card-details-container-add-card-icon" icon={faPlusCircle} style={{ color: COLORS.textSecondary }} />
                    <label className="card-details-container-add-card-text" style={{ color: COLORS.textSecondary }}>Add Card</label>
                </div>

            </div>
        </div>
    )
}

export default CardDetailsContainer;