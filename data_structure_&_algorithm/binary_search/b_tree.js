
const search = (val,arr)=>{
    for(let i=0;i<arr.length;i++){
        // console.log(i);
        if(val==arr[i]){
            return i
        }
    }
    return -1
};

const binary = (val,arr)=>{
    let lower = 0;
    let upper = arr.length -1;

    while(lower <= upper){
        console.log('try');
        const middle = lower + Math.floor((upper-lower)/2);
       


        if(val === arr[middle]){
            return middle;
        }

        if(val < arr[middle]){
            upper = middle -1;
        }else{
            lower = middle +1;
        }
    }

     return -1;
}

const values = require('./notes.js');


process.stdin.on('data',function(data){
    const datas = Number(data);
    // console.log(search(value,values));
    console.log(binary(datas,values));
});