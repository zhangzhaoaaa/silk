const utils = require("./utils/all");
module.exports = [
  {
    type: "confirm",
    name: "publish",
    message: "请确认是否将组件发布到规范站点"
  },
  {
    type: "input",
    name: "category",
    message: "组件所属category"
  },
  {
    type: "input",
    name: "appName",
    message: "组件英文名称"
  },
  {
    type: "input",
    name: "chineseName",
    message: "组件中文名称"
  },
  {
    type: "list",
    name: "frame",
    choices: utils.config.getChoices("frame"),
    message: "组件所属技术栈"
  },
  {
    type: "list",
    name: "platform",
    choices: utils.config.getChoices("platform"),
    message: "组件运行的终端"
  },
  {
    type: "input",
    name: "overallDesc",
    message: "组件说明"
  },
  {
    type: "input",
    name: "when2Use",
    message: "何时使用"
  },
  {
    type: "input",
    name: "developer",
    message: "开发者"
  },
  {
    type: "input",
    name: "respository",
    message: "仓库地址(请提供有效的gitlab仓库地址)"
  },
  {
    type: "input",
    name: "demoTitle",
    message: "demo标题",
    default: "基本用法"
  },
  {
    type: "input",
    name: "desc",
    message: "demo描述",
    default: "下面是如何使用组件的代码"
  }
];
