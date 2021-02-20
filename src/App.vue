<template>
  <div id="app">
    <div>
      <div class="top-nav">
        <a class="nav-link logo" href=""><img src="logo_1.png"></a>
        <span class="spacer"></span>
        <a class="nav-link selected" href="">Home</a>
        <a class="nav-link" href="">Getting Started</a>
        <a class="nav-link" href="">Pricing</a>
        <a class="nav-link" href="">Resources</a>
        <a class="nav-link" href="">Blog</a>

        <span class="center-spacer"></span>
        <span class="nav-link">
          <button class="button dark-button">Try for Free</button>
        </span>
        <span class="nav-link">
          <button class="button light-button">Sign In</button>
        </span>
      </div>
    </div>

    <div class="main-body">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">


#app {
  font-family: 'Noto Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $sg_text;
  scroll-behavior: smooth;
}

a {
  color: $sg_text;
  text-decoration: none; /* no underline */
}

.top-nav {
  display: flex;

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

  padding-top: 14px;
  padding-bottom: 14px;

  padding-left: 18px;
  padding-right: 24px;

	box-shadow: 0 4px 6px -6px gray;
  
  .nav-link {
    margin-left: 22px;
    font-size: $sg_text_size;
  }

  .logo {
    margin-top: -7px;
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

.main-body {
  margin-top: 90px;
}

</style>
