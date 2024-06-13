[Final Project -- Github URL](https://github.com/Alex718296/20240611-final_procject.git)

[Final Project -- Vercel URL](https://20240611-final-procject.vercel.app/)

# 教授 20240612 指導須修正事項(已完成項目)

### 1.帳號登入 LOG 紀錄(已將帳號密碼顯示於頁面中)

###### 記錄截圖

![](debug-Account_login_record.png)

###### email & password 紀錄

![](email&password.png)

### 2.API_arrange(Add API organization, Delete 6 APIs)

###### 將 apiPopular、apiLatest、apiComingSoon、apiStaffPicks、apiMyMovielist、movieList 整合成 API organization 單一 server

![](API_Organization.png)

### 3.Vercel page can't open right

###### 新增 vercel.json，將由 JavaScript 管理 router。(定義 router 邏輯)

![](Add_Vercle-json.png)

###### Vercel 實際頁面執行

![](vercel-Latest.png)
![](vercel-Popular.png)
![](vercel-ComingSoon.png)
![](vercel-StaffPicks.png)

# -------------------------------------------------------------

## 評分說明

1. 基本分：(30%~70%)
   依老師上課架構及內容，改換成其他應用，基本上可以執行者
2. 進階分 (30%)
   依前台及後台完成度評分，自己努力愈多，完成度愈高者，分數愈高。

## Project 說明

### 重點 1 -- 單人，還是兩人，如何分工

單人 陶少煜 210410469

### 重點 2 -- Project 簡要介紹

#### => project requirements

#### 製作電影資訊清單包含

##### ※登入前 : "/Popular','/Latest','/StaffPicks','/ComingSoon'

##### 1.登入前 (Pouplar):

![登入前](登入前.png)

##### 2.登入前 (Latest):

![登入前](登入前Latest.png)

##### 3.登入前 (StaffPicks):

![登入前](登入前staffpicks.png)

##### 4.登入前 (ComingSoon):

![登入前](登入前comingSoon.png)

##### 5.登入前 (auth):

![密碼登入畫面](密碼登入.png)

能依標題顯示對應內容

##### 登入後 : "/auth/my_movie_llist"

能新增一筆電影資料，以及刪除最後一筆電影資料

##### 新增:

![](新增資料.png)

##### 刪除:

![](刪除資料.png)

#### => featured category, pages with routes

### 重點 3 -- Supabase 後台 schemas and data 支援

![](supa_01.png)
![](supa_02.png)

### 重點 4 -- React 前台， code 模組設計

##### 1.原始介面及資料:

![](reat.png)

##### 2.路由新增:

![](路由.png)

##### 3.supa 新增(Code):

![](supa新增刪除.png)

##### 4.頁面設計(Code):

![](page.png)

##### 5.頁面設計-Popular(Code):

![](SupaPopulars.png)

##### 6.頁面設計-Latest(Code):

![](SupaLatest.png)

##### 4.頁面設計-StaffPincks(Code):

![](SupaStaffPicks.png)

### 重點 5 -- 整體完成度

## 大約 90%

## 資料及網路資源來源說明

### 網路資源來源 1

### 網路資源來源 2

https://supabase.com/docs/reference/javascript/delete

https://supabase.com/docs/reference/javascript/upsert

---

## 後端 Supabase 資料庫設計

### SQL schema and data

#### => table 1

![](table01.png)

#### => table 2

![](table02.png)

#### => 外部鍵及 RLS 設定

#### => 提供執行一次就可重新建立 schema 及 data 之 SQL 指令

---

## 前端程式設計說明

### => 功能 1 及畫面設計，完成度說明

##### 如前圖所示

### => 功能 2 及畫面設計，完成度說明

##### 如前圖所示

### => 功能 3 及畫面設計，完成度說明

##### 如前圖所示

### => 功能 4 及畫面設計，完成度說明

##### 如前圖所示

### => 功能 5 及畫面設計，完成度說明

##### 如前圖所示

---

## 解決問題說明

### => 問題 1

###### 畫面的整合配置，路蠻多時間

### => 問題 2

###### 登入登出問題上網找了些資料，但是最後還是以老師上課的為主

### => 問題 3

###### 製作分頁顯示資料，出現蠻多問題，資料庫權限還有 fk 的配置要衝新思考會比較玩善

### => 問題 4

###### 時間不足問題，能做的東西變得很有限

### => 問題 5

###### 完成新增刪除跟助教討論過，並查看過資網路資料，產生想發及概念，並希望之後時間上能夠可以更完善客製化

---

## 學習甘苦談(學習歷程及感想)

### => 1.創造力的發揮：

###### 製作網頁是一個充滿創造力的過程。選擇設計網頁的佈局、顏色、字體和圖像等元素，以創造出獨特而吸引人的網頁。

### => 2.技術的學習：

###### 製作網頁需要學習各種技術，可能對初學者或是尚不完全熟悉的人來說要有一定的學習，需要花費時間和精力來理解和應用

### => 3.實現功能和互動性：

###### 製作網頁的過程中，可以添加各種功能和互動性。

### => 4.相容性：

###### 不同的瀏覽器可能對網頁的顯示和功能支持有所不同。這可能需要進行測試和調整，以確保您的網頁在各種瀏覽器上都能夠正常運行。

### => 5.實現成果：

###### 當成功創建一個令人讚嘆的網頁並將其發佈時，感到極大的成就感和喜悅。作品將能夠被訪問和欣賞，這是一種令人滿足的感覺。

# -------------------------------------------------------------
