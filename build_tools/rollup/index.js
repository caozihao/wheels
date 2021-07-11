/*
 * @Author: caozihao
 * @Date: 2021-06-29 23:24:56
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 22:12:46
 */
const path = require('path');
const rollup = require('./lib/rollup');
// 入口文件的绝对路径
let entry = path.resolve(__dirname, 'src/case02/index.js');
rollup(entry, './bundle.js');
