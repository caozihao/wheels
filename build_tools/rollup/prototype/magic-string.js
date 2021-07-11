/*
 * @Author: caozihao
 * @Date: 2021-07-11 19:27:23
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 19:56:54
 */
const MagicString = require('magic-string');
const s = new MagicString('export var answer = 55');

// 裁剪0-7字符串
// console.log('s=>', s.snip(0, 7).toString());

// 缝合
const bundle = new MagicString.Bundle();

// 连接多个源
bundle.addSource({
	filename: 'foo.js',
	content: new MagicString('var answer = 42'),
});

bundle.addSource({
	filename: 'bar.js',
	content: new MagicString('console.log( answer )'),
});

// console.log(bundle.toString()); 

// 生成sourceMap
var map = bundle.generateMap({
	// 源映射的文件名
	file: 'bundle.js',
	// 包含原始内容
	includeContent: true,
	// 是否采用用分辨率，能够精确定位函数调用等的确切位置
	hires: true,
});

console.log('map', map);
