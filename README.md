# eslint-prettier-airbnb.config

ESLint, Prettier & Airbnb configuration
Make sure you have JSON file on your project
npm init -y


Also run the following codes
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node


npx install-peerdeps --dev eslint-config-airbnb


Your devDependencies on package.json should now look like this:

Create a new .prettierrc file - touch .prettierrc, and paste the following:
{ "singleQuote": true }



If you havent installed ESLint globally, do this. If you have, dont.
npm install eslint --global


Run this code, to create a .eslintrc file
eslint --init


After running this code, answer the questions on your console.

On .eslintrc.json, paste the following:
{ "extends": ["airbnb", "prettier"], "plugins": ["prettier"], "rules": { "prettier/prettier": "error", "no-unused-vars": "warn" }, "globals": { "document": "readonly" } }


