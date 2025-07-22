import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: [
      "react",
      "react-refresh",
      "react-hooks",
      "jsx-a11y",
      "prettier",
      "import",
    ],
    rules: {
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "off",
    },
  },
]);
