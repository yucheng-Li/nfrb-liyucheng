<template>
    <div>
        <mt-header title="党员信息表">
        <mt-button icon="back" slot="left"  @click="go"></mt-button>
    </mt-header>
    <div class="sign-bg"></div>
    <div class="sign-content">
        <div class="sign-success"></div>
        <div class="sign-word">
            <span class="sign-word-1">成功提交</span>
            <span class="sign-word-2">谢谢您的参与和支持</span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        go() {
            this.$router.push('/fill');//要跳转的界面
        }
    },
}
</script>
 
 
<style > 
    .sign-success {
        margin: auto;
        width: 6rem;
        height: 6rem;
        border-radius: 3rem;
         overflow: hidden; 
        /* background: no-repeat; */
        background-position: -8.5rem -2rem; 
         background-image: url('../../assets/image/success.png');
    }
</style>
