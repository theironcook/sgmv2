<template>
  <div>
    <div class="main-body">

      <div class="header spaced-header" id="scroll-target-overview">
        Get started in as little as five minutes
      </div>

      <div class="step-list">
        <ol>
          <li>
            <b>Sign up</b>
            <br>
            Provide a name and contact information and you’re ready to go.
          </li>
          <li>
            <b>Install the agent</b>
            <br>
            Download the agent and save it to your device.  It will automatically call back to saas glue to establish a secure connection.
          </li>
          <li>
            <b>Create a script</b>
            <br>
            Upload a script or create one in saas glue.  Use any language you want.
          </li>
          <li>
            <b>Run your script</b>
            <br>
            Run your script from the cloud console.  The agent will pass the script to machine for execution and return the results to saas glue.  You can see the results in the job monitor.
          </li>
          <li>
            <b>Build a job</b>
            <br>
            Combine scripts in a job with variables, conditional routing and more.  Set a schedule to run automatically or trigger it through the API.
          </li>
        </ol>
      </div>

      <br>

      <div class="header spaced-header">
        Running your first script
      </div>

      <div class="spaced-text">
        Log into saas glue and go the Console tab.
      </div>

    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GettingStarted extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

/* Mobile */
@media (max-width: 1230px) {
  .main-body {
    margin-top: 90px;
  }
}

/* Desktop */
@media (min-width: 1230px) {
  .main-body {
    margin-top: 120px;
    margin-left: 40px;
    max-width: 900px;
  }
}

.spaced-header {
  padding-left: 70px;
}

.main-body {
  text-align: left;
}

.step-list {
  text-align: left;

  li {
    padding-left: 40px;
    margin-bottom: 24px;
    font-size: $sg_text_size;
    line-height: calc(#{$sg_text_size} * 1.75);
  }
}

.spaced-text {
  margin-top: 20px;
  font-size: $sg_text_size;
  margin-left: 70px;
}




</style>
