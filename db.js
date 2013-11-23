var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Moble = new Schema({
    user_id    : String,
    device_id  : String,
    updated_at : Date
});
 
mongoose.model( 'Moble', Moble );
 
mongoose.connect( 'mongodb://localhost/express-todo' );
