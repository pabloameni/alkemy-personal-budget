import { FaEdit, FaTrash } from 'react-icons/fa';

const Operation = ({ OpData = {}, onUpdate, onDelete }) => {
    const borderColor = OpData["type"] === "I" ? "rgba(0, 255,0,.3)" : "rgba(255,0,0,.3)";

    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "10px",
            margin: "5px",
            backgroundColor: `${borderColor}`,
        }
    };

    return (
        <div style={styles.container}>
            <div>
                { OpData['date'] }
            </div>
            <div>
                { OpData['concept'] }
            </div>
            <div>
                ${ OpData['amount'] }
            </div>
            <div>
                { OpData['type'] }
            </div>
            <div>
                <FaEdit onClick={() => console.log("Hola")} />
            </div>
            <div>
                <FaTrash onClick={() => console.log("Hola")} />
            </div>
        </div>
    );
}

export default Operation;