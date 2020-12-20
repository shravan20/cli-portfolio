$('body').terminal({
	iam: function (name) {
		this.echo('Hello, ' + name +
			'. Welcome to GeeksForGeeks');
	},
	founder: function () {
		this.echo('Sandeep Jain');
	},
	aboutme: function () {
		this.echo('\n<ul><li>Skilled Backend Developer with the ability to learn and implement new technologies quickly.</li>' + 
		'\n\n<li>Worked on IoT technology and Web Technologies( MEAN / MERN )</li>' +
		'\n<li>Currently working and exploring React with Redux Architecture and Express Framework, along with TypeScript.</li>' +
		'</ul>',
		{raw:true}		
		);
	},
	more: function () {
		this.echo('\n These are commands available: \n');
		this.echo('aboutme - briefs about the author of OhMyScript');
		this.echo('projects - briefs about the projects worked on');
		this.echo('contact - provides you contact details');
		this.echo('blog - click <a href="https://ohmyscript.com/" target="__blank">ohmyscript</a>',{raw:true});
		this.echo('\n');		
	},
}, {
	greetings: `\nHi there, to view all the commands in the OhMyScript CLI, type command help`
},
{
    autocompleteMenu: true,
    completion: ['foo', 'bar', 'baz']
});