const Transform = {
    "addBooleanString": (array) => {
        const newArr = [];
        for (const arr of array) {
            newArr.push({
                _id: arr._id,
                action: arr.action,
                status: arr.status,
                strstatus: arr.status.toString()
            })
        }
        return newArr;
    }
};

module.exports = Transform;