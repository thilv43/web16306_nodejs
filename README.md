1. npm i --save-dev babelcli babel-preset-env babel-preset-stage-0
2. creat file .babelrc <br/>
    `
        {
            "preset": ["env", "stage-0]
        }
    `
3.package.json
"script": "nodemon ./src/app.js --exec babel-node -e js"

nếu lỗi babel-node
npm i -g babel-node