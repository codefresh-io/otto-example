var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Fresh = new Schema({
    user_id    : String,
    device_id  : String,
    updated_at : Date
});

mongoose.model( 'Fresh', Fresh );

mongoose.connect( 'mongodb://mongo/express-todo' );
