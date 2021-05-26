import Button from '@material-ui/core/Button'
import './creditCardStyles.css'
import PaymentIcon from '@material-ui/icons/Payment';

const PayButton = () => {
    return (
        <Button startIcon = {<PaymentIcon/>} variant="outlined" color="primary">Pay now</Button>
    )
}

export default PayButton;