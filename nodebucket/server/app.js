/**
 * Require statements
 */
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const Employee = require("./models/employee");

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../dist/nodebucket")));
app.use("/", express.static(path.join(__dirname, "../dist/nodebucket")));

/**
 * Variables
 */
const port = 3000; // server port

const conn =
  "mongodb+srv://nodebucket_admin:nm8Sj3frqSmY4C3N@buwebdev-cluster-1.duvph.mongodb.net/nodebucket?retryWrites=true&w=majority";

/**
 * Database connection
 */
mongoose
  .connect(conn, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.debug(`Connection to the database instance was successful`);
  })
  .catch((err) => {
    console.log(`MongoDB Error: ${err.message}`);
  }); // end mongoose connection

/**
 * API(s) go here...
 */

/**
 * findEmployeeById
 */
app.get("/api/employees/:empId", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, function (err, employee) {
      if (err) {
        console.log(err);
        res.status(500).send({
          message: "Internal server error!",
        });
      } else {
        console.log(employee);
        res.json(employee);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

/**
 * Create and start server
 */
http.createServer(app).listen(port, function () {
  console.log(`Application started and listening on port: ${port}`);
}); // end http create server function
