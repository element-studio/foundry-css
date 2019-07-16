const makeDir = require('make-dir');
const ncp = require('ncp').ncp;
const program = require('commander');

const defaultPath = 'resources/scss';

program
	.version('0.0.1')
	.option('-p, --path [path]','An optional path to scaffold Foundry into')
	.parse(process.argv);

	let path = program.path || defaultPath;

	(async () => {
		await makeDir(path);

		ncp('templates',path,function(err) {
			if(err) {
				return console.error(err);
			}
			console.log('done!');
		})
	})();
