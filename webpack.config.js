const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpackMerge=require("webpack-merge");

const modeConfig=env=>require(`./build-utils/webpack.${env}`)(env);
//                                estos son los defaults
module.exports = ({mode,presets}={mode:"production",presets:[]})=>{
    return webpackMerge({
            mode,
        module:{
                rules:[
                    {
                        test: /\.jpeg/,
                        use: ["url-loader"]
                    }
                    ]
        },
            output:{
                filename: "bundle.js"
            },
            plugins:[new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
        },
        modeConfig(mode)
    );
};