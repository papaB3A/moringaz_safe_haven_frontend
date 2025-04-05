import { createClient } from "@supabase/supabase-js";

// youtube video on how to get supabase url and anon key
// 👉[https://youtu.be/EAs3PRquQtw?feature=shared]
const supabaseUrl = "https://spnbhbhyttenrrhiaamh.supabase.co";
// my public anon key
const supabaseKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwbmJoYmh5dHRlbnJyaGlhYW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNjQ3MjYsImV4cCI6MjA1MzY0MDcyNn0.Q_jTv6-L_gdN2jUIMv3m3eghzCifzFAykcnTkdvzuCA";

export const supabase= createClient(supabaseUrl, supabaseKey);