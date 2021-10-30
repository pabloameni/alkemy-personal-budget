import { useState } from 'react';
import Operation    from './Operation';
import DialogCreate  from './DialogCreate';

const ListOperation = ({listOp, onCreate, onUpdate, onDelete}) => {
  const styles = {
    filters: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: '20px 0',
    }
  };

  const [ listMode, setListMode ] = useState('L');
  const [ isAddDialogOpen, setIsOpenAddDialog ] = useState(false);

  const doCreate = op => {
    setIsOpenAddDialog(false);
    onCreate(op);
  }

  if (!listOp || !listOp.length) {
    return null;
  }

  let showingList = [];
  switch(listMode) {
    case 'I':
      showingList = listOp.filter(op => op.type === 'I');
      break;
    case 'O':
      showingList = listOp.filter(op => op.type === 'O');
      break;
    default:
      showingList = listOp.slice(0, 10);
  };

  return (
      <div>
        <h1>Operations</h1>
        <div style={styles.filters}>
          <button onClick={() => setIsOpenAddDialog(true)}>Add Op</button>
          <button onClick={() => setListMode('L')}>Last 10</button>
          <button onClick={() => setListMode('I')}>All Incomes</button>
          <button onClick={() => setListMode('O')}>All Outcomes</button>
        </div>
        {
          
          showingList.map((op, idx) => {
            return <Operation key={idx.toString()}  OpData={op} onUpdate={onUpdate} onDelete={onDelete} />
          })
        }

        <DialogCreate isOpen={isAddDialogOpen} onAccept={doCreate} onCancel={() => setIsOpenAddDialog(false)}/>
      </div>
  );
}

export default ListOperation;