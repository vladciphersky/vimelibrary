const VimeCall = require('./');
const matches = new VimeCall.Matches();
matches.latest()
	.then(console.log);