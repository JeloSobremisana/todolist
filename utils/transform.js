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
    },
    "paginationDatas": (page, limit, totalItems) => {
        const totalPages = Math.ceil(totalItems / limit);
        const skipVal = ((page - 1) * limit);
        const paginationData = [];
        for (let i = 1; i <= totalPages; i++) {
            paginationData.push({
                page: i,
                limit: limit,
                class: page == i ? 'active' : 'inactive',
            });
        }
        const previousValue = {
            class: page > 1 ? 'enabled' : 'disabled',
            page: page > 1 ? Number(page) - 1 : 1,
            limit,
        };
        const nextValue = {
            class: page == totalPages ? 'disabled' : 'enabled',
            page: page < totalPages ? Number(page) + 1 : totalPages,
            limit,
        };
        return {
            next: nextValue,
            previous: previousValue,
            paginationData,
            skipVal
        }
    },
};

module.exports = Transform;