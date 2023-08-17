const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})




// //对svg封装
// module.exports = {
//   chainWebpack(config){
//     config.module
//         //排除对于 icons 目录中 svg 文件的处理
//         .rule('svg')
//    			.exclude
//         		.add('/src/assets/img/icons')
// 		        .end()
//         //设置 svg-sprite-loader 处理 icons 目录中的 svg
//         .rule('icons')
//             .test(/\.svg$/)
//             .include
//         		.add(resolve('src/assets/img/icons'))
//             	.end()
//             .use('svg-sprite-loader')
//             	.loader("svg-sprite-loader")
//             	.options({symbolId:'icon-[name]'})
//   }
// }
