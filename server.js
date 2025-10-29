import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (_req, res) => res.status(200).send("ok"));
app.get("/", (_req, res) => {
  res.json({
    service: "my-api",
    time: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`my-api listening on :${port}`);
});
