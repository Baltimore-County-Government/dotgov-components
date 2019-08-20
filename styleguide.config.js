const path = require('path');
module.exports = {
	ignore: [ '**/components/**/*.test.js', '**/components/**/index.js' ],
	usageMode: 'expand',
	require: [ path.join(__dirname, './src/dotgov.scss') ],
	styleguideDir: 'public',
	sections: [
		{
			name: 'Foundation',
			content: 'src/docs/Foundation.md',
			components: 'src/components/foundation/**/*.js'
		},
		{
			name: 'Components',
			content: 'src/docs/Components.md',
			components: 'src/components/basic/**/*.js',
			ignore: [ '**/*FormField.js' ]
		},
		{
			name: 'Template Elements',
			content: 'src/docs/TemplateElements.md',
			components: 'src/components/template/**/*.js'
		}
	]
};
