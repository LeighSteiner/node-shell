process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
var cmd = data.toString().trim(); // remove the newline
cmd = cmd.split(' ');
var commands = require('./commands');
commands[cmd[0]](cmd.slice(1));
});