const path = require('path');
module.exports = {
	ignore: [ '**/components/**/*.test.js', '**/components/**/index.js' ],
	usageMode: 'expand',
	require: [ path.join(__dirname, './src/dotgov.scss') ],
	styleguideDir: 'public',
	sections: [
		{
			name: 'Foundation',
			content: 'src/docs/Foundation.md'
		},
		{
			name: 'Components',
			components: 'src/components/basic/**/*.js',
			ignore: [ '**/*FormField.js' ]
		},
		{
			name: 'Template Elements',
			components: 'src/components/template/**/*.js'
		}
	]
};
