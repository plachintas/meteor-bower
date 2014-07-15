Package.describe({
  summary: "Use Bower packages in your Meteor app",
  version: "0.1.8"
});

Package._transitional_registerBuildPlugin({
  name: "bower",
  use: [
    "meteor",
    "underscore",
  ],
  sources: [
    "plugin/bower.js",
    "plugin/handler.js",
  ],
  npmDependencies: {
    "bower": "1.3.8",
    "glob": "3.2.9"
  }
});

// XXX Tests?
