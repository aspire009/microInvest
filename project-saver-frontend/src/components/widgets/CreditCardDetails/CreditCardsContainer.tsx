
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import Carddetail from './CardDetail';
import './creditCardStyles.css'
import Card from '@material-ui/core/Card'
import CreditCardIcon from '../../../assets/images/credit-card.svg'
import { CARDS } from '../../../constants/CreditCardData'


const CreditCardsContainer = () => {
    const creditCards = CARDS;
    return (
        <Card>
            <div className="credit-card-header">
            <img className="credit-card-icon" src={CreditCardIcon} />
            <label className="credit-card-title">Credit Cards</label>
            </div>
            <List>
                {creditCards.map((card) => {
                    return (<CardContent className="cards">
                        <Carddetail card={card} />
                    </CardContent>)
                })}
            </List>
        </Card>
    )
}

export default CreditCardsContainer;