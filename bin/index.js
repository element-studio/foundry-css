const makeDir = require('make-dir');
const ncp = require('ncp').ncp;
const program = require('commander');

program
	.version('0.0.1')
	.option('-p, --path [path]','An optional path to scaffold Foundry into')
	.parse(process.argv);

	if(program.path) {
		console.log('Scaffold Foundry in '+ program.path);
	} else {
		console.log('Scaffold Foundry in the default folder');
	}

	(async () => {
		await makeDir(program.path);

		ncp('templates',program.path,function(err) {
			if(err) {
				return console.error(err);
			}
			console.log('done!');
		})
	})();
