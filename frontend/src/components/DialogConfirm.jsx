import Modal from "./Modal";

const DialogConfirm = ({isOpen, onCancel, onAccept, bodyText}) => {
    return (
        <Modal 
            isOpen={isOpen}
            title="Please confirmation action"
            onAccept={onAccept}
            onCancel={onCancel}
        >
            <p>{ bodyText }</p>
        </Modal>
    );
};

export default DialogConfirm;