import Operation from './Operation';

const ListOperation = ({listOp, onUpdate, onDelete}) => {

    return (
        <div>
          {
            listOp && listOp.map((op, idx) => {
              return <Operation key={idx.toString()} OpData={op} onUpdate={onUpdate} onDelete={onDelete} />
            })
          }
        </div>
    );
}

export default ListOperation;