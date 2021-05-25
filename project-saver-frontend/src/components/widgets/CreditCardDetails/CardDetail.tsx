
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import './creditCardStyles.css'
import { CardModel } from '../models/CardModel';
import DeleteIcon from '@material-ui/icons/Delete'
import BankLogo from './BankLogo'
import InfoPair from '../InfoPair/InfoPair'
import { DUE_AMOUNT, DUE_DATE } from '../../../constants/CreditCardData'


const Carddetail = (props: { card: CardModel }) => {
    return (
        <div className="card-detail">
            <BankLogo bank={props.card.bank} />
            <div > <InfoPair value1={props.card.bank} value2={props.card.cardNumber} /></div>
            <div ><InfoPair value1={DUE_DATE} value2={props.card.dueDate} /></div>
            <div ><InfoPair value1={DUE_AMOUNT} value2={props.card.dueAmount} /></div>
            <div ><CardActions><Button variant="contained" color="primary">Pay now</Button></CardActions></div>
            <div> <CardActions><Button startIcon={<DeleteIcon />}></Button></CardActions></div>
        </div>
    )
}

export default Carddetail;