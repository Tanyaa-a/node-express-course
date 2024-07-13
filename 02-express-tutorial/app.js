console.log("Express Tutorial");

const express = require("express");
const app = express();
const { products } = require("./data.js");

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "That product was not found." });
  }
  return res.json(product);
});

// query search
app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (price) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.price < parseFloat(price);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.send("Oops! We don’t have that page.");
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
