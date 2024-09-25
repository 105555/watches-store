# 購物網站
![Static Badge](https://img.shields.io/badge/Vue-green) ![Static Badge](https://img.shields.io/badge/Vuetify-blue) ![Static Badge](https://img.shields.io/badge/Vite-green) ![Static Badge](https://img.shields.io/badge/Node-v21.6.2-blue)  ![Static Badge](https://img.shields.io/badge/pnpm-9.7.0-orange)
## 資料夾架構
 - public # 圖片放置處
 - src # 原始碼放置處
    - assets # 圖片及css放置處
    - components # 元件放置處
    - layouts # 基礎頁面呈現配置放置處
    - locales # i18n
    - plugins # 三方外掛
    - router # 路由管理
    - store # vuex管理放置
    - views # 畫面呈現
    
## 指令

### pnpm
- 初次下載專案需下此指令
```
pnpm i 
```

- 啟動本地端
```
pnpm run dev 
```

- 打包專案
```
pnpm build 
```

## 技術棧
-	UI框架：Vuetify
-	狀態管理：Vuex
-   多語系: Vue@i18n
-	路由管理：Vue Router
-	後端服務：Firebase Authentication
-	建構工具：Vite

## 功能概述
-   註冊功能
-	購物車功能：用戶可以添加、刪除、更新購物車內的商品。
-	產品搜尋功能：用戶可以通過關鍵詞搜尋產品。
-   多語系：支援繁體中文 / 英文 (未完成全部)。
-   RWD：支援 ipad、mobile、PC 響應式設計

## Firebase 配置
-   複製 firebase.example 為 firebase.js
-   xxx 更改為 firebase 專案名稱
-   其餘空白處填入專案相關資訊

## 部署流程
- `pnpm build` 生成 **dist 資料夾**

- `git add dist -f` 加入 dist 資料夾

- `git commit -m "Update"` 命名 commit

- `git subtree  push --prefix dist origin gh-pages` 部署 gh-pages branch

### 專案呈現 (https://105555.github.io/watches-store/)

### 注意

1. <strong>未經允許請勿發佈於相關社交平台或者部落格等網路相關平台<strong>


