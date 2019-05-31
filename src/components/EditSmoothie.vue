<template>
  <!-- smoothie.titleが得られる前にrenderされるとエラー表示が出るのでデータが得られてから表示するようにする -->
  <div class="edit-smoothie container" v-if="smoothie">
    <!-- このページのルートパラメータは、this.$route.params.param_nameで所得できる -->
    <h2>Edit a smoothie {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent="EditSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div class="field" v-for="(ing, index) in smoothie.ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <!-- v-modelにこのループにしか存在しないingは当てられない -->
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>
<script>
import db from "@/firebase/init";

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    EditSmoothie() {
      console.log(this.smoothie.title, this.smoothie.ingredients);
    },
    // addIng, deleteingは、AddSmoothieのメソッドを微調整
    // ingredient追加
    addIng() {
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        // ingredientのフィールドを空にする
        this.another = null;
        // ingredient追加成功時にエラーメッセージのfeedbackを空にする
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient.";
      }
    },
    // ingredient削除
    deleteIng(ing) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(
        ingredient => {
          return ingredient !== ing;
        }
      );
    }
  },
  created() {
    // ルートパラメータから該当データ取得
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug);
    // 得られたプロミスをループで回して該当データ(1件のみ)をプロパティに格納
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data());
        this.smoothie = doc.data();
        // idはレコードのフィールド内にはない、doc自体のプロパティであることに注意
        this.smoothie.id = doc.id;
        // console.log(this.smoothie);
      });
    });
  }
};
</script>

<style>
.edit-smoothie {
  margin-top: 60px;
  pediting: 20px;
  max-width: 500px;
}
.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
