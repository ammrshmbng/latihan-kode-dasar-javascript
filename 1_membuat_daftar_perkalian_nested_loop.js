// mengggunakan for
// for(let i=1;i<=10;i++){
//   for(let j=1;j<=10;j++){
//       console.log(`${i} * ${j} = ${i*j}`)
//   }
//   console.log('\n\n')
// };


let i=1;
let j;
while(i<=10){
  j=1;
  while(j<=10){
    console.log(`${i} * ${j} = ${i*j}`);
    j++;
  }
  console.log('');
  i++;
};