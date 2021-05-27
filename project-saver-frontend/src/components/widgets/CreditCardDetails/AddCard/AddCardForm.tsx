
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './addCard.css';
import Backdrop from '../DeletePopup/BackDrop'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AddCardForm = (props: { addCardPopup: boolean, closePopup: () => void }) => {
    const classes = useStyles();
    return (
        <div>
            {props.addCardPopup && <Backdrop onClick={props.closePopup} />}
            <div className='modal'>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="card-number" variant="outlined" />
                    <TextField id="outlined-basic" label="card-holder-name" variant="outlined" />
                    <TextField id="outlined-basic" label="expiry" variant="outlined" />
                    <TextField id="outlined-basic" label="cvv" variant="outlined" />

                    <button className='btn --alt' onClick={() => { }}>Add</button>
                    <button className='btn' onClick={props.closePopup}>Cancel</button>

                </form>
            </div>
        </div>

    );
}

export default AddCardForm;