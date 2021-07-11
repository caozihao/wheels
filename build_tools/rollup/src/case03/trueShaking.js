/*
 * @Author: caozihao
 * @Date: 2021-07-10 19:46:32
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-10 21:42:53
 */

// import { add, xx } from './add';  => imports=["add","add"]

const add = (a, b) => a + b;

console.log(add(2, 4)); //被调用


// TODO 函数同名怎么判断 => 根据JS作用域(模拟一个作用域)