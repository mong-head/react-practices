const { response } = require('express');
const model = require('../models/kanban');

module.exports = {
    readAllCards: async function(req, res, next) {
        try {
            const results = await model.findAllCards();
            res
                .status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
          next(err);
        }       
    },
    createTask: async function(req,res,next) {
        try{
            const task = req.body;
            const cardNo = req.params['cardNo'];

            // model/insertTask(...) 성공했다고 치고!
            task.no = Date.now();
            res
                .status(200)
                .send({
                    result: 'success',
                    data: task,
                    message: null
                });
        } catch(err){
            next(err);
        }
    }
}