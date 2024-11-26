import js from "@eslint/js";
import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    files: ["**/*.js", "**/*.mjs"],
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
