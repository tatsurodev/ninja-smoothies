<template>
  <!-- smoothie.titleが得られる前にrenderされるとエラー表示が出るのでデータが得られてから表示するようにする -->
  <div class="edit-smoothie container" v-if="smoothie">
    <!-- このページのルートパラメータは、this.$route.params.param_nameで所得できる -->
    <h2>Edit a smoothie {{ smoothie.title }} Smoothie</h2>
  </div>
</template>
<script>
import db from "@/firebase/init";

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null
    };
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
</style>
