import execa from 'execa';
import executable from 'executable';

const binCheck = (bin, args) => {
	if (!Array.isArray(args)) {
		args = ['--help'];
	}

	return executable(bin)
		.then(works => {
			if (!works) {
				throw new Error(`Couldn't execute the "${bin}" binary. Make sure it has the right permissions.`);
			}

			return execa(bin, args);
		})
		.then(result => result.exitCode === 0);
};

binCheck.sync = (bin, args) => {
	if (!Array.isArray(args)) {
		args = ['--help'];
	}

	if (!executable.sync(bin)) {
		throw new Error(`Couldn't execute the "${bin}" binary. Make sure it has the right permissions.`);
	}

	return execa.sync(bin, args).exitCode === 0;
};

export default binCheck;
