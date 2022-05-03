const Reader = require("./lib/utils/Reader");
const ExplorersService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

// Part 2: Get explorers in node
const explorersInNode = ExplorersService.filterByMission(explorers, "node")
// console.log(explorersInNode)

// Part 3: Get the quantity of explorers in node
const explorersInNodeLength = ExplorersService.getAmountOfExplorersByMission(explorers, "node")
// console.log(explorersInNodeLength)

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorersService.getExplorersUsernamesByMission(explorers, "node")
// console.log(usernamesInNode)

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.
const explorersInNodeAndFizzTrick = explorers.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer))
// console.log(explorersInNodeAndFizzTrick)
