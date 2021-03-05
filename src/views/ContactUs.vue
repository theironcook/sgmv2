<template>
  <div>
    <div class="contact-body">
      Contact us
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContactUs extends Vue {  
}
</script>

<style scoped>
  .contact-body {
    margin-top: 140px;
    margin-bottom: 100px;
  }

</style>
