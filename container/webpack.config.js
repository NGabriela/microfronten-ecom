const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', //not used in the case of the container
            filename: 'remoteEntry.js',
            remotes: {products: 'products@http://localhost:8081/remoteEntry.js'}
            /** products key is referenced by products/ProductsIndex,
             * products inside the string matches the name in products web.config
             * url for remote entry file*/
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })]
}