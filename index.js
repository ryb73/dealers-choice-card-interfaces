"use strict";

let cardTypes = {};
cardTypes.Car = require("./lib/car");
cardTypes.DcCard = require("./lib/dc-card");
cardTypes.Insurance = require("./lib/insurance");

module.exports = cardTypes;