# books list

## 執行專案
```
git clone https://github.com/linpaul1129/booksView.git
npm install
npm run serve
```
## 專案架構

建立了Books與BookDetail兩個頁面
建立一個component Booklist直接於兩個頁面中使用
使用Swiper建構booklist使其可以拖曳拉動取代scroll bar
使用axios串接api

## 第三方 library

使用了axios串接api，原因是學習串接api一開始就是用這個，比較熟悉
使用Swiper的原因是想讓畫面好看一點，且不用局限於scroll bar
使用sass-loader，使得css較容易維護也比較方便撰寫

## 遇到的困難

一開始我嘗試使用vue3去寫，發現router要安裝的package與Vue2不同，而是要安裝vue-next，在查找過後學習到且完成router的package安裝與實作後，考量到對Vue3不熟悉怕無法如期完成，所以改回使用Vue2完成專案