import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './addCard.css';
import Backdrop from '../DeletePopup/BackDrop'
import { CardModel } from '../../models/CardModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../../../../constants/NewColorScheme';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



const AddCardForm = (props: { addCardPopup: boolean, closePopup: () => void, saveCardHandler: (card: CardModel) => void }) => {

    const newCard: CardModel = {
        id: 1,
        bank: "",
        cardHolder: "",
        cardNumber: "",
        cvv: "",
        dueAmount: 0,
        dueDate: "",
        expiry: ""
    }
    const [card, setCard] = React.useState<CardModel>(newCard);

    const cardHolderChangeHandler = (event) => {
        setCard({
            ...card,
            cardHolder: event.target.value
        })
    }
    const cvvChangeHandler = (event) => {
        setCard({
            ...card,
            cvv: event.target.value
        })
    }
    const cardNumberChangeHandler = (event) => {
        setCard({
            ...card,
            cardNumber: event.target.value
        })
    }
    const expiryChangeHandler = (event) => {
        setCard({
            ...card,
            expiry: event.target.value
        })
    }

    const saveCard = (card: CardModel) => {
        props.saveCardHandler(card);
        props.closePopup();
    }
    const classes = useStyles();
    return (
        <div className="add-card-form-main">
            {props.addCardPopup && <Backdrop onClick={props.closePopup} />}

            <div className='add-card-form-modal'>
                <div className="add-card-form-heading">
                    <label className="add-card-form-heading-title" style={{ color: COLORS.textPrimary }}>Add your card</label>
                    <label className="add-card-form-heading-sub-title">Fill in the details below</label>
                </div>

                <div className="add-card-form-content">
                    <div className="add-card-form-content-left">
                        <div className="add-card-form-card-data-wrapper">
                            <label className="add-card-form-field-heading">CARD NUMBER</label>
                            <input className="add-card-form-field-input" placeholder="XXXX  XXXX  XXXX  XXXX" type="text" onChange={cardNumberChangeHandler} value={card.cardNumber}></input>
                        </div>

                        <div className="add-card-form-card-data-wrapper">
                            <label className="add-card-form-field-heading">CARD HOLDER NUMBER</label>
                            <input className="add-card-form-field-input" placeholder="Name on Card" type="text" onChange={cardHolderChangeHandler} value={card.cardHolder}></input>
                        </div>

                        <div className="add-card-form-date-cvv-row">
                            <div className="add-card-form-card-data-wrapper">
                                <label className="add-card-form-field-heading">EXPIRES ON</label>
                                <input className="add-card-form-field-input" placeholder="MM/YY" type="text" onChange={expiryChangeHandler} value={card.expiry}></input>
                            </div>

                            <div className="add-card-form-card-data-wrapper">
                                <label className="add-card-form-field-heading">CVV</label>
                                <input className="add-card-form-field-input" placeholder="***" type="text" onChange={cvvChangeHandler} value={card.cvv}></input>
                            </div>
                        </div>
                    </div>

                    {/* <TextField id="outlined-basic" label="card-number" variant="outlined" onChange={cardNumberChangeHandler} value={card.cardNumber} />
                    <TextField id="outlined-basic" label="card-holder-name" variant="outlined" onChange={cardHolderChangeHandler} value={card.cardHolder} />
                    <TextField id="outlined-basic" label="expiry" variant="outlined" onChange={expiryChangeHandler} value={card.expiry} />
                    <TextField id="outlined-basic" label="cvv" variant="outlined" onChange={cvvChangeHandler} value={card.cvv} /> */}
                </div>

                <div className="add-card-form-footer">
                    <button className='btn --alt' onClick={() => saveCard(card)}>Add</button>
                    <button type='submit' className='btn' onClick={props.closePopup}>Cancel</button>
                </div>
            </div>
        </div>

    );
}

export default AddCardForm;