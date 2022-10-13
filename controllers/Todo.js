const Todo = require('../models/Todo');
const Helper = require('../utils/helper');
const Transform = require('../utils/transform');

const TodoController = {
    getPaginatedData: async (req, res, next) => {
        try {
            const { page, limit } = req.query;
            let result = await Todo.getDataByPagination(page, limit);
            //  add new key with status as string to be sorted in javascript since 
            //  mongo cannot sort data by boolean
            let newResult = Transform.addBooleanString(result.data);
            //  sort data by status as a string
            newResult = newResult.sort((a,b) => { return b.strstatus.localeCompare(a.strstatus)}); 
            result.data = newResult;
            res.send(Helper.successResponse(result));
        } catch (err) {
            console.log(err);
            res.send(Helper.failedResponse(err));
        }
    },
    getDataById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Todo.getDataById(id);
            res.send(Helper.successResponse(result));
        } catch (err) {
            console.log(err);
            res.send(Helper.failedResponse(err));
        }
    },
    create: async (req, res, next) => {
        try {
            const newTodo = new Todo({
                action: req.body.action
            });
            const result = await Todo.create(newTodo);
            res.send(Helper.successResponse(result));
        } catch (err) { 
            console.log(err);
            res.send(Helper.failedResponse(err));
        }
    },
    updateAction: async (req, res, next) => {
        try {
            const { id, action } = req.body;
            const result = await Todo.updateAction(id, { action });
            res.send(Helper.successResponse(result));
        } catch (err) { 
            console.log(err);
            res.send(Helper.failedResponse(err));
        }
    },
    updateStatus: async (req, res, next) => {
        try {
            const { id, status } = req.body;
            const newStatus = status === 'true' ? false : true;
            const newStrStatus = status === 'true' ? 'inactive' : 'active';
            const result = await Todo.updateAction(id, { status: newStatus, strstatus: newStrStatus });
            res.send(Helper.successResponse(result));
        } catch (err) { 
            console.log(err);
            res.send(Helper.failedResponse(err));
        }
    },
    delete: async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Todo.delete(id);
            res.send(Helper.successResponse(result));
        } catch (err) {
            console.log(err);
            res.send(Helper.failedResponse(err));
        }
    }
};

module.exports = TodoController;