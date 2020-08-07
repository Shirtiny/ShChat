import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}></ThemeProvider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// jsconfig.json 文件说明
// {
//   //vscode配置 可以默认使用src作为根目录 可以不使用../相对路径
//   "compilerOptions": {
//     //基本路径
//     "baseUrl": "src"
//   },
//   //源代码
//   "include": ["src"],
//   //不是源代码
//   "exclude": ["node_modules", "**/node_modules/*"]
// }

// npx -p @storybook/cli sb init
// npm i -g hygen
// hygen init self
// hygen generator new component(自定文件夹)
// 配置好模版文件 component（是生成器） new（是action）
// hygen component new --name Icon(名字) （--name 可省略）


// svg create-react-app 自带配置了
// font-awesome安装： 注意是@ fort awesome
// yarn add @fortawesome/react-fontawesome
// yarn add @fortawesome/fontawesome-svg-core
// yarn add @fortawesome/free-brands-svg-icons
// yarn add @fortawesome/free-regular-svg-icons
// yarn add @fortawesome/free-solid-svg-icons