<template>
  <div class="row q-pa-md">
    <div class="col-12 col-md-3">
      <sidebar />
    </div>
    <div class="col-12 col-md-10"></div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";
export default {
  components: {
    sidebar
  },
  data() {
    return {};
  }
};
</script>
