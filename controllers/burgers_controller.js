// import the express package
var express = require("express");

var path = require("path");

// Import the model.
var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.burger.findAll({})
      .then(function (dbBurger) {
        var hbsObject = {
          burger: dbBurger
        }
        console.log(hbsObject)
        res.render("index", hbsObject);
      });
  });

  app.get("/api/burgers", function (req, res) {
    db.burger.findAll({})
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  app.put("/api/burgers/:id", function (req, res) {
    db.burger.update({
      devoured: req.body.devoured,
    }, { 
        where: {
          id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
  });
};