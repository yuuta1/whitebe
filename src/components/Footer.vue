<template>
  <footer id="footer">
    <div class="footer-left">
      <p>White Be</p>
    </div>
    <div class="footer-right">
      <ul>
        <li>
          <router-link :to="{name:'Home'}">HOME</router-link>
        </li>
        <li>
          <router-link :to="{name:'Member'}">会員登録</router-link>
        </li>
        <li>
          <router-link :to="{name:'Login'}">ログイン</router-link>
        </li>
        <li>
          <router-link :to="{name:'Company'}">会社概要</router-link>
        </li>
        <li>
          <router-link :to="{name:'Service'}">利用規約</router-link>
        </li>
        <li>
          <router-link :to="{name:'Privacy'}">プライバシーポリシー</router-link>
        </li>
        <li>
          <router-link :to="{name:'Law'}">特定商取引法</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>


<style scoped>
*{
  padding:0;
  margin:0;
}
#footer{
  height:300px;
  width:100%;
  background-color:black;
  color:white;
  display:flex;
}

.footer-left{
  font-family: 'Apple Chancery',sans-serif;
  font-size: 50px;
}

.footer-right{
  display:flex;
  position:absolute;
  right:15px;
}

.footer-right a,li{
  text-decoration:none;
  list-style:none;
  color:white;
  font-weight:normal;
  padding-bottom:10px
}
</style>