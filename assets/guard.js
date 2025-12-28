// assets/guard.js
import { isLoggedIn, getRole, logout } from "./api.js";

// allowRoles: ["USER"], ["ADMIN"], ["USER","AGENT"]...
export function guardPage({
  allowRoles = [],     // 空陣列：只要登入即可
  title = "無權限",
  hint = ""
} = {}) {

  if (!isLoggedIn()) {
    location.href = "login.html";
    throw new Error("Not logged in");
  }

  const role = getRole();

  if (allowRoles.length > 0 && !allowRoles.includes(role)) {
    renderForbidden({
      title,
      message:
        `你目前的角色是「${role}」，無法使用此頁面。\n` +
        (hint ? (hint + "\n\n") : "") +
        `請切換成：${allowRoles.join(" / ")} 再操作。`
    });
    throw new Error("Forbidden role");
  }

  return role;
}

function renderForbidden({ title, message }) {
  document.body.innerHTML = `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <h1>${escapeHtml(title)}</h1>
          <span class="tag">Guard</span>
        </div>
        <div class="row" style="margin:0;">
          <a class="btn secondary" href="index.html">回主選單</a>
          <a class="btn secondary" href="login.html">去登入</a>
        </div>
      </div>
    </header>

    <main class="container">
      <section class="card">
        <h2>沒有權限</h2>
        <div class="error" style="white-space:pre-wrap;">${escapeHtml(message)}</div>
        <div class="row">
          <button id="logoutBtn" class="secondary">登出並重新登入</button>
        </div>
      </section>
    </main>
  `;

  const btn = document.getElementById("logoutBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      logout();
      location.href = "login.html";
    });
  }
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
