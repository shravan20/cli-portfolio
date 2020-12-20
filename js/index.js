let about = '\n<ul><li>Skilled Backend Developer with the ability to learn and implement new technologies quickly.</li>' + 
'\n<li>Worked on IoT technology and Web Technologies( MEAN / MERN )</li>' +
'\n<li>Currently working and exploring React with Redux Architecture and Express Framework, along with TypeScript.</li>' +
'</ul>';


let projects = `
<br>
<table style="width:80%">
  <tr>
    <th>Project Name</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>Obstacle Detection and Avoidance Robot</td>
    <td>Mini project on Embedded Systems for RRCE - CSE Dept Level Project Expo, exhibiting an Obstacle Detection and Avoidance Robot using Arduino Uno and Ultrasonic Sensors.</td>
  </tr>
  <tr>
    <td>Zoo Management Information System</td>
    <td>The DBMS project for academic purpose was completed using Bootstrap as front end technology and PHP as backend technology with MySQL as database. This project used open-source cross-platform web server solution stack package tool namely XAMPP.</td>
  </tr>
  <tr>
    <td>Online Food Portal Website</td>
    <td>This Web Development project was completed to fulfill the requirement of the internship. The project was done using Bootstrap, AngularJS and jQuery as front end and using Expressjs Framework as backend and MongoDB as database. (MEAN Stack)</td>
  </tr>
  <tr>
    <td>Smart Garbage Van Tracking and Alert System using IoT</td>
    <td>descriptionThe project was completed using Raspberry Pi platform, and a MIT android application was created to notify the truck driver about the location of the Dustbin which is filled with amount of Garbage filled.</td>
  </tr>
  <tr>
    <td>Internal E Banking Website</td>
    <td>This was an Internal E Banking System project is a web application where you can transfer money to other users and can have a close watch on all your transactions.
	Tech Stack: Bootstrap Library for the front-end dev, Backend using PHP and MySQL as the database.</td>
  </tr>
  <tr>
    <td>Autonomous Garbage Collecting System using Internet of Things</td>
    <td>The project aimed at designing a Garbage Collection System using a Robot in the Indoors based on Indoor Positioning System using Internet of Things. A smart bin was deployed which would notify the Collector Robot to collect the garbage as and when it was filled.</td>
  </tr>
  <tr>
    <td>Animated Dynamic Quote for GitHub Profile README</td>
    <td>An Open-Source Project, GitHub Dynamic Quote Generator simply allows you to add an image link in the markdown (README.md) and it will view you a dynamic quote for every user visiting your GitHub account.</td>
  </tr>
</table>
<br><br>
`;

let contact = `
<br/>You can connect to me through the following:<br/>
<style>
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
</style>
<br>
<table style="width:80%">
<tr>
	<td><br>Medium:<br></td><td><br>https://medium.com/@shravan20<br></td>
</tr>
<tr>
	<td><br>Dev Community:<br></td><td><br> https://dev.to/imshravan<br></td>
</tr>
<tr>
	<td><br>Twitter:<br></td><td><br>  https://twitter.com/imshravankb<br></td>
</tr>
<tr>
	<td><br>GitHub:<br></td><td><br>  https://github.com/shravan20<br></td>
</tr>
<tr>
	<td><br>LinkedIn:<br></td><td><br>  https://linkedin.com/in/shravankb<br></td>
</tr>
<tr>
	<td><br>Web:<br></td><td><br>  https://ohmyscript.com<br></td> 								  
</tr>
<tr>
	<td><br>Mail: <br></td><td><br> shravan@ohmyscript.com<br></td> 								  
</tr>
<table>
<br>
`





$('body').terminal({
	whereami: function (name) {
		this.echo('Hello, Welcome to OhMyScript CLI Portfolio');
	},
	contact: function () {
		this.echo(contact, {raw:true});
	},
	projects: function () {
		this.echo( projects, {raw:true});
	},
	aboutme: function () {
		this.echo(about, {raw:true});
	},
	help: function () {
		this.echo('\n These are commands available: \n');
		this.echo('whereami - locates current terminal');
		this.echo('aboutme - briefs about the author of OhMyScript');
		this.echo('projects - briefs about the projects worked on');
		this.echo('contact - provides my contact details');
		this.echo('blog - click <a href="https://ohmyscript.com/" target="__blank">ohmyscript</a>',{raw:true});
		this.echo('\n');		
	},
}, {
	greetings: `\nHi there, to view all the commands in the &#10026; OhMyScript CLI &#10026; , type command help`
},
{
    autocompleteMenu: true,
    completion: ['aboutme', 'projects', 'contact']
});