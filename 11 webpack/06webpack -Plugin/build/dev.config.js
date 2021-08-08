const webpackMerge = require('webpack-merge')
const baseConfig =require('./base.config')

module.exports = webpackMerge(baseConfig,{
    evServer:{
        contentBase:'./dist',
        inline:true
        }
    
})