import Operation from './Operation';

const ListOperation = ({listOp, onUpdate, onDelete}) => {

    return (
        <div>
          {
            listOp.map(op => {
              return <Operation OpData={op} onUpdate={onUpdate} onDelete={onDelete} />
            })
          }
        </div>
    );
}

export default ListOperation;