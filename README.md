# 購物網站
![Static Badge](https://img.shields.io/badge/Vue-v3-green) ![Static Badge](https://img.shields.io/badge/Node-v21.6.2-blue) ![Static Badge](https://img.shields.io/badge/Vite-green) ![Static Badge](https://img.shields.io/badge/Vuetify-blue)
## 資料夾架構
 - public # 圖片放置處
 - src # 原始碼放置處
    - assets # 圖片及css放置處
    - components # 元件放置處
    - layouts # 基礎頁面呈現配置放置處
    - plugins # 三方外掛
    - router # 路由管理
    - store # vuex管理放置
    - views # 畫面呈現
    
## 指令

### npm
- 初次下載專案需下此指令
```
npm install 
```

- 啟動本地端
```
npm run dev 
```

- 打包專案
```
npm build 
```

## 技術棧
-	前端：Vue 3、Vuetify、Vite
-	狀態管理：Vuex
-	路由管理：Vue Router
-	後端服務：Firebase Authentication
-	建構工具：Vite

## 專案概述
- 登入處理使用 `Firebase` 
- 使用 `Vuex` 管理購物車系統
- UI 框架使用 `Vuetify`

## 功能特性
-	購物車功能：用戶可以添加、刪除、更新購物車內的商品。
-	產品搜尋功能：用戶可以通過關鍵詞搜尋產品。

## 部署流程
- `npm build` 生成 **dist 資料夾**

- `git add dist -f` 加入 dist 資料夾

- `git commit -m "Update"` 命名 commit

- `git subtree  push --prefix dist origin gh-pages` 部署 gh-pages branch

### 專案呈現 ()

### 注意

1. <strong>未經允許請勿發佈於相關社交平台或者部落格等網路相關平台<strong>


