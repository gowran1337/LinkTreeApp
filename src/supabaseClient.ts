import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vbxcxdoaxtgaavzvnsim.supabase.co";
const supabaseAnonKey = "sb_publishable_RbfqyuStObkQFMD-yt-Fpw_U1Jhm8ey";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
