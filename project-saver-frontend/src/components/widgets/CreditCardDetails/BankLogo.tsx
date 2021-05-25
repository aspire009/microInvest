import BOB_LOGO from '../../../assets/images/bankLogos/BankOfBaroda.png'
import HDFC_LOGO from '../../../assets/images/bankLogos/HDFC_Bank_Logo.jpg'
import SBI_LOGO from '../../../assets/images/bankLogos/SBI_Logo.png'
import './creditCardStyles.css'
import { BANK_OF_BARODA, SBI, HDFC } from '../../../constants/CreditCardData'
const BankLogo = (props: { bank: string }) => {
    return (
        <div >
            {props.bank === BANK_OF_BARODA && <img className="bank-logo" alt={props.bank} src={BOB_LOGO}></img>}
            {props.bank === SBI && <img className="bank-logo" alt={props.bank} src={SBI_LOGO}></img>}
            {props.bank === HDFC && <img className="bank-logo" alt={props.bank} src={HDFC_LOGO}></img>}
        </div>
    )
}



export default BankLogo;