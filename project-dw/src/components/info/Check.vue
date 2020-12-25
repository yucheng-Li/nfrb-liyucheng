<template>
    <div>
        <mt-header title="党员信息表">
            <router-link to="/fill" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="fill-all">
            <div class="fill-part1 fill-part">
               <mt-field label="姓名"  placeholder="姓名" v-model="info.name" ></mt-field>
               <mt-field label="性别" placeholder="姓名"  v-model="info.sex"></mt-field>
               <mt-field label="名族" placeholder="姓名"  v-model="info.nation"></mt-field>
               <mt-field label="身份证号" placeholder="姓名"  v-model="info.bodynumber"></mt-field>
               <mt-field label="出生日期" placeholder="姓名" v-model="info.birthnumber" ></mt-field>
            </div>
            <div class="fill-part2 fill-part">
                <mt-field label="毕业院校" placeholder="姓名"  v-model="info.school"></mt-field>
                <mt-field label="学历" placeholder="姓名"  v-model="info.education"></mt-field>
            </div>
            <div class="fill-part3 fill-part">
                <mt-field label="人员类别" placeholder="姓名" v-model="info.peopletype" ></mt-field>
                <mt-field label="转入支部" placeholder="姓名"  v-model="info.branch"></mt-field>
                <mt-field label="入党日期" placeholder="姓名"  v-model="info.inDate"></mt-field>
                <mt-field label="转正日期" placeholder="姓名"  v-model="info.outDate"></mt-field>
                <mt-field label="介绍人1" placeholder="-"  v-model="info.identity"></mt-field>
                <mt-field label="介绍人2" placeholder="-"  v-model="info.place"></mt-field>
                <mt-field label="党籍正常" placeholder="-"  v-model="info.phone"></mt-field>
                <mt-field label="档案地" placeholder="-"  v-model="info.doornumber"></mt-field>

            </div>
            <div class="fill-part4 fill-part">
                <mt-field label="手机号码" placeholder="姓名"  v-model="info.interperson1"></mt-field>
                <mt-field label="家庭住址" placeholder="姓名"  v-model="info.interperson2"></mt-field>
            </div>
            <input type="button" value="确认并提交" class="fill-btn" v-on:click="commit()">

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            info:[]
        }
    },
    methods: {
        commit() {
            this.$router.push({
                path: '/success', 
            })
        },
        
    },
    mounted() {
        let data = this.$store.state.infoList
        if(data.sex == 'true') {
            data.sex = '男' 
        }else {
            data.sex = '女' 
        }
        if(data.peopletype == 'true') {
            data.peopletype = '正式党员' 
        }else {
            data.peopletype = '预备党员'
        }
        if(data.identity == 'true') {
            data.identity = '是'
        }else {
            data.identity = '否'
        }
        this.info = data
        console.log(this.info)
    },
}
</script>
 
 
<style > 
    
</style>
