<template>
  <header id="header">
    <div id="header-nav">
      <div class="header-left">
        <p>White Be</p>
      </div>
      <div class="header-right">
        <ul>
          <li>
            <router-link :to="{name:'Home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name:'Member'}">会員登録</router-link>
          </li>
          <li>
            <router-link :to="{name:'Login'}">ログイン</router-link>
          </li>
        </ul>
      </div>
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
*{
  padding:0px;
  margin:0px;
  box-sizing:border-box;
}

#header{
  background:url(../assets/header.jpg) center;
  height:100vh;
  display:flex;
}

.header-left{
  font-family: 'Apple Chancery',sans-serif;
  font-size:50px;
}

.header-right ul{
  display:flex;
  position:absolute;
  top:30px;
  right:0;
  list-style:none;
}

.header-right a{
  color:black;
  text-decoration:none;
  font-size:20px;
  margin-right:10px;
}

.header-right a:hover{
  color:gray;
}

@media screen and (max-width:480px){
  #hamburger{
    width:50px;
    height:50px;
    position:absolute;
    cursor:pointer;
    z-index:100;
    top:15px;
    right:20px;
    transition:0.4s;
  }

  #hamburger span{
      position:absolute;
      left:2px;
      display:block;
      width:35px;
      height:2px;
      background-color:black;
      transition:0.8s;
    }

    #hamburger span:nth-of-type(1){
      top:10px;
    }
    #hamburger span:nth-of-type(2){
      top:20px;
    }
    #hamburger span:nth-of-type(3){
      top:30px;
    }
    .header-right{
      display:none;
    }

}

</style>
