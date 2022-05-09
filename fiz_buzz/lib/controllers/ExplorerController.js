const ExplorersService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");

class ExplorerController {
  static getExplorersByMission(mission) {
    return ExplorersService.filterByMission(Reader.readJsonFile("explorers.json"), mission);
  }
  
  static getExplorersUsernamesByMission(mission) {
    return ExplorersService.getExplorersUsernamesByMission(Reader.readJsonFile("explorers.json"), mission);
  }

  static getExplorersAmonutByMission(mission) {
    return ExplorersService.getAmountOfExplorersByMission(Reader.readJsonFile("explorers.json"), mission);
  }
}

module.exports = ExplorerController;
