const {
  compilerOptions: { paths },
} = require("./tsconfig.json");

module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    // "prettier/@typescript-eslint",
    // "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: Object.entries(paths).map((el) => {
          el[1] = `./src/${el[1][0]}`;
          return el;
        }),
        extensions: [".js", ".jsx"],
      },
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    // "@typescript-eslint/explicit-function-return-type": 0,
    // "@typescript-eslint/explicit-member-accessibility": 0,
    // "@typescript-eslint/indent": 0,
    // "@typescript-eslint/member-delimiter-style": 0,
    // "@typescript-eslint/no-explicit-any": 0,
    // "@typescript-eslint/no-var-requires": 0,
    // "@typescript-eslint/no-use-before-define": 0,
    // "@typescript-eslint/no-unused-vars": [
    //   2,
    //   {
    //     argsIgnorePattern: "^_"
    //   }
    // ],
    // "no-console": [
    //   2,
    //   {
    //     allow: ["warn", "error"]
    //   }
    // ]
  },
};
