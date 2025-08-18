import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://onscssytzhjeksslojho.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uc2Nzc3l0emhqZWtzc2xvamhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTk0NTYsImV4cCI6MjA3MDU3NTQ1Nn0.u2rgbtn9LF6P1HYZ7php5WN-FgjR40Q_Ago0wmhOh6k";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;