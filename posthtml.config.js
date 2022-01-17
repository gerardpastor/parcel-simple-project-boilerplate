const locals = {
  site: {
    lang: "en",
    title: "My Project",
  },
};

const root = "./src";
const expressions = require("posthtml-expressions");

module.exports = {
  plugins: {
    "posthtml-extend": {
      root,
      plugins: [expressions({ locals })],
    },
    "posthtml-modules": { root },
    "posthtml-include": { root },
    "posthtml-expressions": { locals },
  },
};
