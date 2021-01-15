<template>
  <div class="home">
    <div class="home_title">我的店铺</div>
    <div class="store_info">
      <div class="name">
        <img class="name_logo" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg" />
        <div class="name_cont">便民服务小店</div>
        <div class="iconfont icongengduo"></div>
      </div>
      <div class="journal">
        <div class="income">
          <div class="income_number">888.88</div>
          <div class="income_title">今日收入</div>
        </div>
        <div class="order">
          <div class="order_number">88</div>
          <div class="order_title">今日订单</div>
        </div>
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
  .home_title
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
    .journal
      padding 0.15rem
      display flex
      align-items center
      .income
        flex 1
        display flex
        flex-direction column
        align-items center
        border-right 0.01rem solid #e3e6f2
        .income_number
          font-size 0.2rem
          font-weight 600 
          text-align left
          color #61a4ff
          line-height 0.28rem
        .income_title
          font-size 0.14rem
          font-weight 400
          text-align left
          color #111738
          line-height 0.2rem
      .order
        flex 1
        display flex
        flex-direction column
        align-items center
        .order_number
          font-size 0.2rem
          font-weight 600
          text-align left
          color #61a4ff
          line-height 0.28rem
        .order_title
          font-size 0.14rem
          font-weight 400
          text-align left
          color #111738
          line-height 0.2rem

</style>
