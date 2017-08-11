//Your MLAB database should be here 

var mongoose = require('mongoose')
var connection = mongoose.connection
//mongodb://student:student@ds153709.mlab.com:53709/bookmarks
mongoose.connect('mongodb://student:student@ds111559.mlab.com:11559/todos', {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
})

connection.on('error', (err) => {
    console.log('Mlab Error', err)
})

connection.once('open', () => {
    console.log('Connected to mlab')
})