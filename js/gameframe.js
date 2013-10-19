define(['underscore'], function( _ ){
  var GameFrame = function () {},
  P = {};

  P.config = function (options) {
    this.caller = _.extend(this, options);
    console.log(this);
    return this;
  };

  P.launch = function () {
    return this;
  };

  GameFrame.prototype = _.extend(GameFrame.prototype, P);

  return GameFrame;
});