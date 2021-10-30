const moment = require('moment');

// convert object's date format for/from database's format
const formatOp = (ope) => {
    if (!ope) {
        return null;
    }

    const formatedDate = moment(ope.date).format('YYYY-MM-DD');
    return { ...ope, date: formatedDate };
}

module.exports = {    
    convertDB: ope => formatOp(ope),
    convertListDB: list => list.map(ope => formatOp(ope)),
}