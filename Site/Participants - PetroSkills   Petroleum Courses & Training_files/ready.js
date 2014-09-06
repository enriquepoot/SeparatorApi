window.ready = new ( function(){
  var _readyCheck = false;
  var _readyStack = [];
  this.Add = function( func ){
    if( _readyCheck === false ){
      _readyStack.push( func );
    }
    else{
      func();
    }
  };

  this.FireReady = function(){
    _readyCheck = true;
    for( var i = 0; i < _readyStack.length; i++ ){
      _readyStack[i]();
    }
    _readyStack = [];
  };
});
