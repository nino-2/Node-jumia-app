const statesData = require("../states.json");

const getStates = (req, res) => {
  res.json(statesData);
};
const getCityState = (req, res) => {
  const stateName = req.params.state;
  console.log("Received state", stateName);
  const state = statesData.states.find((s) => s.name === stateName);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  res.json({ state: state.name, cities: state.cities });
};

module.exports = { getStates, getCityState };
