const htmlwebplugin = require('html-webpack-plugin')
const path = require('path')
const hwp = new htmlwebplugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'    
})
module.exports={
    mode:'development',
    plugins:[hwp],
    entry:{
        app:path.join(__dirname,'./src/index.js')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src'),
            '$':path.join(__dirname,'./')
        },
        extensions:['.js']
    }
}