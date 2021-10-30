import { useState, useEffect } from "react";

import Balance       from "./Balance";
import ListOperation from "./ListOperation";

import api from '../api/OperationAPI';

const Home = () => {
    const [list, setList ] = useState([]);

    const retrieveRecentOp = () => {
        api.getAllOp()
          .then(res => setList(res.data))
          .catch(err => console.log(err.message));
      }

    useEffect(() => {
        retrieveRecentOp();
    }, []);
 
  
    const totalIncome = list.reduce(
        (acc, curr) => curr.type === "I" ? acc + parseInt(curr.amount) : acc,
        0
    );
  
    const totalOutcome = list.reduce(
        (acc, curr) => curr.type === "O" ? acc + parseInt(curr.amount) : acc,
        0
    );

    const handleCreate = (op) => {
        api.newOp(op)
            .then(res => {
                // To retrieve the ID of newly created operation
                // FIX: send ID from backend
                retrieveRecentOp();
            })
            .catch(err => console.log(err.message));

    };

    const handleUpdate = (op) => {
        api.updateOp(op)
            .then(res => {
                const updatedList = list.map(item => item.id === op.id ? op : item);

                setList(updatedList);
            })
            .catch(err => console.log(err.message));

    };

    const handleDelete = (op) => {
        api.deleteOp(op.id)
            .then(res => {
                setList(list.filter(oneOp => oneOp.id !== op.id));
            })
            .catch(err => console.log(err.message));
    };
  
    return (
        <>
            <Balance totalIncomes={totalIncome} totalOutcomes={totalOutcome} />
            <ListOperation
                listOp={list}
                setListOp={setList}
                onCreate={handleCreate}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </>
    );
}

export default Home;