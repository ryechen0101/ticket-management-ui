// ===============================
// API 基本設定
// ===============================

// 本機測試（後端）
export const API_BASE_URL = "https://ticketing-api2-647221289750.asia-east1.run.app";
//export const API_BASE_URL = "http://localhost:8080";

// ===============================
// JWT Token 管理
// ===============================
export function setToken(token) {
    localStorage.setItem("token", token);
}
export function getToken() {
    return localStorage.getItem("token");
}
export function clearToken() {
    localStorage.removeItem("token");
}
export function isLoggedIn() {
    return !!getToken();
}

// ===============================
// Session（重點：role 正規化）
// ===============================
function normalizeRole(role) {
    if (!role) return "";
    // 後端如果回 ROLE_ADMIN / ROLE_USER → 轉成 ADMIN / USER
    if (role.startsWith("ROLE_")) return role.replace("ROLE_", "");
    return role;
}

export function setSession({ token, username, role }) {
    setToken(token);
    localStorage.setItem("username", username || "");
    localStorage.setItem("role", normalizeRole(role));
}

export function getRole() {
    return normalizeRole(localStorage.getItem("role") || "");
}

export function logout() {
    clearToken();
    localStorage.removeItem("username");
    localStorage.removeItem("role");
}

// ===============================
// 共用 API 呼叫（自動帶 JWT）
// ===============================
export async function api(path, options = {}) {
    const token = getToken();

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
    };

    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers,
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${res.statusText}\n${text}`);
    }

    // 204 No Content
    if (res.status === 204) return "";

    const ct = res.headers.get("content-type") || "";
    return ct.includes("application/json") ? res.json() : res.text();
}
