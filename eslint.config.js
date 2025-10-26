[
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      jsdoc: jsdoc, // Add a custom plugin
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
    },
  },
];



