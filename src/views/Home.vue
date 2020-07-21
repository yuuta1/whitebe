<template>
  <div class="home">
    <div id="ProductData">
      <div id="ProductDataList" v-for="(data, id) in ProductList" :key="id">
        <router-link :to="{name:'Product', params:{id:data.id, productItemData:data}}">
          <img :src="data.image">
          <p>商品名:{{data.name}}</p>
          <p>価格:¥{{data.price}}(税込)</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ProductList:[
        {
          id:0,
          name:"スピルリナ(30粒)",
          price:"4,000",
          image:require("../assets/product1.jpg"),
          text:"スピルリナは、ビタミン・ミネラル・たんぱく質などの5大栄養素をはじめ、食物繊維・植物色 素など60種類以上の栄養素を含むサプリメントです。"
        },
        {
          id:1,
          name:"青汁(30粒)",
          price:"3,000",
          image:require("../assets/product2.jpg"),
          text:"青汁は、緑葉野菜を絞ってつくられる健康食品です。原材料として、ケール、アシタバ、大 麦若葉、モロヘイヤ、クロレラなどが良く用いられています。ダイエット効果やむくみ改善効果がありま す。"
        },
        {
          id:2,
          name:"シャンプー＆ボディーソープ",
          price:"6,000",
          image:require("../assets/product3.jpg"),
          text:"髪に優しいアミノ酸系シャンプーとフルーティーな香りのする皮膚に優しいボディーソープです。"
        },
        {
          id:3,
          name:"シャンプー＆ボディーソープ＆タオル",
          price:"7,000",
          image:require("../assets/product4.jpg"),
          text:"髪に優しいアミノ酸系シャンプーとフルーティーな香りのする皮膚に優しいボディーソープと 触り心地の良いタオルです。"
        },
        {
          id:4,
          name:"乳液＆タオル",
          price:"3,000",
          image:require("../assets/product5.jpg"),
          text:"肌の保湿を保つ乳液と触り心地の良いタオルです。"
        },
        {
          id:5,
          name:"乳液＆化粧水＆タオル",
          price:"5,000",
          image:require("../assets/product6.jpg"),
          text:"肌の保湿を保つ化粧水と肌の保湿を保つ乳液と吸水性に優れているコットンです。"
        },
        {
          id:6,
          name:"セットA",
          price:"7,000",
          image:require("../assets/product7.jpg"),
          text:"肌の保湿を保つ化粧水と高濃度のビタミンCが配合されている美容液と汗・匂いの対策が できる制汗スプレーと吸水性に優れているコットンです。"
        },
        {
          id:7,
          name:"セットB",
          price:"7,000",
          image:require("../assets/product8.jpg"),
          text:"肌の保湿を保つ化粧水と高濃度のビタミンCが配合されている美容液と汗・匂いの対策が できる制汗スプレーと200本の綿棒です。"
        },
        {
          id:8,
          name:"セットC",
          price:"6,000",
          image:require("../assets/product9.jpg"),
          text:"肌の保湿を保つ化粧水と肌の保湿を保つ乳液と高濃度のビタミンCが配合されている美容 液とコットンです。"
        },
        {
          id:9,
          name:"スペシャルセット",
          price:"10,000",
          image:require("../assets/Special.jpg"),
          text:"肌の保湿を保つ化粧水と高濃度のビタミンCが配合されている美容液と汗・匂いの対策が できる制汗スプレー2本と吸水性に優れているコットンです。"
        },
        {
          id:10,
          name:"コンプリートセット",
          price:"15,000",
          image:require("../assets/complete.jpg"),
          text:"髪に優しいアミノ酸系シャンプーとフルーティーな香りのする皮膚に優しいボディーソープと 高濃度のビタミンCが配合されている美容液と肌の保湿を保つ乳液と汗・匂いの対策ができる制汗ス プレーと吸水性に優れているコットンです。"
        }
      ]
    };
  }
};
</script>

<style scoped>
*{
  padding:0;
  margin:0;
}

#ProductData{
  height:2200px;
  width:90%;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
}

#ProductDataList{
  height:500px;
  width:30%;
  border:1px solid black;
  border-radius:50px;
  margin:10px 0;
}

#ProductDataList img{
  height:250px;
  width:100%;
  border-radius:50px 50px 0 0;
}

#ProductDataList p{
  text-align:center;
  padding:10px 0;
  font-weight:bold;
}

a{
  text-decoration:none;
  color:black;
}

@media screen and (max-width:480px){
  #ProductData{
    height:5650px;
    display:block;
  }

  #ProductDataList{
    width:100%;
  }
}

</style>>
