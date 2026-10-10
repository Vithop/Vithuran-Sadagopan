import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid/configs/typescript";

export default tseslint.config(
  tseslint.configs.recommended,
  solid,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    ignores: ["dist/**", ".output/**", "node_modules/**"],
  }
);
