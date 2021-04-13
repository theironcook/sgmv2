<template>
  <div>
    
    <div class="mobile-jump">
      <div class="jump-button-container">
        <button class="button light-button" @click="mobileShowNavMenu = true">
          Jump To >
        </button>
      </div>
    </div>

    <div class="home">
      <div class="nav-menu" v-if="screenWidth > 1230 || mobileShowNavMenu">
        <div class="nav-header" id="scroll-target-home">SaasGlue</div>
        <div class="nav-link" 
            :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-overview'}">
            <a href="" @click.prevent="scrollTo('overview')">Overview</a>
        </div>
        
        <div class="nav-link-spacer"></div>

        <div class="nav-header">Key Features</div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-integrates'}">
          <a href="" @click.prevent="scrollTo('integrates')">Integrates with other solutions</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-anywhere'}">
          <a href="" @click.prevent="scrollTo('anywhere')">Works virtually anywhere</a>    
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-language'}">
          <a href="" @click.prevent="scrollTo('language')">Works with any language</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-infrastructure'}">
          <a href="" @click.prevent="scrollTo('infrastructure')">Provides all the infrastructure</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-scalable'}">
          <a href="" @click.prevent="scrollTo('scalable')">Scales horizontally</a>
        </div>

        <div class="nav-link-spacer"></div>

        <div class="nav-header">How it Works</div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-architecture'}">
          <a href="" @click.prevent="scrollTo('architecture')">Platfom architecture</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-structure'}">
          <a href="" @click.prevent="scrollTo('structure')">Job structure</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-routes'}">
          <a href="" @click.prevent="scrollTo('routes')">Job routes</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-state'}">
          <a href="" @click.prevent="scrollTo('state')">Job state</a>
        </div>
        <div class="nav-link"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-security'}">
          <a href="" @click.prevent="scrollTo('security')">Security</a>
        </div>

        <div class="nav-link-spacer"></div>

          <div class="nav-header"
              :class="{'nav-link-selected': activeScrollTargetId === 'scroll-target-signup'}">
          <a href="" @click.prevent="scrollTo('signup')">Sign Up</a>
        </div>
      </div>

      <div class="page-spacer"></div>
      
      <div class="main-body">

        <div class="header" id="scroll-target-overview">
          Cloud based workflow manager 
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          SaasGlue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure
        </div>

        <div class="blurb-1 blurb-text">
          <ul>
            <li class="checked-li">
              Design and run workflows through the SaasGlue API
            </li>
            <li class="checked-li">
              Seamlessly orchestrate workflows across on-prem and multi-cloud environments
            </li>
            <li class="checked-li">
             Leverage your existing code written in any language
            </li>
            <li class="checked-li">
              Leverage your existing automation and workflow tools
            </li>
            <li class="checked-li">
              Scales horizontally to handle enterprise workloads
            </li>
          </ul>
        </div>

        <div class="section-break"></div>

        <div class="col-blurb-container">
          <div class="col-blurb">
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
          <div class="col-blurb">
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
          <div class="col-blurb">
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

        <div class="header">
          The innovation twist
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Other platforms adapt external tools to themselves by wrapping them in layers of abstraction.  Each new tool requires another layer in order to be accessible to the platform.  For example many automation platforms have domain specific languages used to encode desired state instructions.  These abstractions tend to leak over time and require imperative solutions to fill the gaps.
        </div>
        <div class="blurb-1 blurb-text">
          Saas glue works with everything else by decoupling job management from code execution.  Job designs, including code files, are stored centrally.  At runtime code is delivered to the computing environment through agents, which you install on your machines.
        </div>
        <div class="blurb-1 blurb-text">
          This design gives you the freedom to access all of your compute endpoints directly without abstraction layers and with the power of centrally managed jobs.
        </div>
        <div class="blurb-1 blurb-text">
          Here is our rule of thumb: If you can do something from the local command prompt you can do it the same way in SaasGlue. 
        </div>

        <div class="section-break"></div>

        <div class="blurb-1 blurb-text bold-text">
          What makes SaasGlue different?
        </div>

        <div class="blurb-1 blurb-text">
          <ul>
            <li class="checked-li">
              No servers, masters, slaves, nodes or clusters
            </li>
            <li class="checked-li">
              No plugins, modules or add-on components
            </li>
            <li class="checked-li">
              No platform to install, configure and maintain
            </li>
            <li class="checked-li">
              No updates that can break your pipeline
            </li>
            <li class="checked-li">
              No need to rip and replace other infrastructure
            </li>
          </ul>
        </div>
        

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-integrates">key feature</div>
        <div class="header">
          Integrates with other solutions
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Using secure credentials you can invoke jobs through the SaasGlue API from any platform.  Saas glue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.
        </div>
        <div class="blurb-1 blurb-text">
          Because SaasGlue works with anything you can augment your current solutions without having to rip and replace anything.
        </div>
        <div class="blurb-1 blurb-text">
          <img class="blurb-image" src="~@/assets/IntegratedProducts.png">
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-anywhere">key feature</div>
        <div class="header">
          Works virtually anywhere
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          When the SaasGlue agent is installed, it immediately calls home to the cloud and establishes a regular secure heartbeat through HTTPS.  The agent receives instructions from a message queue and sends results to the API.
        </div>
        <div class="blurb-1 blurb-text">
          This simple design lets the agent work on almost any network.  And since agents talk only to the cloud, your job can hop from one network to another without regard to network boundaries.
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-language">key feature</div>
        <div class="header">
          Works with any language
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Our design conforms to the “dumb pipes, smart endpoints” principle.  The agent doesn’t execute code, so you can use any programming language as long as a corresponding interpreter exists on the agent host machine.
        </div>
        <div class="blurb-1 blurb-text">
          Agents assist with execution by passing in variables, arguments and artifacts to the runtime environment.  
        </div>
        <div class="blurb-1 blurb-text">
          Saas glue’s runtime variables functionality allows you to communicate state between tasks in your job.  This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages.
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-infrastructure">key feature</div>
        <div class="header">
          Provides all the infrastructure
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Saas glue provides all the job infrastructure to 
          <ul>
            <li class="checked-li">
              Initiate
            </li>
            <li class="checked-li">
              Manage
            </li>
            <li class="checked-li">
              Monitor
            </li>
            <li class="checked-li">
              Alert
            </li>
          </ul>
        </div>
        <div class="blurb-1 blurb-text">
          Our lightweight agent is self-updating, placing very little management burden on you.
        </div>
        <div class="blurb-1 blurb-text">
          Saas glue takes care of the automation infrastructure and lets you focus on your code.
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-scalable">key feature</div>
        <div class="header">
          Scalable platform
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Saas glue scales horizontally to handle enterprise workloads.
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-architecture">how</div>
        <div class="header">
          Platform architecture
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Saas glue has two main components
          <ul>
            <li>
              SaaS platform
            </li>
            <li>
              Agent
            </li>
          </ul>
        </div>
        <div class="blurb-1 blurb-text">
          The <b>platform’s</b> main responsibility is job management. 
          <ul>
            <li>
              Hold job designs and code files
            </li>
            <li>
              Initiate job when triggered manually or by a schedule or API call
            </li>
            <li>
              Distribute tasks to agents for execution
            </li>
            <li>
              Manage routing between tasks
            </li>
            <li>
              Receive task results from agents and aggregate it in a job record
            </li>
            <li>
              Send alerts
            </li>
          </ul>
        </div>
        <div class="blurb-1 blurb-text">
          The <b>agent’s</b> main responsibility is task management.
          <ul>
            <li>
              Receive tasks and pass code files to the interpreter
            </li>
            <li>
              Prepare the execution environment 
            </li>
            <li>
              Report the tail during code execution
            </li>
            <li>
              Send code output to the platform
            </li>
            <li>
              Clean up the execution environment
            </li>
          </ul>
        </div>
        <div class="blurb-1 blurb-text">
          <img class="blurb-image" src="~@/assets/Architecture1.png">
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-structure">how</div>
        <div class="header">
          Job structure
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Jobs are composed of tasks, steps and scripts.
        </div>
        <div class="blurb-1 blurb-text">
          <img class="blurb-image" src="~@/assets/JobStructure1.png">
        </div>
        <div class="blurb-1 blurb-text">
          <b>Jobs</b> can have multiple tasks.  The job definition contains the code files, variables, arguments and artifacts as well as instructions for agent targeting and task routing.
        </div>
        <div class="blurb-1 blurb-text">
          You can schedule jobs with a cron type scheduler or initiate them through an API call.  Multiple schedules can be attached to a job.  You can also run a job manually through the web console.
        </div>
        <div class="blurb-1 blurb-text">
          <b>Tasks</b> can have multiple steps.  The steps of a task run in sequence on the same machine. 
        </div>
        <div class="blurb-1 blurb-text">
          <b>Agents</b> can be targeted for tasks by name or user generated tags.  You create tags in the form of key value pairs (i.e. os=linux) and assign them to agents.  Using tags you can qualify groups of agents to run a task.
        </div>
        <div class="blurb-1 blurb-text">
          <b>Steps</b> can have only one script.  The step holds command line arguments and environment variables needed for script execution.
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-routes">how</div>
        <div class="header">
          Job routes
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          You can create variable routes within a job using your code output to determine the route.
        </div>
        <div class="blurb-1 blurb-text">
          There are two routing types--inbound and outbound.
        </div>
        <div class="blurb-1 blurb-text">
          With inbound routes you declare which task the job will route to next based on specified output received in prior tasks.  The expected path of a job will most commonly be defined with inbound routes.
        </div>
        <div class="blurb-1 blurb-text">
          Outbound routes let you specify a task to execute based on a specific outcome of a current task.  For instance, if there is a failure in the current task you can route to a recovery task to get your job back on track.
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-state">how</div>
        <div class="header">
          Job state
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Saas glue is stateless to make it scalable, but your jobs can be stateful.
        </div>
        <div class="blurb-1 blurb-text">
          You can insert variables into scripts and extract them out using a light touch syntax that is understood by the agent and platform API.  In SaasGlue these are referred to as “runtime variables”.
        </div>
        <div class="blurb-1 blurb-text">
          @sgg stands for “saas glue global”.  Inserting this syntax into any script tells the agent where to insert a variable before passing it to the interpreter for execution.
        </div>
        <div class="blurb-1 blurb-text">
          @sgo stands for “saas glue out”.  Inserting it into your script alerts the agent to extract the variable and send it back to the API for use in other tasks within the job.
        </div>
        <div class="blurb-1 blurb-text">
          This method lets you keep state even in a polyglot job because the scripts and execution environments are decoupled. 
        </div>

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-security">how</div>
        <div class="header">
          Security
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          Saas glue never sends in-bound connections to where agents run.
        </div>
        <div class="blurb-1 blurb-text">
          When you create an agent, SaasGlue helps you generate secure Oauth 2.0 tokens only known to you.
        </div>
        <div class="blurb-1 blurb-text">
          Your secure SaasGlue agents securely connect to the SaasGlue cloud with https using your custom oath2.0 tokens.
        </div>
        <div class="blurb-1 blurb-text">
          All communication with the SaasGlue cloud is encrypted, authenticated and authorized only for your account.
        </div>

        <div class="blurb-1 blurb-text">
          The API is configurable to only allow users certain Access Rights to the SaasGlue cloud.
        </div>
        

        <div class="section-break"></div>

        <div class="section-title" id="scroll-target-signup">sign up</div>
        <div class="header">
          Sign Up
        </div>
        <br><br>
        <div class="blurb-1 blurb-text">
          If you find yourself having to work around limitations in your current automation platforms try using SaasGlue.  
          You can <router-link to="/GettingStarted" class="inline-link">get started </router-link> in as little as five minutes and running scripts from the cloud console is free.
        </div>
        <div class="blurb-1 blurb-text">
          Sign up today and see how SaasGlue can fill your process automation gaps.
        </div>
        <div class="blurb-1 blurb-text">
          <div class="button-container"><a href="https://console.saasglue.com" class="button dark-button">Try for Free</a></div>
        </div>

      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  
  private scrollTargets?: (HTMLElement|null)[];
  private activeScrollTargetId = 'scroll-target-overview';
  private mobileShowNavMenu = false;
  private screenWidth = 2000;

  private mounted(){
    const options = {
      root: null,
      rootMargin: '0px 0px -80% 0px',
      threshold: 1
    };

    this.scrollTargets = [ 'home', 'overview', 'integrates', 'anywhere', 'language', 'infrastructure', 'scalable',
                           'architecture', 'structure', 'routes', 'state', 'security' ].map((targetName) => {
      return document.getElementById(`scroll-target-${targetName}`);
    });

    const intersectionObserver = new IntersectionObserver(this.onIntersected, options);

    this.scrollTargets.map((target) => {
      if(target){
        intersectionObserver.observe(target);
      }
    });

    this.onScreenWidthChanged = this.onScreenWidthChanged.bind(this);
    window.addEventListener('resize', this.onScreenWidthChanged);

    this.onScreenWidthChanged();
  }

  private beforeDestroy(){
    window.removeEventListener('resize', this.onScreenWidthChanged);
  }

  private onScreenWidthChanged(){
    this.screenWidth = window.innerWidth;
  }

  private onIntersected(entries: IntersectionObserverEntry[], observer: any){
    entries.forEach((entry) => {
      if (entry.isIntersecting) {  
        this.activeScrollTargetId = entry.target.id;
      }
    });
  }

  private scrollTo(target: string){
    const targetEl = document.getElementById(`scroll-target-${target}`);
    const offset = 25;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetEl?.getBoundingClientRect().top;

    if(elementRect){
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    this.mobileShowNavMenu = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$header_size: 24px;

/* Mobile */
@media (max-width: 1230px) {
  .nav-menu { 
    display: block;
  }

  .jump-button-container {
    position: fixed;
    top: 67px;
    padding-top: 10px;
    padding-bottom: 20px;
    width: 96%;
    background-color: white;
  }

  .mobile-jump {
    display: block;
    margin-top: 80px;
  }

  .nav-menu {
    background-color: white;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    padding: 15px;
    scroll-behavior: auto;
  }

  .main-body {
    margin-top: 60px;
  }

  .col-blurb-container {
    flex-wrap: wrap;
  }

  .col-blurb {
    margin-left: 10px;
    margin-right: 20px;
  }

  .blurb-1 {
    max-width: 350px;
  }

  .blurb-image {
    width: 350px;
  }
}

/* Desktop */
@media (min-width: 1230px) {
  .nav-menu { 
    display: block;
  }

  .mobile-jump {
    display: none;
  }

  .main-body {
    margin-left: 300px;
    margin-top: 20px;
  }

  .col-blurb {
    max-width: 350px;
  }

  .col-blurb-body {
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

  .blurb-1 {
    max-width: 700px;
  }

  .blurb-image {
    width: 700px;
  }
}

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
}

.section-title {
  text-transform: uppercase;
  font-size: calc(#{$sg_text_size} * .75);
  margin-bottom: 10px;
}

.blurb-1 {
  margin-right: 20px;
  margin-bottom: calc(#{$sg_text_size});
}

.blurb-text {
  font-size: $sg_text_size;
  line-height: calc(#{$sg_text_size} * 1.75);
}

.section-break {
  height: calc(#{$sg_text_size} * 4);
}

.checked-li {
  list-style-type: none;
  background-image: url('~@/assets/GreenCheckbox.png');
  background-repeat: no-repeat;
  background-position: 0 10px;
  padding-left: calc(#{$sg_text_size} * 2);
  margin-bottom: calc(#{$sg_text_size} * .5);
}

.col-blurb-container {
  display: flex;
}

.col-blurb-title {
  font-size: calc(#{$sg_text_size} * 1.75);
  color: black;
  margin-bottom: 12px;
}

.col-blurb-p {
  margin-bottom: calc(#{$sg_text_size});
}

.bold-text {
  font-weight: 700;
}

</style>
