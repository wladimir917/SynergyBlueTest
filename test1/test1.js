//console log first 100 numbers with conditions
for(let i= 1; i <=100 ; i++){
  //Initialize log to be used like a flag if is not multiple of 3 or 5
  let log = "";
  //If multiple of 3
  if( i%3 === 0)
    log = "Synergy";
  //if multiple of 5
  if( i%5 === 0)
    log = `${log}Blue`;
  //If not multiple of 3 or 5 must print i
  if( log === "")
    log= i;
  console.log(log);
}