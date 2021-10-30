const styles = {
    title: {
        margin: "0 auto",
    },
    main: {
        minWidth: "300px",
        maxWidth: "400px",
        border: "3px solid lightgray",
        padding: "15px",
        margin: "10px auto",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    totalIn: {
        color: "green",
    },
    totalOut: {
        color: "red",
    },
    balance: {
        fontSize: "20px",
    }
};

const Balance = ({totalIncomes = 0, totalOutcomes = 0}) => {
    return (
        <section style={{...styles.col, ...styles.main}}>
                <h2 style={styles.title}>Balance</h2>
                <div style={styles.row}>
                    <span>Total Incomes:</span>
                    <span style={styles.totalIn}>${ totalIncomes }</span>
                </div>
                <div style={styles.row}>
                    <span>Total Outcomes:</span>
                    <span style={styles.totalOut}>${ totalOutcomes }</span>
                </div>
                <hr />
                <div style={styles.row}>
                    <span style={styles.balance}>Balance:</span>
                    <span style={styles.balance}>${ totalIncomes - totalOutcomes }</span>
                </div>
        </section>
    );
}

export default Balance;