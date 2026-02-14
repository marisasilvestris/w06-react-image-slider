import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import megaData from "./megaman-data.js";
import data from "./data.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
dotenv.config();

// const db = new pg.Pool({
//   connectionString: process.env.DB_CONN,
// });

app.get(`/`, (req, res) => {
  res
    .status(200)
    .send(
      "all good y'all, but you'll be wanting <a href='./imagelist'>this</a> or <a href='./robitlist>this</a>",
    );
});
app.get(`/robitlist`, (req, res) => {
  res.status(200).send(megaData());
});
app.get(`/imagelist`, (req, res) => {
  res.status(200).send(data());
});

// Individual listing page
// GET to /listing/<listing id> to get only those items
// app.get(`/listing/:id`, async (req, res) => {
//   const queryStr = `SELECT * FROM listings WHERE id = $1`;
//   const listingData = await db.query(`${queryStr}`, [req.params.id]);
//   const rows = listingData.rows;
//   res.status(200).json(rows);
//   console.log("individual listing request");
// });

// app.post(`/listings`, async (req, res) => {
//   const submissionData = req.body;
//   const dbQuery = await db.query(
//     `INSERT INTO listings (name, title, category, body, brief) VALUES ($1, $2, $3, $4, $5)`,
//     [
//       submissionData.name,
//       submissionData.title,
//       submissionData.category,
//       submissionData.body,
//       submissionData.brief,
//     ],
//   );
//   console.log(submissionData);

//   res.send(`POST requested to /listings successfully:<br/>${submissionData}`);
// });

// open port 9k1
app.listen(9001, (req, res) => {
  console.log(`listening successfully on 9001!`);
});
