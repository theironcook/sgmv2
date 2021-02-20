<template>
  <div class="home">
    <div class="nav-menu">
      <div class="nav-header">Saas Glue</div>
      <div class="nav-link nav-link-selected">Overview</div>
      
      <div class="nav-link-spacer"></div>

      <div class="nav-header">Key Features</div>
      <div class="nav-link ">Works with any platform</div>
      <div class="nav-link">Works virtually anywhere</div>
      <div class="nav-link">Works with any language</div>
      <div class="nav-link">Provides all infrastructure</div>
      <div class="nav-link">Scales horizontally</div>

      <div class="nav-link-spacer"></div>

      <div class="nav-header">How it Works</div>
      <div class="nav-link">Platform architecture</div>
      <div class="nav-link">Job design</div>
      <div class="nav-link">Job management</div>
      <div class="nav-link">Something else</div>

      <div class="nav-link-spacer"></div>

      <div class="nav-header">Sign Up</div>
    </div>

    <div class="page-spacer"></div>
    
    <div class="main-body">

      <div class="header">
        Saas glue in a nutshell
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        Our unique automation approach decouples job management from code execution.  
      </div>
      <div class="blurb-1 blurb-text">
       Jobs are managed in the cloud where all of the code is stored.  At runtime, tasks are distributed to machines for execution through agents, which you install.  Agents collect all output and return it the the cloud where it is assembled into a complete job record.
      </div>
      <div class="blurb-1 blurb-text">
        With saas glue you can work with all of your machines using any set of programming languages to do pretty much anything.
      </div>
      <div class="blurb-1 blurb-text">
        Here is our rule of thumb: If you can do something from the local command prompt you can do it the same way in saas glue through our method of delivering code to the computing environment.
      </div>

      <div class="section-break"></div>

      <div class="col-blurb">
        <div>
          <div class="col-blurb-title">
            Integration
          </div>
          <div class="col-blurb-body">
            <div class="col-blurb-p blurb-text">
              Run code on any device in any network permitting outgoing HTTPS
            </div>
            <div class="col-blurb-p blurb-text">
              Run scripts and compiled code in any language
            </div>
            <div class="col-blurb-p blurb-text">
              Run Function-as-a-Service code in the cloud
            </div>
          </div>
        </div>
        <div>
          <div class="col-blurb-title col-blurb-line">
            Orchestration
          </div>
          <div class="col-blurb-body col-blurb-body-line">
            <div class="col-blurb-p blurb-text">
              Create multi-step jobs with conditional path routing
            </div>
            <div class="col-blurb-p blurb-text">
              Run jobs in multi-cloud and hybrid-cloud environments
            </div>
            <div class="col-blurb-p blurb-text">
              Centrally monitor distributed jobs
            </div>
          </div>
        </div>
        <div>
          <div class="col-blurb-title col-blurb-line">
            Automation
          </div>
          <div class="col-blurb-body col-blurb-body-line">
            <div class="col-blurb-p blurb-text">
              Start jobs from a schedule, with the API or from the web console
            </div>
            <div class="col-blurb-p blurb-text">
              Pass variables between tasks in multi-language jobs
            </div>
            <div class="col-blurb-p blurb-text">
              Import and centralize your cron jobs
            </div>
          </div>
        </div>
      </div>

      <div class="section-break"></div>

      <div class="section-title">key feature</div>
      <div class="header">
        Fill the gaps in your automation infrastructure
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        Saas glue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure
      </div>

      <div class="blurb-1 blurb-text">
        <ul>
          <li>
            Integrates with all other platforms through a cloud API
          </li>
          <li>
            Works in any network that allows outgoing HTTPS to the secure sg cloud
          </li>
          <li>
            Works with any set of programming languages
          </li>
          <li>
            No add-on components to install and manage
          </li>
          <li>
            Scales horizontally to handle enterprise workloads
          </li>
        </ul>
      </div>

      <div class="section-break"></div>

      <div class="section-title">key feature</div>
      <div class="header">
        Works with any platform
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        No add-on modules are required to integrate with saas glue.  Using secure credentials you can invoke jobs through our API from any platform.  Your jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.
      </div>
      <div class="blurb-1 blurb-text">
        [cloud logo]
      </div>
      <div class="blurb-1 blurb-text bold-text">
        Jenkins, Ansible, Terraform, Chef, Puppet, Salt Stack, Git Lab, AWS, GCP, Azure DevOps, etc.
      </div>

      <div class="section-break"></div>

      <div class="section-title">key feature</div>
      <div class="header">
        Works virtually anywhere
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        When the saas glue agent is installed, it immediately calls home to the cloud and establishes a regular heartbeat through HTTPS.  The agent receives instructions from a message queue and sends code output to API endpoints.
      </div>
      <div class="blurb-1 blurb-text">
        This simple design lets the agent work on almost any network.  And since agents talk only to the cloud, your job can hop from one network to another without regard to network boundaries.
      </div>

      <div class="section-break"></div>

      <div class="section-title">key feature</div>
      <div class="header">
        Works with any language
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        Our design conforms to the “dumb pipes, smart endpoints” principle.  The agent doesn’t execute code, so you can use any programming language as long as the right execution environment is installed on the machine.
      </div>
      <div class="blurb-1 blurb-text">
        Agents assist with execution by passing in variables, arguments and artifacts at runtime.  They also set up and tear down the execution environment using environment variables.
      </div>
      <div class="blurb-1 blurb-text">
        Because the agent can receive and send variables you can maintain state in your job.  This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages.
      </div>

      <div class="section-break"></div>

      <div class="section-title">key feature</div>
      <div class="header">
        Provides all the infrastructure
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        Saas glue provides all the job infrastructure.  The cloud platform initiates jobs when triggered by schedules or API calls.  It manages the job route based on your design.  It monitors the job and sends alerts when there’s a failure.
      </div>
      <div class="blurb-1 blurb-text">
        Our lightweight agent is self-updating, placing very little management burden on you.
      </div>
      <div class="blurb-1 blurb-text">
        Saas glue takes care of the automation infrastructure and lets you focus on your code.
      </div>

      <div class="section-break"></div>

      <div class="section-title">key feature</div>
      <div class="header">
        Scalable platform
      </div>
      <br><br>
      <div class="blurb-1 blurb-text">
        Saas glue is designed to scale horizontally to handle enterprise workloads.  Our stateless API lets us scale up workers as needed to ensure that performance remains stable as customer demand grows.
      </div>

    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$header_size: 24px;


