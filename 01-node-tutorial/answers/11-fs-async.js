const { writeFile } = require('fs');

console.log("at start");

//first line
writeFile('./temporary/fileB.txt', 'This is line 1\n', { flag: 'w' }, (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    //the second line
    writeFile('./temporary/fileB.txt', 'This is line 2\n', { flag: 'a' }, (err) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        //third line
        writeFile('./temporary/fileB.txt', 'This is line 3\n', { flag: 'a' }, (err) => {
          console.log("at point 3");
            if (err) {
                console.log("This error happened: ", err);
            }
        });
      }
    });
  }
});

console.log("at end");
