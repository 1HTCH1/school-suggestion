// ============================================
// Supabase 연결 설정
// SETUP.md의 안내를 따라 아래 두 값을 본인의 Supabase
// 프로젝트 값으로 바꿔주세요.
// ============================================

const SUPABASE_URL = "https://akfdxhadezadahnjziqh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZmR4aGFkZXphZGFobmp6aXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MjA1MjUsImV4cCI6MjA5OTE5NjUyNX0.ITaQyOsgL5RccKm5B3ESKbgUt7ifn7qgBRYs3k4kaNc";

// 아래는 수정할 필요 없음
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
