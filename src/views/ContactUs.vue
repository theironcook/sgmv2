<template>
  <div>
    <div class="contact-body">
      <div class="header">
        Contact Us.  
        <br>
        We'll get back as soon as we can.
      </div>
      <br>
      <div class="email">info@saasglue.com</div>

      <br>
      <div class="email">help@saasglue.com</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContactUs extends Vue {  
}
</script>

<style scoped lang="scss">
  .contact-body {
    margin-top: 110px;
    margin-bottom: 100px;
    margin-left: 40px;
    font-size: $sg_text_size;
    text-align: left;
    height: 65vh;

    .email {
      margin-left: 20px;
    }
  }

</style>
