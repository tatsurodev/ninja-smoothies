<template>
  <div class="edit-smoothie container">
    <!-- このページのルートパラメータは、this.$route.params.param_nameで所得できる -->
    <h2>Edit a smoothie {{ this.$route.params.smoothie_slug }}</h2>
  </div>
</template>
<script>
export default {
  name: "EditSmoothie",
  data() {
    return {};
  }
};
</script>

<style>
</style>
