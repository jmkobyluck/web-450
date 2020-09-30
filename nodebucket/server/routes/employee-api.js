// /*
// ============================================
// ; Title: Nodebucket
// ; Author: Professor Krasso
// ; Modified By: Jonathan Kobyluck
// ;===========================================
// */

const express = require("express");
const Employee = require("../models/employee");

const router = express.Router();

/**
 * findEmployeeById
 */
router.get("/:empId", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, function (err, employee) {
      if (err) {
        console.log(err);
        res.status(500).send({
          message: "Internal server error!",
        });
      } else {
        /**
         * If the are no database level errors, return the employee object
         */
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
 * findAllTasks
 */

router.get("/:empId/tasks", async (req, res) => {
  try {
    Employee.findOne(
      {
        empId: req.params.empId,
      },
      "empId todo done",
      function (err, employee) {
        if (err) {
          console.log(err);
          res.status(500).send({
            message: "Internal Server Error!",
          });
        } else {
          console.log(employee);
          res.json(employee);
        }
      }
    );
  } catch (e) {
    res.status(500).send({
      message: "Internal Server Error!",
    });
  }
});

module.exports = router;
