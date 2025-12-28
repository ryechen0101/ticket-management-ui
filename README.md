# Ticket Management System – Frontend UI

這是一個工單管理系統的前端介面，提供使用者建立、查詢、追蹤工單狀態，以及管理者進行帳號管理。

**線上 Demo（GitHub Pages）**  
🔗 https://ryechen0101.github.io/xxx/ticket-management-ui

（僅提供操作 USER 權限，AGENT 與 ADMIN 權限的操作畫面以截圖方式呈現在下面說明。）

---

## 功能簡介

- 使用者登入 / 註冊
- 建立工單（標題、內容、優先級）
- 工單列表查詢（關鍵字 / 狀態 / 分頁 / 排序）
- 工單詳情檢視
- 留言與修改歷史追蹤
- 角色權限顯示（USER / AGENT / ADMIN）
- 管理員使用者管理介面

## 技術說明

- HTML / CSS
- JavaScript（ES Module）
- Fetch API（AJAX）
- GitHub Pages 部署
- 與後端 REST API 整合

## 權限說明

- USER：建立與管理自己的工單
- AGENT：管理所有工單
- ADMIN：使用者帳號管理（不處理工單）

## Demo 畫面

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/40ef5b16-999c-46f1-b7a3-c89c236622da" />

### 註冊
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/94e32db7-be9e-4ea4-bacf-2f6e40dd733d" />

### ADMIN
登入成功後的畫面
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/09e1066d-1339-4d1a-b6b1-cdce7f1cb26d" />
使用者管理
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/54d6f412-9ce4-49be-bf60-934b6ac281fe" />
使用者詳情
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/ce6b762c-c696-4fb3-ac59-79c294b5e119" />

### USER1
登入成功後的畫面
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/cf77e83a-531d-4524-87cb-2eb550ce9580" />
建立工單
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/d137e78d-2a84-4432-93c0-6d1bca414114" />
僅能查看、修改、刪除自己建立的工單
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/9eb2aaa3-c0c6-4c3f-b923-adbeae13a8d4" />
從每頁顯示 10 筆調整成每頁顯示 5 筆
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/4f88eef2-3dbc-499f-961b-2ab4e12d59ed" />
關鍵字搜尋
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/e1a55510-8dcf-41ed-866f-09f7556a339f" />
查看單筆工單詳情
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/55dae63c-ce79-414a-92af-be78bc6c41f4" />
<img width="1920" height="544" alt="image" src="https://github.com/user-attachments/assets/76bb5bf9-2ae5-46ac-b419-d3b0bb3f6196" />
查看修改歷史
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/7cb5a099-2f8e-47ff-9d86-33cfad20c5f3" />
查看所有留言
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/91babb01-42dc-48a2-ab71-7c0796567e57" />
修改自己的密碼
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/092a36ae-204a-43f3-8460-ce2aa2941036" />

### USER2

登入成功後的畫面
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/920e72b6-af83-4c93-a8b3-b332252ac929" />
僅能查看、修改、刪除自己建立的工單
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/1ee65970-a44e-4c86-a76e-8752c58cc7d2" />

### AGENT

登入成功後的畫面
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/dc11a255-e985-40e2-a768-9d49e263fd66" />
可以查看所有人建立的工單
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/9826ab6b-7bc8-4cfa-938b-ee3bfe98839e" />
可以修改 USER 的工單內容
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/7cfb518f-9792-4299-a096-a2f19d34c456" />
可以刪除 USER 的工單
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/62e63065-d2bd-4ca8-9515-a09d8dd320e9" />
成功刪除第六筆
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/047c8854-73c1-44ac-b3c7-0abf548b1ce5" />

## Backend 

後端為 Spring Boot REST API，  
包含 JWT 認證、角色權限控管與資料庫設計。

Backend Repo：  
🔗 https://github.com/ryechen0101/ticket-management
