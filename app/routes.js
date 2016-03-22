//TODO: change form elements as desired:
var Record = require('./models/record');

function getRecords(res) {
    Record.find(function (err, records) {
        if (err) {
            res.send(err);
        }
        res.json(records);
    });
};

module.exports = function (app) {

    //api
    //get all records
    app.get('/api/records', function (req, res) {
        getRecords(res);
    });

    // create record
    app.post('/api/records', function (req, res) {
        //create a record, information comes from AJAX request from Angular
        Record.create({
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year,
            done: false
        }, function (err, record) {
            if (err)
                res.send(err);
            getRecords(res);
        });
    });

    // delete a record
    app.delete('/api/records/:record_id', function (req, res) {
        Record.remove({
            _id: req.params.record_id
        }, function (err, record) {
            if (err)
                res.send(err);
            getRecords(res);
        });
    });

    //load static index page
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
