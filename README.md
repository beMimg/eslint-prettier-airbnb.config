# eslint-prettier-airbnb.config

ESLint, Prettier & Airbnb configuration
Make sure you have JSON file on your project
npm init -y


Also run the following codes
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node


npx install-peerdeps --dev eslint-config-airbnb


Your devDependencies on package.json should now look like this:
![devDependencies](https://github.com/beMimg/eslint-prettier-airbnb.config/assets/126000960/ae3b3c5b-ac30-4d05-8da7-ccfcb5eda85a)


Create a new .prettierrc file - touch .prettierrc, and paste the following:
{ "singleQuote": true }

![prettier](https://github.com/beMimg/eslint-prettier-airbnb.config/assets/126000960/f1eaf812-ac64-4d69-9298-f78ce4463b50)


If you havent installed ESLint globally, do this. If you have, dont.
npm install eslint --global


Run this code, to create a .eslintrc file
eslint --init


After running this code, answer the questions on your console.
![eslint--init](https://github.com/beMimg/eslint-prettier-airbnb.config/assets/126000960/983c0e53-e00e-432e-a572-7cb574049559)


On .eslintrc.json, paste the following:
{ "extends": ["airbnb", "prettier"], "plugins": ["prettier"], "rules": { "prettier/prettier": "error", "no-unused-vars": "warn" }, "globals": { "document": "readonly" } }
![eslintrc](https://github.com/beMimg/eslint-prettier-airbnb.config/assets/126000960/7ffbf812-a678-4e46-9659-b891f1f73470)

