const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessFeedback = "Enter your guess below.";
let previousGuesses = [];

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
    <p>${guessFeedback}</p>
    <form method="POST">
      <input name="guess" type="number" min="1" max="100" required></input>
      <button type="submit">Submit</button>
    </form>
    <p>Previous guesses: ${previousGuesses.join(", ")}</p>
  </body>
  `;
}

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      const guess = parseInt(body["guess"], 10);

      // Add the guess to the previous guesses list
      previousGuesses.push(guess);

      // Check the user's guess
      if (guess < randomNumber) {
        guessFeedback = "Your guess is too low. Try again!";
      } else if (guess > randomNumber) {
        guessFeedback = "Your guess is too high. Try again!";
      } else {
        guessFeedback = `Congratulations! You guessed the number ${randomNumber} correctly.`;
        // Reset the game
        randomNumber = Math.floor(Math.random() * 100) + 1;
        previousGuesses = [];
      }

      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});


server.listen(3000);
console.log("The server is listening on port 3000.");
