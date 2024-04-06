require('dotenv').config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;
const PORT = process.env.PORT || 3001;

module.exports = {
  SUPABASE_URL,
  SUPABASE_API_KEY,
  PORT,
};