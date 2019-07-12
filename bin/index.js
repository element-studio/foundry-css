const makeDir = require('make-dir');
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
		await makeDir(program.path + '/blocks');
		await makeDir(program.path + '/components');
		await makeDir(program.path + '/forms');
		await makeDir(program.path + '/layout');
		await makeDir(program.path + '/typography');
	})();