.home {
  display: flex;
  margin: 20px;
}

.page-spacer {
  width: 60px;
}

.nav-menu {
  text-align: left;

  position: fixed;
  top: 0;
  width: 95%;

  margin-top: 100px;
}

.nav-header {
  color: black;
  font-size: $header_size;
  color: $sg_text_bolder;
  margin-bottom: 6px;
}

.nav-link {
  font-size: $sg_text_size;
  margin-left: 8px;
  padding-bottom: 6px;
  padding-top: 6px;
  padding-left: 10px;
  border-left-style: solid;
  border-left-width: 4px;
  border-left-color: $sg_light;
}

.nav-link-selected {
  border-left-color: $sg_color;
}

.nav-link-spacer {
  height: 20px;
}

.main-body {
  text-align: left;
  margin-left: 300px;
  margin-top: 40px;
}

.section-title {
  text-transform: uppercase;
  font-size: calc(#{$sg_text_size} * .75);
  margin-bottom: 10px;
}

.header {
  color: black;
  font-size: $sg_text_size_header;
}

.blurb-1 {
  max-width: 800px;
  margin-bottom: calc(#{$sg_text_size});
}

.blurb-text {
  font-size: $sg_text_size;
  line-height: calc(#{$sg_text_size} * 1.75);
}

.section-break {
  height: calc(#{$sg_text_size} * 4);
}

li {
  list-style-type: none;
  background-image: url('~@/assets/GreenCheckbox.png');
  background-repeat: no-repeat;
  background-position: 0 10px;
  padding-left: calc(#{$sg_text_size} * 2);
  margin-bottom: calc(#{$sg_text_size} * .5);
}

.col-blurb {
  display: flex;
}

.col-blurb-title {
  font-size: calc(#{$sg_text_size} * 1.75);
  color: black;
  margin-bottom: 12px;
}

.col-blurb-body {
  max-width: 300px;
  margin-right: 40px;
}

.col-blurb-line {
  margin-left: 40px;
}

.col-blurb-body-line {
  border-left-style: solid;
  border-left-width: 3px;
  border-left-color: $sg_border_color;
  padding-left: 40px;
}

.col-blurb-p {
  margin-bottom: calc(#{$sg_text_size});
}

.bold-text {
  font-weight: 700;
}

</style>
