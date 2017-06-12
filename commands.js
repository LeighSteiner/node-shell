module.exports = {
	 "pwd": function (args){
	 	process.stdout.write("My current directory is " + process.cwd());
	 	process.stdout.write('\nprompt > ')
	 },
	 "date": function(args){
	   var now = new Date();
       process.stdout.write('Today’s Date is '+now);
       process.stdout.write('\nprompt > ');
	 },
	 "ls": function(args){
	 	var fs = require('fs');
	 	fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
    		process.stdout.write(file.toString() + "\n");
  			})
  		process.stdout.write("prompt > ");
		});
	 },
	 "echo": function(args){
	 	args = args.join(" ");
	 	process.stdout.write(args);
	 	process.stdout.write('\nprompt > ');
	 },
	 "cat": function(args){
	 	var fs = require('fs');
	 	fs.readFile(args[0],(err,data) => {
	 		  if (err) throw err;
  			process.stdout.write(data);
  			process.stdout.write("\nprompt > ");
	 	})
	 	// if (args.length > 1){
	 	// 	for (let i = 1; i < args.length; i++){
	 	// 		fs.readFle(args[i],(err,data) => {
	 	// 			if (err) throw err;
	 	// 			process.stdout.write(data);
	 	// 		})
	 	// 	}
	 	// 	process.stdout.write("prompt > ");
	 	// }

	 },
	 "head": function(args){
	 	var fs = require('fs')
	 	fs.readFile(args[0],(err,data) => {
	 		if (err) throw err;
  			data = data.toString();
  			data = data.split('\n');
  			var output = [];
  			for (let i = 0; i < 5; i++){
  				output.push(data[i]);
  			}
  			output = output.join("\n");
  			process.stdout.write(output);
  			process.stdout.write("\nprompt > ")
	 	})
	 },
	 "tail": function(args){
	 	var fs = require('fs')
	 	fs.readFile(args[0],(err,data) => {
	 		if (err) throw err;
  			data = data.toString();
  			data = data.split('\n');
  			var output = [];
  			for (let i =  data.length -1; i >= data.length - 5; i--){
  				output.push(data[i]);
  			}
  			output = output.reverse();
  			output = output.join("\n");
  			process.stdout.write(output);
  			process.stdout.write("\nprompt > ")
	 	})
	 },
	 "sort" : function(args){
	 	var fs = require('fs')
	 	fs.readFile(args[0],(err,data) => {
	 		if (err) throw err;
  			data = data.toString();
  			data = data.split("\n");
  			data = data.sort().join('\n')
  			process.stdout.write(data);
  			
  			process.stdout.write("\nprompt > ")
	 	})
	 },
	 "wc" : function(args){
	 	var fs = require('fs');
	 	fs.readFile(args[0],(err,data) => {
	 		if (err) throw err;
	 		data = data.toString();
	 		data = data.split('\n');
	 		var output = data.length.toString();
	 		process.stdout.write(output);
	 		process.stdout.write("\nprompt > ")
	 	})
	 },
	 "curl": function(args){
	 	var fs = require('fs');
	 	var ask = require('request');
	 	ask(args[0], function(error, response, body){
	 		if (error) throw error; 
	 		body = body.toString();
	 		process.stdout.write(body);
	 		process.stdout.write("\nprompt > ");
	 	})
	 }
  }
