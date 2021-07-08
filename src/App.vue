<template>
  <div id="app">
    <div>
      <div class="desktop-menu">
        <router-link to="/"><img src="~@/assets/logo4.png" class="logo"></router-link>
        <span class="spacer"></span>

        <router-link to="/" class="nav-link" :class="{selected: isRouterLinkActive('/')}">Home</router-link>
        <router-link to="/GettingStarted" class="nav-link" :class="{selected: isRouterLinkActive('/GettingStarted')}">Getting Started</router-link>
        <router-link to="/Pricing" class="nav-link" :class="{selected: isRouterLinkActive('/Pricing')}">Pricing</router-link>
        <router-link to="/Docs" class="nav-link" :class="{selected: isRouterLinkActive('/Docs')}">Docs</router-link>

        <router-link to="/Community" class="nav-link" :class="{selected: isRouterLinkActive('/Community')}">Community</router-link>


        <a class="nav-link" href="https://saasglue.blogspot.com/">Blog</a>

        <span class="center-spacer"></span>
        <span class="nav-link">
          <div class="button-container"><a href="https://console.saasglue.com" class="button dark-button">Try for Free</a></div>
        </span>
        <span class="nav-link">
          <div class="button-container"><a href="https://console.saasglue.com" class="button light-button">Sign In</a></div>
        </span>
      </div>
    </div>

    <div class="burger-menu">
      <span class="left-menu">
        <a href="" class="main-nav-link"  @click.prevent="hideBurgerPopup = !hideBurgerPopup">
          <img src="~@/assets/HamburgerLines.png" width="30px;">
        </a>
        <a class="nav-link logo" href="">
          <img width="150px" 
                style="margin-left: 15px; margin-top: -5px;" 
                src="~@/assets/logo4.png">
        </a>
      </span>
      <span class="right-menu">
        <a href="https://console.saasglue.com" class="button dark-button">Try for Free</a>
      </span>
    </div>

    <div v-cloak class="popup" :hidden="hideBurgerPopup">
      <div class="popup-content" style="width: 240px;">
        <div class="popup-close">
          <div class="popup-close-x">
            <a href="" style="color: black; font-size: 24px;" @click.prevent="hideBurgerPopup = !hideBurgerPopup">
              x
            </a>
          </div>
        </div>
        <div class="burger-popup-links">
          <div class="burger-popup-links-left-aligned">            
            <router-link to="/" class="burger-popup-link" @click.native="hideBurgerPopup=true">Home</router-link>            
            <router-link to="/GettingStarted" class="burger-popup-link" @click.native="hideBurgerPopup=true">Getting Started</router-link>
            <router-link to="/pricing" class="burger-popup-link" @click.native="hideBurgerPopup=true">Pricing</router-link>
            <router-link to="/docs" class="burger-popup-link" @click.native="hideBurgerPopup=true">Docs</router-link>
            <router-link to="/community" class="burger-popup-link" @click.native="hideBurgerPopup=true">Community</router-link>
            
            <a class="burger-popup-link" href="https://saasglue.blogspot.com/">Blog</a>
            <span class="burger-popup-spacer"></span>
            <a href="https://console.saasglue.com" class="burger-popup-link round-button">
              Login
              <span style="font-size: 16px; font-weight: 300;">
                >
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="main-body">
      <router-view/>
    </div>

    <div class="footer">
      &#169; 2021, SaaSGlue LLC​
      <router-link to="/ContactUs" class="nav-link inline-link" style="margin-left: 20px;">Contact Us</router-link>
    </div>

  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private hideBurgerPopup = true;

  private isRouterLinkActive(path: string): boolean {
    return this.$router.currentRoute.path === path;
  }
}
</script>

<style lang="scss">

.logo {
  height: 30px;
}

/* Mobile */
@media (max-width: 1230px) {
  .logo {
    margin-top: 5px;
  }

  .desktop-menu {
    display: none;
  }

  .burger-menu {
    display: flex;
  }

  .main-body {
    margin-top: 40px;
  }
}

/* Desktop */
@media (min-width: 1230px) {
  .desktop-menu {
    display: flex;
  }

  .burger-menu {
    display: none;
  }

  .main-body {
    margin-top: 90px;
  }
}

#app {
  font-family: 'Noto Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $sg_text;
  scroll-behavior: smooth;
  width: 100%;
}

a {
  color: $sg_text;
  text-decoration: none; /* no underline */
}

.desktop-menu {
  position: fixed;
  top: 0;
  width: 95%;

  background-color: white;

  border-style: solid;
  border-color: lightgray;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  box-shadow: 0 4px 6px -6px gray;

  padding-top: 14px;
  padding-bottom: 14px;

  padding-left: 18px;
  padding-right: 24px;
  
  .nav-link {
    margin-left: 22px;
    font-size: $sg_text_size;
  }

  .selected {
    border-bottom-style: solid;
    color: $sg_text_bolder;
    border-color: rgb(92, 157, 243);
  }

  .spacer {
    width: 40px;
  }

  .center-spacer {
    flex-grow: 1;
  }
}

.burger-menu {
  position: fixed;
  top: 0;
  width: 93%;

  background-color: white;

  border-style: solid;
  border-color: lightgray;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  box-shadow: 0 4px 6px -6px gray;

  padding: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  justify-content: space-between;

  .left-menu {
    display: flex;
    margin-top: 6px;
  }

  .right-menu {
    display: flex;
  }
}

.popup {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.5);
}

.hidden {
  display: none;
}

.popup-close {
  position: relative;
  margin-bottom: 20px;
}

.popup-close-x {
  position: absolute;
  top: 0px;
  right: 0px;
}

.popup-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  border-radius: 10px;
}

.burger-popup-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  margin-top: 25px;
  margin-bottom: 50px;
}

.burger-popup-links-left-aligned {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

.burger-popup-link {
  color: black;
  margin-top: 15px;
  font-size: 20px;
}

.header {
  color: black;
  font-size: $sg_text_size_header;
}

.button-container {
  margin-top: 5px;
}

.button {
  border-radius: 5px;
  border-style: none;
  font-size: $sg_text_size;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
}

.button:hover {
  cursor: pointer;
}

.light-button {
  color: $sg_color;
}

.dark-button {
  background-color: $sg_color;
  color: white;
}

.footer{
  margin-top: 100px;
  margin-bottom: 15px;
}

.inline-link {
  color: $sg_color;
}

</style>
