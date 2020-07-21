<template>
  <div id="Product">
    <div class="Product-sample">
      <div class="Product1">
        <img :src="productItemData.image">
        <table>
          <tr>
            <th>商品名:</th>
            <td>{{ productItemData.name }}</td>
          </tr>
          <tr>
            <th>価格:</th>
            <td>¥{{ productItemData.price }}(税込)</td>
          </tr>
          <tr>
            <th>商品概要:</th>
            <td>{{ productItemData.text }}</td>
          </tr>
        </table>
        <a href="#">カートに入れる</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["productItemData"],
};
</script>

<style scoped>
*{
  padding:0;
  margin:0;
}

#Product{
  height:1000px;
  width:100%;
}

.Product1 img{
  display:block;
  height:450px;
  width:60%;
  margin:0 auto;
}

.Product1{
  height:650px;
}

.Product1 a{
  display:block;
  height:20px;
  width:30%;
  border:2px solid aqua;
  text-decoration:none;
  text-align:center;
  padding:10px 0;
  border-radius:50px;
  color:aqua;
  margin:10px auto;
}

.product1 table{
  margin:0 auto;
}

table{
  width:80%;
}

th{
  width:10%;
}

td{
  width:70%;
}

@media screen and (max-width:480px){
  .Product-sample{
    height:750px;
  }
  .Product-sample{
    display:block;
  }

  .Product1 img{
    width:100%;
  }
  .Product1 a{
    height:50px;
    width:150px;
    line-height:50px;
    margin:0 auto;
  }
}
</style>