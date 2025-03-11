const express = require("express");
const stateRouter = express.Router();

const { getStates, getCityState } = require("../controllers/state.controller");

stateRouter.get("/states", getStates);
stateRouter.get("/states/:state", getCityState);

module.exports = stateRouter;
