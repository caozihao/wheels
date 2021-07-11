/*
 * @Author: caozihao
 * @Date: 2021-07-11 20:26:51
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 21:14:35
 */

const acorn = require('acorn');

const code = `
import { a } from "./foo";
console.log("Hello" + a);
console.log("World");
export const b = 1;
`;

// 生成抽象语法树
let ast = acorn.parse(code, {
	locations: true, //索引位置
	ranges: true,
	sourceType: 'module',
	ecmaVersion: 7,
});

// 提供访问者

console.log('ast=>', ast);
