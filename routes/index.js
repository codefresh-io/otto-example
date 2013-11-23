
/*
 * GET home page.
 */
var mongoose = require( 'mongoose' );
var Moble     = mongoose.model( 'Moble' );

exports.index = function(req, res){
  Moble.find( function ( err, mobles, count ){
    res.render( 'index', {
        title : 'Moble',
        mobles : mobles
    });
    });
};

exports.register = function ( req, res ){
  new Moble({
    device_id    : req.body.device_id,
    user_id   : req.body.user_id,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};
