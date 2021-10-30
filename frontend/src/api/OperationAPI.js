import API from './api';

const api = {
    getRecentOp: () => {
        return API.get("/operations?limit=10");
    },
    getAllOp: () => {
        return API.get("/operations");
    },
    newOp: (op) => {
        if (!op) {
            throw new Error(`Invalid Operation object`);
        }

        return API.post("/operations", op);
    },
    deleteAll: () => {
        return API.delete("/operations");
    },
    getOp: (id) => {
        if (isNaN(id)) {
            throw new Error(`Invalid Operation ID`);
        }

        return  API.get("/operations/" + id);
    },
    updateOp: (op) => {
        if (!op) {
            throw new Error(`Invalid Operation object`);
        }

        return API.put("/operations/" + op.id, op);
    },
    deleteOp: (id) => {
        if (isNaN(id)) {
            throw new Error(`Invalid Operation ID`);
        }

        return  API.delete("/operations/" + id);
    }
}

export default api;