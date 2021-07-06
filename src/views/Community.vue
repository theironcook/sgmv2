<template>
  <div class="main-body">
    <div class="header spaced-header">
      Latest blogs, tutorials, podcasts, meetups etc.
    </div>
    <br><br>
    
    <div v-for="item of items" :key="item.title" class="item">
      <div class="item-date">{{item.date}}</div>
      <div class="item-title">
        <a :href="item.mainLink">{{item.title}}</a>

        <template v-if="item.videoLink">
          <br>
          <a :href="item.videoLink" >video</a>
        </template>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Community extends Vue {  

  private readonly items = [
    {
      title: 'Podcast - Stick All Of Your Systems And Data Together With SaaSGlue As Your Workflow Manager - Episode 201',
      date: 'July 5, 2021',
      mainLink: 'https://www.dataengineeringpodcast.com/saasglue-cloud-workflow-manager-episode-201/'
    },
    {
      title: 'Blog - Architectures of Pipeline Automation Tools Compared',
      date: 'June 30, 2021',
      mainLink: 'https://jack-wood.medium.com/architectures-of-pipeline-automation-tools-compared-3b3e6e9768db'
    },
    {
      title: 'Utah Devops Workshop - Day 2: Kubernetes Online Workshop',
      date: 'June 16, 2021',
      mainLink: 'https://www.meetup.com/DevOpsUT/events/wfzmlryccjbmb/',
    },
    {
      title: 'Utah Devops Workshop - Day 1: Kubernetes Online Workshop',
      date: 'June 9, 2021',
      mainLink: 'https://www.meetup.com/DevOpsUT/events/278127038/',
    },
    {
      title: 'Utah Devops Meetup - Learn how to deploy a single-page webapp onto a Kubernetes cluster in AWS',
      date: 'April 14, 2021',
      mainLink: 'https://www.meetup.com/DevOpsUT/events/wfzmlryccgbsb/',
      videoLink: 'https://us02web.zoom.us/rec/play/CEvtprwOuA21xYp2jtvvoo7HW5nRDqzzTgRnyfHY8uiR2ARslAP0H4n7GY1LwUev8Kqc2Zv3pDj_XUmu.k10ic3TrcENVIcIW?continueMode=true&_x_zm_rtaid=G_CJO9pjR2OqkLaKIkAAvQ.1625451876191.71360666ce5fb89bad7e0afad04d4acb&_x_zm_rhtaid=365'
    }
  ]


}
</script>

<style scoped lang="scss">
  .main-body {
    margin-top: 90px;
    text-align: left;
    margin-left: 25px;
  }

  .item {
    margin-top: 15px;
    // border-style: solid;
    // border-radius: 5px;
    // border-width: 1px;
    // border-color: rgb(240, 237, 237);
    padding: 10px;
  }

  .item-date {
  }

  .item-title {
    color: black;
  }

  a:hover {
    color: black;
  }

</style>
