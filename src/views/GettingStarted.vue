<template>
  <div>
    <div class="main-body">

      <div class="full-size-image-container" v-if="showFullSizeImage">
        <div class="close-full-size-image"><a href="" @click.prevent="showFullSizeImage = false">Close Full Size Image</a></div>
        <img class="full-size-image" :src="fullSizeImageSource">
      </div>

      <div class="header spaced-header">
        Get started in as little as five minutes
      </div>

      <div class="step-list">
        <ol>
          <li>
            <b>Sign up</b>
            <br>
            Provide a name and contact information and you’re ready to go.
            <br>
            <img class="screen-shot screen-shot-small" src="~@/assets/GetStartedSignup.png">
            <br>
            Give your team a name.
            <br>
            <img class="screen-shot screen-shot-small" src="~@/assets/GetStartedCreateTeam.png">
            <br>
            Invite other team members to join.
            <br>
            <img class="screen-shot screen-shot-small" src="~@/assets/GetStartedSetUpTeam.png">
          </li>
          <li>
            <b>Install the agent</b>
            <br>
            When you first log in you will be taken to the Agent Download page.  Download the agent and save it to your device.  
            The agent will automatically call back to saas glue to establish a secure connection.
            <br>
            <img class="screen-shot screen-shot-big clickable" src="~@/assets/GetStartedInstallAgent.png" @click="onImageClicked">
            <br>
              On the Agent Download page you will see directions for installing the agent on Windows, Linus and Mac
            <br>
            <img class="screen-shot screen-shot-big clickable" src="~@/assets/GetStartedAgentInstructions.png" @click="onImageClicked">
          </li>
          <li>
            <b>Create a script</b>
            <br>
            Upload a script or create one in saas glue.  Use any language you want.  The saas glue console presents syntax highlighting for easy editing
            <br>
            <img class="screen-shot screen-shot-big clickable" src="~@/assets/GetStartedCreateScript.png" @click="onImageClicked">
          </li>
          <li>
            <b>Run your script</b>
            <br>
              Run your script from the cloud console.  The agent will pass the script to the host machine for execution and return the results to saas glue.  
            <br>
            <img class="screen-shot screen-shot-big clickable" src="~@/assets/GettingStartedRunScript.png" @click="onImageClicked">
          </li>
          <li>
            <b>See the results in the Job Monitor</b>
            <br>
              Run your script from the cloud console.  The agent will pass the script to machine for execution and return the results to saas glue.  You can see the results in the job monitor.
            <br>
            <img class="screen-shot screen-shot-big clickable" src="~@/assets/GettingStartedMonitor.png" @click="onImageClicked">
          </li>
          <li>
            <b>Build a job</b>
            <br>
            Combine scripts in a job with variables, conditional routing and more.  Set a schedule to run automatically or trigger it through the API.
            <br>
            <img class="screen-shot screen-shot-big clickable" src="~@/assets/GettingStartedBuildJob.png" @click="onImageClicked">
          </li>
        </ol>
      </div>

      <br>

    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GettingStarted extends Vue {

  private showFullSizeImage = false;
  private fullSizeImageSource = null;

  private mounted(){
    window.addEventListener('keyup', this.onWindowKeyup);
  }

  private beforeDestroy(){
    window.removeEventListener('keyup', this.onWindowKeyup);
  }  

  private onWindowKeyup(keyboardEvent: KeyboardEvent){
    if(keyboardEvent.code === 'Escape'){
      this.showFullSizeImage = false;
    }
  }

  private onImageClicked(mouseEvent: any){
    if(mouseEvent.target && mouseEvent.target.currentSrc){
      this.fullSizeImageSource = mouseEvent.target.currentSrc;
      this.showFullSizeImage = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

/* Mobile */
@media (max-width: 1230px) {
  .main-body {
    margin-top: 90px;
  }

  .screen-shot-small {
    width: 250px;
  }

  .screen-shot-big {
    width: 250px;
  }
}

/* Desktop */
@media (min-width: 1230px) {
  .main-body {
    margin-top: 120px;
    margin-left: 40px;
    max-width: 900px;
  }

  .screen-shot-big {
    width: 700px;
  }

  .screen-shot-small {
    width: 300px;
  }

  .clickable:hover {
    cursor: pointer;
    border-color: $sg_color;
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

.screen-shot {
  margin-top: 20px;
  margin-left: 10px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  padding: 10px;
  border-color: lightgray;
}

.full-size-image-container {
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
}

.close-full-size-image {
  margin-left: 10px;
  margin-top: 10px;
}

.full-size-image {
  text-align: center;
  width: 95vw;
  object-fit: contain;
  margin: 20px;
  border-style: solid;
  border-color: lightgray;
  border-radius: 5px;
  border-width: 1px;
}


</style>
