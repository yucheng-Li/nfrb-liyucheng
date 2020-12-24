<template>
<div>
    <mt-header title="党员信息表">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <div class="fill-all">
        <div class="fill-part1 fill-part">
            <mt-field label="姓名" placeholder="姓名" v-model="name"></mt-field>
            <mt-field label="性别" class="clear-input">
                <label for="male" class="fill-radio fill-male" v-bind:class="{ fillmale:checked }" v-on:click="check()">男</label>
                <input type="radio" name="sex" id="male" value="" ref="male">
                <label for="female" class=" fill-radio fill-female"  v-bind:class="{ fillfemale:!checked }" v-on:click="check()">女</label>
                <input type="radio" name="sex" id="female" value="female" ref="female">
            </mt-field>
            <mt-field label="民族" placeholder="民族" type="password" v-model="password"></mt-field>
            <mt-field label="身份证号" placeholder="身份证号" type="tel" v-model="phone"></mt-field>
            
            
            <mt-field label="出生日期"   v-model="birthday" class="buttom-no-border clear-input"><van-cell  @click="showPopup" value="出生日期" is-link >
            </van-cell> 
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                />
            </van-popup>
            </mt-field>
        </div>                      
        <div class="fill-part2 fill-part">
            <mt-field label="毕业院校" placeholder="学校全称" v-model="name"></mt-field>
            <mt-field label="学历" placeholder="最高学历" v-model="name" class="buttom-no-border"></mt-field>

        </div>
        <div class="fill-part3 fill-part">
            <mt-field label="人员类别" class="clear-input">
                <label for="male" class="fill-people fill-male" v-bind:class="{ fillmale:checkPeople }" v-on:click="checkpeople()">正式党员</label>
                <input type="radio" name="sex" id="male" value="" ref="male">
                <label for="female" class=" fill-people fill-female"  v-bind:class="{ fillfemale:!checkPeople }" v-on:click="checkpeople()">预备党员</label>
                <input type="radio" name="sex" id="female" value="female" ref="female">
            </mt-field>
            <mt-field label="转入支部" placeholder="组织全称" v-model="name"></mt-field>
            <mt-field label="入党日期" placeholder="入党日期" v-model="name"></mt-field>
            <mt-field label="转正日期" placeholder="转正日期" v-model="name"></mt-field>
            <mt-field label="介绍人1" placeholder="介绍人姓名（选填）" v-model="name"></mt-field>
            <mt-field label="介绍人2" placeholder="介绍人姓名（选填）" v-model="name"></mt-field>
            <mt-field label="党籍正常" class="clear-input">
                <label for="male" class="fill-radio fill-male" v-bind:class="{ fillmale:checkTrue }" v-on:click="checktrue()">是</label>
                <input type="radio" name="sex" id="male" value="" ref="male">
                <label for="female" class=" fill-radio fill-female"  v-bind:class="{ fillfemale:!checkTrue }" v-on:click="checktrue()">否</label>
                <input type="radio" name="sex" id="female" value="female" ref="female">
            </mt-field>
            <mt-field label="档案地" placeholder="地址精确到门牌号（选填）" v-model="name"></mt-field>
        </div>
        <div class="fill-part4 fill-part">
            <mt-field label="手机号码" placeholder="手机号码" v-model="name"></mt-field>
            <mt-field label="家庭住址" placeholder="地址精确到门牌号" v-model="name"></mt-field>
        </div>
        <router-link to="/success">
            <input type="button" value="确认并签名" class="fill-btn" >
        </router-link>
    </div>
</div>

</template>

<script>
import { Button } from 'vant';
export default {
    data() {
        return {
            checked:true,
            checkPeople:true,
            checkTrue:true,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            show: false,
        }
    },
    methods: {
       check() {
           this.checked = !this.checked
       },
       checkpeople() {
           this.checkPeople = !this.checkPeople
       },
       checktrue() {
           this.checkTrue = !this.checkTrue
       },
       showPopup() {
            this.show = true;
        },
    },
    components: {
    [Button.name]: Button
  }
}
</script>
 
 
<style > 
    .mint-header {
        height: 2.75rem;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
    }
    .fill-all {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F7F7F7;
        position: relative;
    }

    .fill-part {
        box-sizing: border-box;
        width: 21rem;
        min-height: 5.6rem;
        margin: .25rem 0 0.25rem 0;
        border-radius: 4px;
        padding: 0rem 1rem;
        background-color: #fff;

    }
    .fill-part1 {
        width: 21rem;
        margin: 1rem 0 0.25rem 0;
        min-height: 5.6rem;
        
    }
    .fill-part2 {
        
    }
    .fill-part3 {
     
    }
    .fill-part4 {
   
    }
    .fill-btn {
        width: 21rem;
        height: 3rem;
        font-size: 18px;
        margin: .25rem 0 0.25rem 0;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        background: #EB4646;
        border: none;
        border-radius: 5px;
        opacity: 0.5;
    }
    .fill-radio {
        display: inline-block;
        width: 3rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background-color: #fff;
        border: 1px solid #CCCCCC;
    }
    .fill-people {
        display: inline-block;
        width: 6rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background-color: #fff;
        border: 1px solid #CCCCCC;
    }
    .fill-male {
        border-radius: 4px 0px 0px 4px;
        border-right:0;

    }
    #male {
        display: none;
    }
    #female {
        display: none;
    }
    .fillmale {
        color: #EB4646;
        border: 1px solid #EB4646;
    }
    .fill-female {
        border-radius: 0px 4px 4px 0px;
        border-left:0;
    }
    .fillfemale {
        color: #EB4646;
        border: 1px solid #EB4646;
    }
    .clear-input input {
        display: none;
    }
    van-cell {
        display: inline-block;
        background-color: rgb(88, 52, 52);
    }
    
</style>

