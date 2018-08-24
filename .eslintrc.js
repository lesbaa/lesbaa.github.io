module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": false,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "spread": true,
    },
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
};