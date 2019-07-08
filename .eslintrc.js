
module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true
},
  extends: 'airbnb',
  rules: {
    "no-console": "off"
  }
};