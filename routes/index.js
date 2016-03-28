
/*
 * GET home page.
 */
var mongoose = require( 'mongoose' );
var Fresh     = mongoose.model( 'Fresh' );

exports.index = function(req, res){
  Fresh.find( function ( err, freshs, count ){
    res.render( 'index', {
        title : 'Fresh',
        freshs : fresh
    });
    });
};

exports.register = function ( req, res ){
    console.log(req.body);
    new Fresh({
    device_id    : req.body.device_id,
    user_id   : req.body.user_id,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};
