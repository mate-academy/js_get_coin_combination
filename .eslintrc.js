module.exports = {
  extends: "@mate-academy/eslint-config",
  env: {
    jest: true,
  },
  rules: {
    "no-proto": 0,
    quotes: 0,
  },
  plugins: ["jest"],
};
