module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
