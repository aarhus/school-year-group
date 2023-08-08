const builtEntry = require("./package.json").builtEntry;
const App = require(builtEntry).default;

module.exports = App;