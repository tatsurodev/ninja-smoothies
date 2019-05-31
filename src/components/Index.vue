<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      smoothies: [
        {
          title: "Ninja Brew",
          slug: "ninja-brew",
          ingredients: ["bananas", "coffee", "milk"],
          id: "1"
        },
        {
          title: "Morning Mood",
          slug: "morning-mood",
          ingredients: ["mango", "lime", "juice"],
          id: "2"
        }
      ]
    };
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id !== id;
      });
      /* 配列操作系のメソッドまとめ
      forEach((val, index, array) => {
        // 破壊的(元の配列が変わる)
      });
      map((val, index, array) => {
        // ただのコピー
      });
      filter((val, index, array) => {
        return 条件;
        // ただのコピー、trueになった要素だけを返す
      });
      slice(index, endIndex);
      // コピー、endIndexは未満の終了位置
      splice(index, removedNum);
      // 破壊的、removedNumは元の配列から削除する要素の個数
      */
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
