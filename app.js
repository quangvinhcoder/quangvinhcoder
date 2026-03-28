const epress = require("express");
const cors = require("cors");

const contactRoutes = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");
const config = require("./app/config");

const app = epress();

app.use(cors());
app.use(epress.json());
app.use("/api/contacts", contactRoutes);

// Handle 404 - Not found
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// Handle 500 - Internal server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
