const sentence = "hello there from lighthouse labs";
let count = 0;
let index = 0;
for (const char of sentence) {
  setTimeout(() => {
    index+=1;
    if(index === sentence.length){
      console.log(`${char}`)
    }
    else{
      process.stdout.write(char);
    }

  }, count+=50);
}
