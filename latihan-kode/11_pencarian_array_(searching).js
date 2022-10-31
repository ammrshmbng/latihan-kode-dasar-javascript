

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
  const tulisPertanyaan = (pertanyaan)=>{
    return new Promise((resolve,reject)=>{
        readline.question(pertanyaan, name => {
           resolve(name);
            
          });
        
    });
};

const main = async()=>{
    const arr = [];
    const dataArr = await tulisPertanyaan('masukkan data array = ');
    const nilaiArrSearch = await tulisPertanyaan('masukkan nilai array yang ingin di cari = ');
    readline.close();
    for(let i=0; i<dataArr;i++){
        arr[i]=i+1;
    }

    for(let i=0; i<arr.length;i++){
        if(arr[i]==nilaiArrSearch){
            console.log(`angka di temukan pada index ke-${i} denga nilai = ${arr[i]}`);
            break;
        }
    }

    
}

main();