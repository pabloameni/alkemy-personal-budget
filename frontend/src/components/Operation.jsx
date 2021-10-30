import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import DialogConfirm from './DialogConfirm';
import DialogUpdate  from './DialogUpdate';

const Operation = ({ OpData = {}, onUpdate, onDelete }) => {
    const borderColor = OpData["type"] === "I" ? "rgba(0, 255,0,.3)" : "rgba(255,0,0,.3)";

    const styles = {
        container: {
            margin: "5px",
            backgroundColor: `${borderColor}`,
            padding: "10px",
        },
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        buttons: {
            padding: "0 15px",
            cursor: "pointer",
        },
    };

    const [ isConfirmOpen, setIsConfirmOpen ] = useState(false);
    const [ isUpdateOpen, setIsUpdateOpen ] = useState(false);
    const [ opSelected, setOpSelected ] = useState(null);

    const handleUpdate = opData => {
        setOpSelected(opData);
        setIsUpdateOpen(true);
    };

    const handleDelete = opData => {
        setOpSelected(opData);
        setIsConfirmOpen(true);
    };

    const doUpdate = (opData) => {
        setIsUpdateOpen(false);
        onUpdate(opData);
    }

    const doDelete = () => {
        setIsConfirmOpen(false);
        onDelete(opSelected)
    }

    const cancelConfirmOp = () => {
        setIsConfirmOpen(false);
        setOpSelected(null);
    }

    const cancelUpdateOp = () => {
        setIsUpdateOpen(false);
        setOpSelected(null);
    }

    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <div>
                    { OpData['date'] }
                </div>
                <div>
                    ${ OpData['amount'] }
                </div>
                <div>
                    { OpData['type'] }
                </div>
                <div>
                    <span style={styles.buttons}><FaEdit  onClick={() => handleUpdate(OpData)} /></span>
                    <span style={styles.buttons}><FaTrash onClick={() => handleDelete(OpData)} /></span>
                </div>
            </div>
            <p>
                { OpData['concept'] }
            </p>
        <DialogConfirm
            isOpen={isConfirmOpen}
            bodyText="Delete the selected concept?"
            onCancel={cancelConfirmOp}
            onAccept={doDelete}
        />
        <DialogUpdate
            isOpen={isUpdateOpen}
            bodyText="Update selected concept?"
            onCancel={cancelUpdateOp}
            onAccept={doUpdate}
            opData={opSelected}
        />
        </div>
    );
}

export default Operation;