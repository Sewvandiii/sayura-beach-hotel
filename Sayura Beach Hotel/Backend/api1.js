const express = require('express');
module.exports = function (app) {
    var data = [{ item: 'item1' }, { item: 'item2' }, { item: 'item3' }];

    app.get('/getUsers1', function (req, res) {
        res.json([data]);
    });

    app.get('/searchUsersById', function (req, res) {
        console.log('sample123');
        // res.render('todo', { todos: data });
    });

    app.post('/todo', function (req, res) {

    });

    app.delete('/todo', function (req, res) {

    });
};