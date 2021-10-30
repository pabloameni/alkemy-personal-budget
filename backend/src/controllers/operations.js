const dbPool = require('../databases/db');

const error_handler = (err, res) => {
    console.log(err);
    res.status(500).json({ error: `Error code: ${err.code}` });
}

module.exports = {
    //GET '/api/operations'
    getAll: (req, res, next) => {
        const { limit, offset } = req.query;
        const values = [];

        let stm = "SELECT * FROM operations ORDER BY date DESC ";
        if (limit) {
            stm +=  "LIMIT ? ";
            values.push(parseInt(limit));

            if (offset) {
                stm +=  "OFFSET ? ";
                values.push(parseInt(offset));
            }
        }

        dbPool.p_query(stm, values)
            .then(results => res.json(results))
            .catch(err => error_handler(err, res));
    },

    //POST '/api/operations'
    newOp: (req, res, next) => {
        const { concept, amount, date, type } = req.body;
        const stm = 'INSERT INTO operations(concept, amount, date, type) VALUES (?,?,?,?)';

        dbPool.p_execute(stm, [concept, amount, date, type])
            .then(results => res.json({ message: "Operation created" }))
            .catch(err => error_handler(err, res));
    },

    //DELETE '/api/operations'
    deleteAll: (req, res, next) => {
        const stm = 'DELETE FROM operations';
        dbPool.p_execute(stm)
            .then(results => res.json({ message: "All operations deleted" }))
            .catch(err => error_handler(err, res));
    },

    //GET '/api/operations/:id'
    getOp: (req, res, next) => {
        id = req.params.id;

        const stm = 'SELECT * FROM operations WHERE id = ?';
        dbPool.p_query(stm)
            .then(results => res.json(results))
            .catch(err => error_handler(err, res));
    },

    //PUT '/api/operations/:id'
    updateOp: (req, res, next) => {
        const id = req.params.id;
        const { concept, amount, date } = req.body;

        const stm = 'UPDATE operations SET concept=?, amount=?, date=? WHERE id=?';
        dbPool.p_execute(stm, [concept, amount, date, id])
            .then(results => res.json({ message: "Operation updated" }))
            .catch(err => error_handler(err, res));
    },

    //DELETE '/api/operations/:id'
    deleteOp: (req, res, next) => {
        const id = req.params.id;

        const stm = 'DELETE FROM operations WHERE id = ?';
        dbPool.p_execute(stm, [id])
            .then(results => res.json({ message: "Operation deleted" }))
            .catch(err => error_handler(err, res));
    }
};
