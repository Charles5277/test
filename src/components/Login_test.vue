<template>
  <div class="login-page">
    <div class="banner">
      <img src="@/assets/BigByteLogo.png" alt="" class="logo-bigbyte" />
    </div>
    <div class="context">
      <img src="@/assets/func_language.png" alt="" class="func-language" />
      <div class="login-form"></div>
      <div class="notice-board"></div>
      <p><strong>text</strong></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    props: {
      bigByteLogo: {
        type: String,
        default: '@/assets/BigByteLogo.png',
      },
      funcLanguage: {
        type: String,
        default: '@/assets/func_language.png',
      },
    },
  };
</script>

<style lang="scss" scoped>
  // This is the project stylesheet

  // Colors
  $aquamarine: rgba(128, 238, 238, 1);
  $silver: rgba(184, 194, 186, 1);
  $transparent-medium-aquamarine: rgba(94, 185, 185, 0.35);
  $white: rgba(255, 255, 255, 1);
  .login-page {
    margin: 0 auto;
    width: 1920px;
    height: 1080px;
    background-color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .banner {
    background-color: $aquamarine;
    overflow: hidden;
    border-radius: 1px;
    padding: 0 746px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 162px;
    align-self: stretch;
  }
  .logo-bigbyte {
    width: 389px;
    height: 141px;
  }
  .context {
    background-color: $transparent-medium-aquamarine;
    padding: 25px 110px 84px 25px;
    display: flex;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
  }
  .func-language {
    width: 67.95px;
    height: 65px;
    margin-right: 127.05px;
  }
  .login-form {
    width: 406px;
    height: 570px;
    background-color: $white;
    margin-top: 59px;
    margin-right: 256px;
    padding: 90px 39px;
  }
  .notice-board {
    width: 850px;
    height: 750px;
    background-color: $silver;
    margin-top: 59px;
    border-radius: 1px;
  }
</style>
