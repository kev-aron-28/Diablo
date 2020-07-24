<template>
  <div class="container">
    <HeaderBar />

    <router-view />

    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar/index";
import FooterBar from "@/components/Footer/Index";

export default {
  name: "MainLayout",
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>
