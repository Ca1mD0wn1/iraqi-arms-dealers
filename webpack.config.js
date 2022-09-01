const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');//插件==类
const CopyPlugin = require("copy-webpack-plugin");//复制文件
// __dirname :是nodeJS的全局变量，该变量表示的是，当前js文件所在的路径
console.log(__dirname);
let arr = [
    {
        html: "index.html",
        chunks: ["index"]
    },
    {
        html: "goods.html",
        chunks: ["goods"]
    },
    {
        html: "login.html",
        chunks: ["login"]
    }

]

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index//index.js",
        goods: "./src/js/goods/goods.js",
        login: "./src/js/login/login.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader?sourceMap"
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,//当图片的大小小于8KB，那就把图片转成base64，否则，输出成文件                    
                    // outputPath:'images/',//输出的文件路径
                    name: 'images/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除掉js文件
                loader: 'babel-loader',
                options: { //相关配置 可以配置在webpack.config 亦可以配置在.bablerc
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    plugins: [...arr.map(item => {
        return new HtmlWebpackPlugin({
            filename: item.html,//输出到dist的文件名(output配置项里的path下)
            template: './public/' + item.html,//要参考的html模板
            minify: {
                //是否去除空格，默认false
                collapseWhitespace: true,

                //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyCSS: true,

                //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyJS: true,

                //是否移除注释 默认false
                removeComments: true,
            },
            chunks: item.chunks,//当前html文件引入的js文件（此处的名字和entry对象的键名一样，如果不写的话，默认引入entry对象中所有的js文件
        })
    }),
    new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, "./public/images"), //开发目录下的路径
                to: "images"//发布目录下的文件夹
            }
        ],
        options: {
            concurrency: 100,//
        }
    })


    ],
    devServer: {
        port: 8082,
        open: true, //开浏览器
        inline: true,
        host: '127.0.0.1',  //主机地址
        progress: true //开启打包进度       
    }
}