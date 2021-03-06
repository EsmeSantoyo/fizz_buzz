const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorerInMission = ExplorerController.getExplorersByMission(mission);
  response.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
  response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorerUsernameInMission = ExplorerController.getExplorersUsernamesByMission(mission);
  response.json(explorerUsernameInMission);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
  const score = request.params.score;
  const fizzbuzz = ExplorerController.applyFizzbuzzValidationInNumber(score);
  response.json(fizzbuzz);
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});
