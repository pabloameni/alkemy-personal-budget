import { FaEdit, FaTrash } from 'react-icons/fa';

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

    const handleUpdate = op => op => onUpdate && onUpdate(op);
    const handleDelete = op => op => onDelete && onDelete(op);

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
                    <span style={styles.buttons}><FaEdit  onClick={handleUpdate(OpData)} /></span>
                    <span style={styles.buttons}><FaTrash onClick={handleDelete(OpData)} /></span>
                </div>
            </div>
            <p>
                { OpData['concept'] }
            </p>
        </div>
    );
}

export default Operation;