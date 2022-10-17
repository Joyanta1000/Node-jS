var database = require('../database');
var Db = require('../dboperations');
var  sample_data = require('../sample_data');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});

router.route('/sample_data').get((request, response) => {
    // Db.getSampleData().then((data) => {
    //     response.json(data);
    // })
    var query = "SELECT * FROM sample_data ORDER BY id DESC";

    database.query(query, function (error, data) {

        if (error) {
            throw error;
        } else {
            response.json(data)
        }

    });
})

router.route('/orders/:id').get((request, response) => {
    Db.getOrder(request.params.id).then((data) => {
        response.json(data[0]);
    })
})

router.route('/orders').post((request, response) => {
    let order = {
        ...request.body
    }
    Db.addOrder(order).then(data => {
        response.status(201).json(data);
    })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);
module.exports = router;