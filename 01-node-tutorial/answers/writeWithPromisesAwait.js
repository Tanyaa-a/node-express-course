const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    // Write the first line (overwrite or create the file)
    await writeFile(
      "./temporary/temp.txt",
      "First line of text.\n"
    );

    // Append the second line
    await writeFile(
      "./temporary/temp.txt",
      "Second line of text.\n",
      { flag: "a" }
    );

    // Append the third line
    await writeFile(
      "./temporary/temp.txt",
      "Third line of text.\n",
      { flag: "a" }
    );

    // Read the content of the file
    const content = await readFile('./temporary/temp.txt', 'utf8');
    console.log(content);
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};



const reader = async () => {
    try {
        const content = await readFile('./temporary/temp.txt')
        console.log(content)
    }
    catch (error) {
        console.error("Error reading the file:", error);
      }
}

const readWrite = async () => {
    await writer();
    await reader();
  };
  
  readWrite();