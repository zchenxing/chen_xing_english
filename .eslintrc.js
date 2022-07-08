// const { getESLintConfig } = require('@iceworks/spec');
// module.exports = getESLintConfig('react-ts');


module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": 'module',
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    // "plugins": ["@typescript-eslint", "react", "prettier"],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "no-extra-semi": 2, // 禁止不必要的分号
        "no-unused-vars": 0, // 不允许未定义的变量
        "jsx-control-statements/jsx-use-if-tag": 0,
        "no-control-regex": 0, // 正则表达式中是否出现控制字符。
        "react/prop-types": 0, // 禁用文件中的 react/prop-types 规则
        "no-useless-escape": 0, // 禁用不必要的转义
    }
};
