/* supa-config.js — ★本番倉庫★（nomiya-app / 本番配信専用）
 * テスト用DB(khawdrnvssdenumbiwfg)とは別の、実際のお店のデータが入る倉庫を指す。
 * URLとanon(公開鍵)はクライアント埋め込みで安全＝RLSで本人ぶんだけ保護。
 *
 * ★このファイルはテスト(nomiya-app-test)には絶対にコピーしない。
 *   飲み屋アプリで2つのrepoが違うのは、このファイル1本だけ。
 *   （payslip-app / payslip-app-test と同じやり方）
 */
window.SUPA = {
  url: "https://tnfwipbgfgjaymlszeid.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuZndpcGJnZmdqYXltbHN6ZWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1Nzk4MzQsImV4cCI6MjA5NzE1NTgzNH0.zhKPLSlW4zxsdjsXNvqDHvtP3wBqp-EKaxbjqLGW_ek",
};
