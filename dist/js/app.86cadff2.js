(function(t){function e(e){for(var s,l,n=e[0],o=e[1],c=e[2],u=0,d=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);b&&b(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function l(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7bf7101c"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=l(t);var c=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var b=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"552a":function(t,e,a){"use strict";a("a70f")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5d2f":function(t,e,a){t.exports=a.p+"img/JobStructure1.6046872b.png"},8988:function(t,e,a){t.exports=a.p+"img/Architecture1.37284170.png"},"9c0c":function(t,e,a){},a70f:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"main-body"},[a("router-view")],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-nav"},[a("a",{staticClass:"nav-link logo",attrs:{href:""}},[a("img",{attrs:{src:"logo_1.png"}})]),a("span",{staticClass:"spacer"}),a("a",{staticClass:"nav-link selected",attrs:{href:""}},[t._v("Home")]),a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Getting Started")]),a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Pricing")]),a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Resources")]),a("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Blog")]),a("span",{staticClass:"center-spacer"}),a("span",{staticClass:"nav-link"},[a("div",{staticClass:"button-container"},[a("a",{staticClass:"button dark-button",attrs:{href:"https://console.saasglue.com"}},[t._v("Try for Free")])])]),a("span",{staticClass:"nav-link"},[a("div",{staticClass:"button-container"},[a("a",{staticClass:"button light-button",attrs:{href:"https://console.saasglue.com"}},[t._v("Sign In")])])])])])}],l=(a("5c0b"),a("2877")),n={},o=Object(l["a"])(n,r,i,!1,null,null,null),c=o.exports,u=(a("d3b7"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"nav-menu"},[a("div",{staticClass:"nav-header"},[t._v("Saas Glue")]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-overview"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("overview")}}},[t._v("Overview")])]),a("div",{staticClass:"nav-link-spacer"}),a("div",{staticClass:"nav-header"},[t._v("Key Features")]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-integrates"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("integrates")}}},[t._v("Integrates with other solutions")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-anywhere"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("anywhere")}}},[t._v("Works virtually anywhere")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-language"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("language")}}},[t._v("Works with any language")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-infrastructure"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("infrastructure")}}},[t._v("Provides all the infrastructure")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-scalable"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("scalable")}}},[t._v("Scales horizontally")])]),a("div",{staticClass:"nav-link-spacer"}),a("div",{staticClass:"nav-header"},[t._v("How it Works")]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-architecture"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("architecture")}}},[t._v("Platfom architecture")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-structure"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("structure")}}},[t._v("Job structure")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-management"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("management")}}},[t._v("Job management")])]),a("div",{staticClass:"nav-link",class:{"nav-link-selected":"scroll-target-state"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("state")}}},[t._v("Job state")])]),a("div",{staticClass:"nav-link-spacer"}),a("div",{staticClass:"nav-header",class:{"nav-link-selected":"scroll-target-signup"===t.activeScrollTargetId}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollTo("signup")}}},[t._v("Sign Up")])])]),a("div",{staticClass:"page-spacer"}),t._m(0)])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-body scroll-area"},[s("div",{staticClass:"header",attrs:{id:"scroll-target-overview"}},[t._v(" Saas glue in a nutshell ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Our unique automation approach decouples job management from code execution. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Jobs are managed in the cloud where all of the code is stored. At runtime, tasks are distributed to machines for execution through agents, which you install. Agents collect all output and return it the the cloud where it is assembled into a complete job record. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" With saas glue you can work with all of your machines using any set of programming languages to do pretty much anything. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Here is our rule of thumb: If you can do something from the local command prompt you can do it the same way in saas glue through our method of delivering code to the computing environment. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"col-blurb"},[s("div",[s("div",{staticClass:"col-blurb-title"},[t._v(" Integration ")]),s("div",{staticClass:"col-blurb-body"},[s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Run code on any device in any network permitting outgoing HTTPS ")]),s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Run scripts and compiled code in any language ")]),s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Run Function-as-a-Service code in the cloud ")])])]),s("div",[s("div",{staticClass:"col-blurb-title col-blurb-line"},[t._v(" Orchestration ")]),s("div",{staticClass:"col-blurb-body col-blurb-body-line"},[s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Create multi-step jobs with conditional path routing ")]),s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Run jobs in multi-cloud and hybrid-cloud environments ")]),s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Centrally monitor distributed jobs ")])])]),s("div",[s("div",{staticClass:"col-blurb-title col-blurb-line"},[t._v(" Automation ")]),s("div",{staticClass:"col-blurb-body col-blurb-body-line"},[s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Start jobs from a schedule, with the API or from the web console ")]),s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Pass variables between tasks in multi-language jobs ")]),s("div",{staticClass:"col-blurb-p blurb-text"},[t._v(" Import and centralize your cron jobs ")])])])]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title"},[t._v("key feature")]),s("div",{staticClass:"header"},[t._v(" Fill the gaps in your automation infrastructure ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure ")]),s("div",{staticClass:"blurb-1 blurb-text"},[s("ul",[s("li",{staticClass:"checked-li"},[t._v(" Integrates with all other platforms through a cloud API ")]),s("li",{staticClass:"checked-li"},[t._v(" Works in any network that allows outgoing HTTPS to the secure sg cloud ")]),s("li",{staticClass:"checked-li"},[t._v(" Works with any set of programming languages ")]),s("li",{staticClass:"checked-li"},[t._v(" No add-on components to install and manage ")]),s("li",{staticClass:"checked-li"},[t._v(" Scales horizontally to handle enterprise workloads ")])])]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-integrates"}},[t._v("key feature")]),s("div",{staticClass:"header"},[t._v(" Integrates with other solutions ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Using secure credentials you can invoke jobs through the API from any platform. Saas glue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Because saas glue works with anything you can augment your current solutions without having to rip and replace anything. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" [cloud logo] ")]),s("div",{staticClass:"blurb-1 blurb-text bold-text"},[t._v(" Jenkins, Ansible, Terraform, Chef, Puppet, Salt Stack, Git Lab, AWS, GCP, Azure DevOps, etc. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-anywhere"}},[t._v("key feature")]),s("div",{staticClass:"header"},[t._v(" Works virtually anywhere ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" When the saas glue agent is installed, it immediately calls home to the cloud and establishes a regular heartbeat through HTTPS. The agent receives instructions from a message queue and sends results to the API. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" This simple design lets the agent work on almost any network. And since agents talk only to the cloud, your job can hop from one network to another without regard to network boundaries. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-language"}},[t._v("key feature")]),s("div",{staticClass:"header"},[t._v(" Works with any language ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Our design conforms to the “dumb pipes, smart endpoints” principle. The agent doesn’t execute code, so you can use any programming language as long as a corresponding interpreter exists on the agent host machine. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Agents assist with execution by passing in variables, arguments and artifacts to the runtime environment. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue’s runtime variables functionality allows you to communicate state between tasks in your job. This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-infrastructure"}},[t._v("key feature")]),s("div",{staticClass:"header"},[t._v(" Provides all the infrastructure ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue provides all the job infrastructure to "),s("ul",[s("li",{staticClass:"checked-li"},[t._v(" Initiate ")]),s("li",{staticClass:"checked-li"},[t._v(" Manage ")]),s("li",{staticClass:"checked-li"},[t._v(" Monitor ")]),s("li",{staticClass:"checked-li"},[t._v(" Alert ")])])]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Our lightweight agent is self-updating, placing very little management burden on you. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue takes care of the automation infrastructure and lets you focus on your code. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-scalable"}},[t._v("key feature")]),s("div",{staticClass:"header"},[t._v(" Scalable platform ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue scales horizontally to handle enterprise workloads. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-architecture"}},[t._v("how")]),s("div",{staticClass:"header"},[t._v(" Platform architecture ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue has two main components "),s("ul",[s("li",[t._v(" SaaS platform ")]),s("li",[t._v(" Agent ")])])]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" The "),s("b",[t._v("platform’s")]),t._v(" main responsibility is job management. "),s("ul",[s("li",[t._v(" Hold job designs and code files ")]),s("li",[t._v(" Initiate job when triggered manually or by a schedule or API call ")]),s("li",[t._v(" Distribute tasks to agents for execution ")]),s("li",[t._v(" Manage routing between tasks ")]),s("li",[t._v(" Receive task results from agents and aggregate it in a job record ")]),s("li",[t._v(" Send alerts ")])])]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" The "),s("b",[t._v("agent’s")]),t._v(" main responsibility is task management. "),s("ul",[s("li",[t._v(" Receive tasks and pass code files to the interpreter ")]),s("li",[t._v(" Prepare the execution environment ")]),s("li",[t._v(" Report the tail during code execution ")]),s("li",[t._v(" Send code output to the platform ")]),s("li",[t._v(" Clean up the execution environment ")])])]),s("div",{staticClass:"blurb-1 blurb-text"},[s("img",{attrs:{width:"600",src:a("8988")}})]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-structure"}},[t._v("how")]),s("div",{staticClass:"header"},[t._v(" Job structure ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Jobs are composed of tasks, steps and scripts. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[s("img",{attrs:{width:"600",src:a("5d2f")}})]),s("div",{staticClass:"blurb-1 blurb-text"},[s("b",[t._v("Jobs")]),t._v(" can have multiple tasks. The job definition contains the code files, variables, arguments and artifacts as well as instructions for agent targeting and task routing. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" You can schedule jobs with a cron type scheduler or initiate them through an API call. Multiple schedules can be attached to a job. You can also run a job manually through the web console. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[s("b",[t._v("Tasks")]),t._v(" can have multiple steps. The steps of a task run in sequence on the same machine. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[s("b",[t._v("Agents")]),t._v(" can be targeted for tasks by name or user generated tags. You create tags in the form of key value pairs (i.e. os=linux) and assign them to agents. Using tags you can qualify groups of agents to run a task. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[s("b",[t._v("Steps")]),t._v(" can have only one script. The step holds command line arguments and environment variables needed for script execution. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-management"}},[t._v("how")]),s("div",{staticClass:"header"},[t._v(" Job routes ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" You can create variable routes within a job using your code output to determine the route. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" There are two routing types--inbound and outbound. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" With inbound routes you declare which task the job will route to next based on specified output received in prior tasks. The expected path of a job will most commonly be defined with inbound routes. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Outbound routes let you specify a task to execute based on a specific outcome of a current task. For instance, if there is a failure in the current task you can route to a recovery task to get your job back on track. ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-state"}},[t._v("how")]),s("div",{staticClass:"header"},[t._v(" Job state ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Saas glue is stateless to make it scalable, but your jobs can be stateful. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" You can insert variables into scripts and extract them out using a light touch syntax that is understood by the agent and platform API. In saas glue these are referred to as “runtime variables”. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" @sgg stands for “saas glue global”. Inserting this syntax into any script tells the agent where to insert a variable before passing it to the interpreter for execution. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" @sgo stands for “saas glue out”. Inserting it into your script alerts the agent to extract the variable and send it back to the API for use in other tasks within the job. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" This method lets you keep state even in a polyglot job because the scripts and execution environments are decoupled. [LINK TO DOCUMENTATION SYNTAX PAGE] ")]),s("div",{staticClass:"section-break"}),s("div",{staticClass:"section-title",attrs:{id:"scroll-target-signup"}},[t._v("sign up")]),s("div",{staticClass:"header"},[t._v(" Sign Up ")]),s("br"),s("br"),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" If you find yourself having to work around limitations in your current automation platforms try using saas glue. You can get started [LINK TO GETTING STARTED] in as little as five minutes and running scripts from the cloud console is free. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[t._v(" Sign up today and see how saas glue can fill your process automation gaps. ")]),s("div",{staticClass:"blurb-1 blurb-text"},[s("div",{staticClass:"button-container"},[s("a",{staticClass:"button dark-button",attrs:{href:"https://console.saasglue.com"}},[t._v("Try for Free")])])]),s("div",{staticClass:"bottom-padding"})])}],v=(a("d81d"),a("159b"),a("d4ec")),h=a("bee2"),g=a("262e"),f=a("2caf"),p=a("9ab4"),m=a("1b40"),C=function(t){Object(g["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;return Object(v["a"])(this,a),t=e.apply(this,arguments),t.activeScrollTargetId="scroll-target-overview",t}return Object(h["a"])(a,[{key:"mounted",value:function(){var t={root:null,rootMargin:"0px 0px -80% 0px",threshold:1};this.scrollTargets=["overview","integrates","anywhere","language","infrastructure","scalable","architecture","structure","management","state"].map((function(t){return document.getElementById("scroll-target-".concat(t))}));var e=new IntersectionObserver(this.onIntersected,t);this.scrollTargets.map((function(t){t&&e.observe(t)}))}},{key:"onIntersected",value:function(t,e){var a=this;t.forEach((function(t){console.log(t.target.id),t.isIntersecting&&(a.activeScrollTargetId=t.target.id)}))}},{key:"scrollTo",value:function(t){var e=document.getElementById("scroll-target-".concat(t)),a=25,s=document.body.getBoundingClientRect().top,r=null===e||void 0===e?void 0:e.getBoundingClientRect().top;if(r){var i=r-s,l=i-a;window.scrollTo({top:l,behavior:"smooth"})}}}]),a}(m["b"]);C=Object(p["a"])([m["a"]],C);var _=C,y=_,k=(a("552a"),Object(l["a"])(y,b,d,!1,null,"1343f522",null)),w=k.exports;s["a"].use(u["a"]);var x=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],T=new u["a"]({routes:x}),S=T,j=a("2f62");s["a"].use(j["a"]);var I=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:S,store:I,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.86cadff2.js.map