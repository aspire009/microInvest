import Backdrop from './BackDrop'
import Modal from './Model'

const DeletePopup = (props:{deletePopup:boolean, closeDeletePopup: () => void}) => {
return (<div>
    {props.deletePopup && <Backdrop onClick={props.closeDeletePopup} />}
            {props.deletePopup && <Modal text='Are you sure?' onClose={props.closeDeletePopup} />}
</div>)
}

export default DeletePopup;