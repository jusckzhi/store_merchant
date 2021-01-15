<template>
  <div class="home">
    <div class="title">我的店铺</div>
    <div class="store_info">
      <div class="name">
        <img class="name_logo" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg" />
        <div class="name_cont">便民服务小店</div>
        <div class="iconfont icongengduo"></div>
      </div>
      <div class="journal">

      </div>
    </div>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="stylus">
.home 
  min-height 100vh
  background linear-gradient(to bottom,#61a4ff 0%, #f5f7fa 40%,#f5f7fa 50%);
  .title
    padding 0.15rem 0
    text-align center
    font-size 0.18rem
    color #ffffff
  .store_info
    width 3.45rem
    height 1.44rem
    margin 0 auto
    border-radius: 0.06rem;
    background #fff
    .name
      display flex
      align-items center
      justify-content space-between
      font-size 0.18rem
      padding 0.15rem
      border-bottom 0.01rem solid #e3e6f2
      .name_logo
        width 0.4rem
        height 0.4rem
        border-radius 0.04rem
        margin-right 0.1rem
      .name_cont
        flex 1
        font-size 0.18rem
      .icongengduo
        color #6d7284
        font-size 0.28rem
</style>
