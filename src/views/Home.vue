<template>
  <div class="home">
    <div class="home_title">我的店铺</div>
    <!-- 店铺信息 -->
    <div class="store_info">
      <router-link to="/store_detail">
        <div class="name">
          <img class="name_logo" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg" />
          <div class="name_cont">便民服务小店</div>
          <div class="iconfont icongengduo"></div>
        </div>
      </router-link>
      <div class="journal">
        <div class="income">
          <div class="income_number">{{income}}</div>
          <div class="income_title">今日收入</div>
        </div>
        <div class="order">
          <div class="order_number">{{order}}</div>
          <div class="order_title">今日订单</div>
        </div>
      </div>
    </div>
    <!-- 工具 -->
    <ul class="tool">
      <li class="tool_item" v-for="(item,index) in toolList" :key="index">
        <router-link class="link" :to="item.url">
          <img class="icon" :src="item.icon" :alt="item.title">
          <div class="title">{{item.title}}</div>
        </router-link>
      </li>
    </ul>
    <!-- 底部导航 -->
    <div class="foot_nav">
      <div class="order_nav">
        <img class="icon" src="../../../miniProgram/images/patient_mobile.svg" alt="">
        <div class="title">订单管理</div>
      </div>
      <div class="account_nav">
        <img class="icon" src="../../../miniProgram/images/patient_mobile.svg" alt="">
        <div class="title">我的账户</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      income:888.88,
      order:88,
      toolList:[
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'店铺装修',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'商品管理',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'添加商品',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'营销活动',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'专题模块',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'会员管理',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'消息中心',
          url:'/about'
        },
        {
          icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307310462,3757846532&fm=26&gp=0.jpg',
          title:'设置',
          url:'/about'
        },
      ]
    }
  },
  methods:{
    bounceNumber(label,num,times){
      let this_ = this
      let targets = num
      let currents = 0
      let time = setInterval(() => {
        currents = currents + Number(Math.floor(Math.random()*10+1)) 
        this_[label]= currents
        if(this_[label]>= targets){
          clearInterval(time)
          this_[label] = targets
        }
      }, times);
    }
  },
  mounted(){
    this.bounceNumber('income',this.income,1)
    this.bounceNumber('order',this.order,50)
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
  // 店铺信息
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
  // 工具
  .tool
    width 3.45rem
    // height 3.15rem
    padding-bottom 0.2rem
    background #ffffff
    border-radius 0.06rem
    margin 0.1rem auto
    display flex
    flex-wrap wrap
    .tool_item
      width 33%
      padding 0.2rem 0 0
      .link
        width 100%
        height 100%
        display flex
        flex-direction column
        align-items center
        .icon
          width 0.42rem
          height 0.42rem
          background #ff717c
          border-radius 50%
          margin-bottom 0.1rem
        .title
          font-size 0.14rem
          font-weight 500
          text-align left
          color #111738
          line-height 0.2rem
  // 底部导航
  .foot_nav
    position fixed
    left  0
    bottom 0
    width 3.75rem
    height 0.5rem
    background #ffffff
    display flex
    align-items center
    justify-content space-around
    .order_nav
      display flex
      align-items center
      justify-content center
      .icon
        width 0.2rem
        height 0.2rem
        margin-right 0.05rem
      .title
        font-size 0.14rem
        font-weight 500
        text-align left
        color #111738
        line-height 0.2rem
    .account_nav
      display flex
      align-items center
      justify-content center
      .icon
        width 0.2rem
        height 0.2rem
        margin-right 0.05rem
      .title
        font-size 0.14rem
        font-weight 500
        text-align left
        color #111738
        line-height 0.2rem


</style>
