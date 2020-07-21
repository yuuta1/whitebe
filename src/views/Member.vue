<template>
    <div id="member">
        <p class="members">会員登録</p>
        <p><input type="text" placeholder="ユーザー名"></p>
        <p><input type="email" placeholder="メールアドレス"></p>
        <p><input type="password" placeholder="password"></p>
        <a href="#" class="burron">会員登録</a>
    </div>
</template>

<script>
let url ='http://zipcloud.ibsnet.co.jp/api/search?zipcode=';
const axios = require('axios');
export default {
    async created(){
        let item = await axios.get(
            url + '721-0902'
        );
        console.log(item);
    }
}
</script>
<style scoped>
#member{
    height:200px;
    text-align:center;
}

.members{
    font-size:30px;
}

a{
    display:block;
    text-decoration:none;
    height:30px;
    width:100px;
    border: 2px solid aqua;
    border-radius:50px;
    color:aqua;
    margin:10px auto;
}
</style>