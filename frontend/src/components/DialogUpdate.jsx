import { useState, useEffect } from "react";

import Modal from "./Modal";

const DialogUpdate = ({isOpen, onCancel, onAccept, opData}) => {
    const [ concept, setConcept ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ day, setDay] = useState();

    useEffect(() => {
        if (opData) {
            setDay(opData.date);
            setAmount(opData.amount);
            setConcept(opData.concept);
        }
    }, [opData]);

    const doUpdate = () => {
        const updatedOp = {
            ...opData, 
            date: day,
            amount,
            concept,
        }

        onAccept(updatedOp);
    };
  
    return (
        <Modal 
            isOpen={isOpen}
            title="Update operation"
            onAccept={doUpdate}
            onCancel={onCancel}
        >
            <ul style={{listStyle: "none"}}>
                <li style={{padding: "15px 10px"}}>
                    <label>Concept:
                        <input
                            type='text'
                            id='concept'
                            placeholder='Add concept'
                            value={concept || ''}
                            onChange={ e => setConcept(e.target.value) }
                            required
                        />
                    </label>
                </li>
                <li style={{padding: "15px 10px"}}>
                    <label>Date:
                        <input
                            type='date'
                            placeholder='Pick date'
                            value={day || ''}
                            onChange={ e => setDay(e.target.value) }
                            required
                        />
                    </label>
                </li>
                <li style={{padding: "15px 10px"}}>
                    <label>Amount:
                        <input
                            type='number'
                            placeholder='Add amount'
                            value={amount || 0}
                            onChange={ e => setAmount(e.target.value) }
                            required
                        />
                    </label>
                </li>
            </ul>
        </Modal>
    );
};

export default DialogUpdate;