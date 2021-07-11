/*
 * @Author: caozihao
 * @Date: 2021-07-10 19:46:32
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-10 21:39:15
 */

// import { add, xx } from './add';

// 收集依赖
const add = (a, b) => a + b;
// const xx = () => ''; //treeshaking

function hello() {
	return 'hello';
}

console.log(add(2, 4));
