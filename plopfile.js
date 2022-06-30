const generator = (
	/** @type {import('plop').NodePlopAPI} */
	plop,
) => {
	plop.setGenerator('package', {
		description: 'Generate package',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Provide package name',
				validate: name => {
					if (!/^[a-z]+$/.test(name)) {
						return 'Name can contain only lowercase letters';
					}

					return true;
				},
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'packages/{{name}}',
				templateFiles: 'template/**',
				base: 'template',
			},
		],
	});
};

export default generator;
