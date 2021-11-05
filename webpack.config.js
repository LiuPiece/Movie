const webpack = require("webpack");

module.exports = {

    entry: './index.js',

    output: {

        path: path.join(__dirname, './dist'),

        publicPath: '/dist/',

        filename: 'index.js'

    },

  plugins: [

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "windows.jQuery": "jquery"

        })

    ]

} 


// module.exports = {

//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       '@': resolve('src'),
//       'jquery': 'jquery' //这里是增加的
//     }
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery",
//       "windows.jQuery": "jquery"//这里是增加的
//     })
//   ],

// }

