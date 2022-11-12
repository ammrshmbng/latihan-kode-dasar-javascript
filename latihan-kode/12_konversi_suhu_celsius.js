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


const main = async() =>{
    let celc, fahr, kelv, ream;
    celc = Number(await tulisPertanyaan('input suhu celcius : '));
    readline.close();

    fahr = (9.0/5.0 * celc) + 32;
    kelv = celc + 273.15;
    ream = celc * (4.0/5.0) ;

   console.log(`\n${celc} derajat Celsius = ${fahr} Fahrenheit \n `);
   console.log(`${celc} derajat Celsius = ${kelv} Kelvin \n `);
   console.log(`${celc} derajat Celsius = ${ream} Reamur \n `);
}

main();