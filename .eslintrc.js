module.exports = {
  extends: "@mate-academy/eslint-config",
  env: {
    jest: true,
  },
  rules: {
    "no-proto": 0,
    quotes: [2, "double"],
    "operator-linebreak": ["error", "after"],
  },
  plugins: ["jest"],
};
