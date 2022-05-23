function bottleSong(numBottles) {
  let startNum = numBottles;
 
    if(numBottles<=0){
      console.log("Need more bottles");
    }
    else{
      for(let i=startNum;i>1;i--){
        if(i==2){
           console.log("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.");
          }
          else{
             console.log(i+" bottles of beer on the wall, "+i+" bottles of beer.\nTake one down and pass it around, "+i+" bottles of beer on the wall.");
         
          }
 
      }
 
      if(numBottles==1){
        console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 1 bottle of beer on the wall.");
     }
      else{
         console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, "+numBottles+" bottles of beer on the wall.");
      }   
    }
};

bottleSong(99);
