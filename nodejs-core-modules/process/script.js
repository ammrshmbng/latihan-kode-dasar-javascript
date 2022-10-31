
process.stdout.write('tes \n'); // it's the same as console.log();

process.on('exit', function(code) {});  
process.on('uncaughtException', function(err) {});

console.log(process.argv)
console.log(process.argv[0])
console.log(process.argv[1])

console.log(process.stdin);