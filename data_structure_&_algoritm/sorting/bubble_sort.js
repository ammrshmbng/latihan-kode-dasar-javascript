let data = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(`Before`)
console.log(`   ${data.join("-")}`);

do{
    swapped = false;
    for(let i=0;i<data.length;i++){
        let leftElement = data[i];
        let rightElement = data[i+1];
        if(leftElement > rightElement){
            data[i] = rightElement;
            data[i+1] = leftElement;
            swapped = true;
    

        }
    }
    

}while(swapped);

console.log(`after`)
console.log(`   ${data.join("-")}`)