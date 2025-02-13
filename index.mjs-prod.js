import { config } from "dotenv";
config();
import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
import sheet from "./sheetsService.mjs";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = 4444;
const mongo_uri = process.env.mongodb_uri;
const client = new MongoClient(mongo_uri);
client.connect();

client.on("open", () => console.log("Connected To Database"));
client.on("error", (err) => console.log("Error Occurred - MongoDB", err));
client.on("close", () => console.log("Disconnected from mongodb"));

const corsOptions = {
  origin: ["https://hackatank.whitehatians.in/"],
};
app.use(express.json());
app.post("/api/verify", cors(corsOptions), async (req, res) => {
  const requestData = req.body;

  const id = parseInt(requestData.id);
  const code = requestData.code;
  const authBy = requestData.authemail;

  const db = client.db(process.env.mongodb_collection);
  const response = await db.collection("qr-details").findOne({
    id,
  });
  if (response) {
    const timestamp = new Date().toString();
    const name = response.name;
    const Sheetres = await sheet([[id, timestamp, name, code, authBy]]);

    return res.status(200).json({ name, id, code });
  } else {
    return res.status(404).json({ error: "Not found", id });
  }
});

app.use(express.static(path.join(__dirname, "dist")));
app.get(
  ["/", "/about", "/set1", "/set2", "/events", "/guidelines", "/judges"],
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "dist", "index.html"));
  }
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port, () => console.log("Server Started on port: ", port));
