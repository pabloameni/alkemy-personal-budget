module.exports = {
    //GET '/api/operations'
    getAll: (req, res, next) => {
        res.json({ message: "GET: all operation" });
    },

    //POST '/api/operations'
    newOp: (req, res, next) => {
        res.json({ message: "POST: new operation" });
    },

    //DELETE '/api/operations'
    deleteAll: (req, res, next) => {

        res.json({ message: "DELETE: all operation" });
    },

    //GET '/api/operations/:id'
    getOp: (req, res, next) => {
        id = req.params.id;

        res.json({ message: `GET: id ${id}` });
    },

    //PUT '/api/operations/:id'
    updateOp: (req, res, next) => {
        id = req.params.id;

        res.json({ message: `PUT: id ${id}` });
    },

    //DELETE '/api/operations/:id'
    deleteOp: (req, res, next) => {
        id = req.params.id;

        res.json({ message: `DELETE: id ${id}` });
    }
};
