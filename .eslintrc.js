module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Recommandations TypeScript
    'plugin:prettier/recommended',           // Intégration Prettier avec ESLint
    'prettier'                               // Désactive les règles ESLint en conflit avec Prettier
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist/**', 'node_modules/**'],
  rules: {
    // Désactive certaines règles TypeScript
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Configuration spécifique pour Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',         // Résout les erreurs liées aux fins de ligne LF / CRLF
        semi: true,                // Ajoute les points-virgules
        singleQuote: true,         // Utilise des guillemets simples
        printWidth: 80,            // Largeur maximale d'une ligne
        trailingComma: 'all',      // Virgule finale pour les objets et tableaux
        tabWidth: 2,               // Taille de l'indentation
        useTabs: false             // Utilise des espaces au lieu des tabulations
      },
    ],
  },
};
