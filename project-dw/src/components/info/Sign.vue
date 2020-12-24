<template>
<div class="sign-all">
    <mt-header title="党员信息表">
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="sign-bg"></div>
    <div class="sign-content">
        <div class="sign-person"></div>
        <div class="sign-word">
            <span class="sign-word-1">党员信息表</span>
            <span class="sign-word-2">请相关人员认真填写</span>
        </div>
        <router-link to="/fill" class="sign-btn">开始填写</router-link>
    </div>
</div>
</template>

<script>

export default {
    
}
</script>
 
 
<style > 
    .sign-all {
        background-color: #F7F7F7;
        height: 100vh;
    }
    .sign-content {
        margin-top: 3.75rem;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
   
    .sign-person {
        margin: auto;
        width: 6rem;
        height: 6rem;
        border-radius: 3rem;
         overflow: hidden; 
        /* background: no-repeat; */
        background-position: -8.5rem -2rem; 
         background-image: url('../../assets/image/person.png');
    }
    
    .sign-word {
        display: flex;
        flex-direction: column;
    }
    .sign-word-1 {
        text-align: center;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 28px;
        margin: 1.5rem 0 .25rem 0;
    }
    .sign-word-2 {
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 22px;
    }
    .sign-btn {
        margin: 4rem 1rem;
        height: 3rem;
        background-color: #EB4646;
        border: 0;
        border-radius: 5px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 2.8rem;
        text-decoration: none;
    }
</style>
