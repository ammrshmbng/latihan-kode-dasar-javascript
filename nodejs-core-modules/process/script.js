const quetions =[
    "what is your name?",
    "what is your fav hobby?",
    "what is your preferred programming language?"
]


const answers =[];

function ask(i){
    process.stdout.write(`\n\n\n\n ${quetions[i]}`)
    process.stdout.write("  >  ");
}

process.stdin.on('datas',function(data){
    // process.stdout.write(data.toString().trim() + '\n');

    answers.push(data.toString().trim());
    if(answers.length < quetions.length){
        ask(answers.length)
    }else{
        process.exit();
    }
});

process.on('exit',function(){
    process.stdout.write('\n\n\n\n');
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`)
})

ask(0);