var path =require('path');

module.exports = {
    entry: "./app/app.jsx", // входная точка - истодный файл
    output:{
        path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js" // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        port: 8081,
        open: true
    },
    module:{
        rules:[     //загрузчик для jsx
            {
                text: /\.jsx?$/, // определяем тип фалов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: "babel-loader", // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"] // используемые плагины
                }
            }

        ]
    }

}