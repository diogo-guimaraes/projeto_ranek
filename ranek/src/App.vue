<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style></style>
