const { createClient } = require('@supabase/supabase-js');

const { SUPABASE_URL, SUPABASE_API_KEY } = require("../config");

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

module.exports = {
  supabase,
};