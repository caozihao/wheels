/*
 * @Author: caozihao
 * @Date: 2021-07-11 20:51:01
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 21:08:11
 */

describe('AST Walk函数', () => {
	test('单个节点', () => {
		const ast = {
			a: '1',
		};
		const mockEnter = jest.fn();
		const mockLeave = jest.fn();
		// 实现一个访问者方法
		const walk = require('../../../prototype/acorn/walk');
		//进去和出来都要访问
		walk(ast, {
			enter: mockEnter,
			leave: mockLeave,
		});
		let calls = mockEnter.mock.calls;

		expect(calls.length).toBe(1);
		expect(calls[0][0]).toEqual({ a: '1' });
		calls = mockLeave.mock.calls;

		expect(calls.length).toBe(1);
		expect(calls[0][0]).toEqual({ a: '1' });
	});

	test('数组节点', () => {
		// 访问3次，第一次:a，第二次:[{}]，第三次:b:2
		const ast = {
			a: [{ b: '2' }],
		};
		const mockEnter = jest.fn();
		const mockLeave = jest.fn();

		const walk = require('../../../prototype/acorn/walk');
		walk(ast, {
			enter: mockEnter,
			leave: mockLeave,
		});
		let calls = mockEnter.mock.calls;

		expect(calls.length).toBe(3);
		expect(calls[0][0]).toEqual({ a: [{ b: '2' }] });
		expect(calls[1][0]).toEqual([{ b: '2' }]);
		expect(calls[2][0]).toEqual({ b: '2' });

		calls = mockLeave.mock.calls;

		expect(calls.length).toBe(3);
		expect(calls[0][0]).toEqual({ b: '2' });
		expect(calls[1][0]).toEqual([{ b: '2' }]);
		expect(calls[2][0]).toEqual({ a: [{ b: '2' }] });
	});
});
