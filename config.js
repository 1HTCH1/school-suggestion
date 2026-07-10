// ============================================
// Supabase 연결 설정
// SETUP.md의 안내를 따라 아래 두 값을 본인의 Supabase
// 프로젝트 값으로 바꿔주세요.
// ============================================

const SUPABASE_URL = "여기에_Project_URL_붙여넣기";
const SUPABASE_ANON_KEY = "여기에_anon_public_key_붙여넣기";

// 아래는 수정할 필요 없음
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
