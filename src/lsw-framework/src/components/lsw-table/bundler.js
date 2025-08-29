const fs = require("fs");
const { resolve } = require(__dirname + "/bundler.utils.js");

// 1. Bundle components:
require(resolve("dev/bundlers/core/vuebundler.js")).bundle({
  list: __dirname + "/bundlelist.components.js",
  module: true,
  id: "Lsw_form_controls_components",
  output: __dirname + "/lsw-table.components.js",
  ignore: [],
});

// 2. Bundle js:
require(resolve("dev/bundlers/core/htmlbundler.js")).bundle({
  list: __dirname + "/bundlelist.js.js",
  module: true,
  id: "Lsw_form_controls_js",
  output: __dirname + "/lsw-table.js",
  ignore: [],
  wrap: false,
});

// 3. Bundle css:
require(resolve("dev/bundlers/core/htmlbundler.js")).bundle({
  list: __dirname + "/bundlelist.css.js",
  module: false,
  id: "Lsw_form_controls_css",
  output: __dirname + "/lsw-table.css",
  ignore: [],
  wrap: false,
});

Set_license: {
  const package = require(__dirname + "/package.json");
  const prependFileSync = (file, text, encode = "utf8") => fs.writeFileSync(file, text + fs.readFileSync(file).toString(), "utf8");
  const licenseSource = fs.readFileSync(__dirname + "/LICENSE.md").toString();
  prependFileSync(__dirname + "/lsw-table.css", licenseSource, "utf8");
  prependFileSync(__dirname + "/lsw-table.js", licenseSource, "utf8");
}