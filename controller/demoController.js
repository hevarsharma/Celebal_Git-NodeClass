const con = require('../dbConfig');

const getdata = async (req, res) => {
    con.query('select * from studentdemo', function (err, result, feild) {
        if(err) {
            res.send({
                statusCode: 400,
                message: err
            })
        }
        else {
            res.send({
                statusCode: 200,
                message: result
            })
        }
    }) 
}

const postdata = async (req, res) => {
    let name = req.body.name;
    con.query(`INSERT INTO studentdemo (name) VALUES ('${name}')` , function(err, result) {
        if(err) {
            res.send({
                statusCode: 400,
                message: err
            })
        } else{
            res.send({
                statusCode: 200,
                message:"Data inserted successfully"
            })
        }
    })
}

const updatedata = async (req, res) => {
    let nam = req.params.name;
    let name = req.body.name;
    console.log()
    con.query(`UPDATE studentdemo SET name = '${name}' WHERE name = '${nam}'`, function (err, result) {
        if(err) {
            res.send({
                statusCode: 400,
                message: err
            })
        } else {
            res.send({
                statusCode: 200,
                message: "Data updated successfully"
            })
        }
    })
}

const deletedata = async (req, res) => {
    let nam = req.params.name;
    con.query(`DELETE FROM studentdemo WHERE name = '${nam}'`, function (err, result) {
        if(err) {
            res.send({
                statusCode: 400,
                message: err
            })
        } else {
            res.send({
                statusCode: 200,
                message: "Data delete successfully"
            })
        }
    })
}

module.exports = { getdata , postdata, updatedata, deletedata}