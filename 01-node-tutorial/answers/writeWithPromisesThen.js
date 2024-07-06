// writeFile(...) // write line 1  
// .then(() => {  
//    return writeFile(...)  // write line 2.  
//    // Return the promise so you can chain the .then statements  
// })  
// .then // write the third line, and follow that with two more .then blocks,  
// // one to call readFile to read it back out, and one to log the data to the screen.  
// ...  
// .catch((error) => {  
//     console.log("An error occurred: ", error)  
// })  


const { writeFile, readFile } = require('fs').promises;

console.log("Starting the write process...");

writeFile("./temporary/temp.txt", "First line of text.\n")
  .then(() => {
    console.log("First line written.");
    return writeFile("./temporary/temp.txt", "Second line of text.\n", { flag: "a" });
  })
  .then(() => {
    console.log("Second line written.");
    return writeFile("./temporary/temp.txt", "Third line of text.\n", { flag: "a" });
  })
  .then(() => {
    console.log("Third line written.");
    return readFile("./temporary/temp.txt", "utf8");
  })
  .then((content) => {
    console.log("File content read:");
    console.log(content);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

console.log("Write process initiated.");
