/*
 * @Author: caozihao
 * @Date: 2021-07-10 19:50:07
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-11 19:25:56
 */
// 代码格式化
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/case02/index.js',
	output: {
		file: './dist/bundle_config.js',
		format: 'es',
	},
	plugins: [
		terser({
			output: {
				ascii_only: true, // 仅输出ascii字符
			},
			compress: {
				// 移除console.log方法
				pure_funcs: ['console.log'],
			},
		}),
	],
};
