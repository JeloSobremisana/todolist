const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    action: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    strstatus: {
        type: String,
        default: 'active'
    }
},{
    timestamps: true
});


// TodoSchema.index({ 'action' : 1 }, { unique: true });
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

module.exports.getDataByPagination = async (page, limit) => {
    const totalItems = await Todo.count();
    const totalPages = Math.ceil(totalItems/limit);
    const skipVal = ((page - 1) * limit);
    const paginationData = [];
    for (let i = 2; i <= totalPages; i++ ) {
        paginationData.push({
            page: i,
            limit: limit
        });
    }

    const result = await Todo.find({}, {
        _id: 1,
        action: 1,
        status: 1,
        // createdAt: 1,
        // updatedAt: 1,
    }).sort({
        updatedAt: -1,
        strstatus: -1
    }).skip(skipVal).limit(limit);

    return {
        totalItems,
        totalPages,
        paginationData,
        data: result
    }
};

module.exports.getDataById = async (id) => {
    return await Todo.findById(id);
};

module.exports.create = async (todo) => {
    return await todo.save();
};

module.exports.updateAction = async (id, obj) => {
    return await Todo.findByIdAndUpdate(id, obj);
};

module.exports.delete = async (id) => {
    return await Todo.findByIdAndDelete(id);
};


