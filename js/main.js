require.config({
  paths: {
    underscore: "lib/underscore/underscore",
    jquery: "lib/jquery/jquery",
    postal: "lib/postal/postal",
  },
  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    }
  },
  map: {
      // '*' means all modules will get 'jquery-private'
      // for their 'jquery' dependency.
      '*': { 'jquery': 'jquery-private' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      'jquery-private': { 'jquery': 'jquery' }
    }
});

require(
['gameframe'], function ( GameFrame ){
  game = new GameFrame();
  game.config({
    framerate: 60
  });
  game.launch();
});