import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
        react: {
            version: "detect"
        }
    }
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'no-unused-vars': ['error', { 'varsIgnorePattern': '^[A-Z_]' }],
      'react/prop-types': 'off', // Menonaktifkan aturan prop-types jika tidak menggunakan TypeScript
      'react/react-in-jsx-scope': 'off' // Tidak perlu import React di scope pada versi React baru
    }
  }
];