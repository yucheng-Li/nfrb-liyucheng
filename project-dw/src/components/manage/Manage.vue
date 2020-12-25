<template>
<div class="manage-all">
    <div class="manage-bg"></div>
    <div class="manage-top">
        <span class="manage-top-word">智慧党建后台管理系统</span>
    </div>
    <ManageCenter class="manage-content" >
    </ManageCenter>
</div>
</template>

<script>
import ManageCenter from './ManageCenter'
export default {
    data() {
        return {
        }
    },
    components:{
        ManageCenter
    },
    
}
</script>
 
 
<style > 
    .manage-all {
        width: 1440px;
        height: 960px;
        position: relative;
        margin: auto;
    }
    .manage-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 56px;
        background-color: #eb4646;
        line-height: 55px;
    }
    .manage-top-word {
        width: 189px;
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 25px;
        margin-left: 24px;
    }
    .manage-bg {
        width: 1440px;
        height: 960px;
        background: #F0F2F5;
        position: relative;
    }
    .manage-content {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 1200px;
        height: 779px;
        background: #FFFFFF;
        border-radius: 4px;
    }
</style>

