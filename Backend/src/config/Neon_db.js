import pg from "pg";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },

  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

// Important: prevent an unexpected idle connection error
pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL pool error:", err);
});

export const dbconnect = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

export default pool;