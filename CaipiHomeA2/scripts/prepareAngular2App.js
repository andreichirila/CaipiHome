const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
    console.log('Building Angular 2 application into "./www" directory.');
    const basePath = context.opts.projectRoot;
    const baseWWW = basePath + '/www';

    console.log(execSync(
      "ng build --output-path CaipiHomeA2/www/ --base-href .",
      {
        maxBuffer: 1024*1024,
        cwd: basePath + '/..'
      }).toString('utf8')
    );

  var files = fs.readdirSync(baseWWW)
    for (var i = 0; i < files.length; i++) {
      if (files[i].endsWith('.gz')) {
        fs.unlinkSync(baseWWW + '/' + files[i]);
      }
    }

     console.log(execSync(
       "scp -r src/extern/ CaipiHomeA2/www/",
       {
          maxBuffer: 1024*1024,
          cwd: basePath + '/..'
       }).toString('utf8')
     );

     console.log(execSync(
       "scp -r src/dummyJSON/ CaipiHomeA2/www/",
       {
          maxBuffer: 1024*1024,
          cwd: basePath + '/..'
       }).toString('utf8')
     );

  /*var files = fs.readdirSync(baseWWW)
    for (var i = 0; i < files.length; i++) {
        var fullfilename = baseWWW + '/' + files[i];
        console.log(fullfilename);
        replace({
    //regex: "/assets/",
    //replacement: "assets/",
    paths: [fullfilename],
    recursive: true,
    silent: true,
});
    }*/
};
