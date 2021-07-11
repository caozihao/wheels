/*
 * @Author: caozihao
 * @Date: 2021-06-29 23:24:56
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 20:56:14
 */
/**
 * AST语法树遍历
 */
function walk(ast, { enter, leave }) {
	visit(ast, null, enter, leave);
}

function visit(node, parent, enter, leave) {
	if (!node) return;

	// 先执行enter
	if (enter) {
		enter.call(null, node, parent);
	}

	let childkeys = Object.keys(node).filter(
		// 判断是否是对象
		(key) => typeof node[key] === 'object'
	);

	childkeys.forEach((childKey) => {
		let value = node[childKey];
		// 如果是数组
		if (Array.isArray((val) => visit(val, node, enter, leave))) {
			value.forEach((val) => visit(val, node, enter, leave));
		} else {
			visit(value, node, enter, leave);
		}
	});

	if (leave) {
		leave(node, parent);
	}
}

module.exports = walk;
