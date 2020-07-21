<template>
  <div id="login">
    <div class="login-place">
      <h1>ログイン</h1>
      <table>
        <tr>
          <th>メールアドレス:</th>
          <td><input type="email" placeholder="メールアドレス"></td>
        </tr>
        <tr>
          <th>パスワード:</th>
          <td><input type="password" placeholder="password"></td>
        </tr>
      </table>
      <button class="login-button">ログイン</button>
    </div>
  </div>
</template>

<style scoped>
#login, .login-button{
  display:block;
  text-align:center;
  margin:20px auto;
}

table{
  margin:0 auto;
}
</style>