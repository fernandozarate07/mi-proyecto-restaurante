const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Asegúrate de haberlo instalado

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Necesario para webpack-dev-server
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Carpeta que se servirá
    },
    compress: true, // Activa la compresión
    port: 8080, // Puedes cambiar el puerto si lo deseas
    open: true, // Abre automáticamente el navegador
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html', // Cambia a la ruta de tu archivo
      filename: 'index.html', // El nombre del archivo HTML que se generará
    }),
  ],
};
