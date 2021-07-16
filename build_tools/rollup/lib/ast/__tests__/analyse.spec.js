/*
 * @Author: caozihao
 * @Date: 2021-07-11 20:51:01
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-16 15:14:32
 */
const analyse = require("../analyse");
describe("AST Analyse方法", () => {
  it("空语法树", () => {
    const ast = {
      body: [],
    };

    analyse(ast);
  });
});
