<template>
    <div id="member">
        <div class="members-form">
            <p class="members">会員登録</p>
            <p><input type="text" placeholder="ユーザー名"></p>
            <p><input type="email" placeholder="メールアドレス"></p>
            <p><input type="password" placeholder="password"></p>
        </div>
        <div class=post>
            <input type="text" v-model="postCode">
            <button @click="search">表示</button>
            <p>都道府県:{{address.pref}}</p>
            <p>市区町村:{{address.city}}</p>
        </div>
        <a href="#" class="burron">会員登録</a>
        </div>
</template>

<script>
let url ='https://apis.postcode-jp.com/api/v3/postcodes?apikey=YhRRFH99ve7rXQyfeksO5B2EaeiFv2WSizdvgth&postcode=';
const axios = require('axios');
export default {
    data(){
        return{
            postCode:'',
            address:{
                pref:'',
                city:'',
            }
        }
    },
    methods:{
        async search(){
            let item = await axios.get(
                url + this.postCode
            )
            const itemPref = item.data.data[0].pref
            const itemCity = item.data.data[0].city
            this.address.pref=itemPref
            this.address.city=itemCity
            console.log(itemPref)
            console.log(itemCity)
        }
    }
}
</script>
<style scoped>
#member{
    height:300px;
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