<template>
  <div id="company1">
    <div id="main">
    <div class="company">会社概要</div>
    <p>
      White Beはシャンプーやサプリメントなどを販売する会社です。
    </p>
    <div id="company-profile">
      <table>
        <tr>
          <th>社名</th>
          <td>White Be</td>
        </tr>
        <tr>
          <th>代表者</th>
          <td>倉本 優太</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>2020年7月1日</td>
        </tr>
      </table>
    </div>
  </div>
  </div>
</template>

<style scoped>
#company1{
  height:300px;
  width:80%;
  margin:10px auto;
}

#company1 p{
  font-size:20px;
  padding:10px 0 0 30px;
}

.company{
  font-size:30px;
  border-bottom:2px solid black;
}

#company-profile table{
  width:100%
}

#company-profile th{
  width:30px;
  border:1px solid black;
}

#company-profile td{
  width:70px;
  border:1px solid black;
  padding-left:10px;
}
</style>