/*
 * @Author: caozihao
 * @Date: 2021-07-11 20:51:01
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 22:12:23
 */
describe('AST Scope函数', () => {
	test('单节点', () => {
		/**
		 * 参考代码 两个作用域
		 * const a = '1'
		 * function() {
		 *   const b = 2
		 * }
		 */
		const Scope = require('../scope');
		const root = new Scope({});
		root.add('a');
		const child = new Scope({
			parent: root,
		});
		child.add('b');

		expect(child.findDefiningScope('a')).toBe(root);
		expect(child.cantains('a')).toEqual(true);
		expect(child.findDefiningScope('b')).toBe(child);
		expect(child.cantains('b')).toEqual(true);
	});
});
