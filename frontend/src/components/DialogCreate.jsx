import { useState } from "react";

import Modal from "./Modal";

const DialogCreate = ({isOpen, onCancel, onAccept, opData}) => {
    const today = new Date().toISOString().split('T')[0];
    const [ concept, setConcept ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ day, setDay] = useState(today);
    const [ type, setType] = useState();

    const doCreate = () => {
        const createdOp = {
            date: day,
            amount,
            concept,
            type
        }
console.log(createdOp);
        onAccept(createdOp);
    };
  
    return (
        <Modal 
            isOpen={isOpen}
            title="Add operation"
            onAccept={doCreate}
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
                <li style={{padding: "15px 10px"}}>
                    <label>Type:
                        <select value={type} onChange={e => setType(e.target.value)}>
                            <option value='I'>Income</option>
                            <option value='O'>Outcome</option>
                        </select>
                    </label>
                </li>
            </ul>
        </Modal>
    );
};

export default DialogCreate;