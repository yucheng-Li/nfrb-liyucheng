<template>
<div>
    <mt-header title="党员信息表">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <div class="fill-all">
        <div class="fill-part1 fill-part">
            <mt-field label="姓名" placeholder="姓名" v-model="info.name"></mt-field>
            <mt-field label="性别" v-model="info.sex" class="clear-input">
                <label for="male" class="fill-radio fill-male" v-bind:class="{ fillmale:checked }" v-on:click="check()">男</label>
                <input type="radio" name="sex" id="male" value="" ref="male">
                <label for="female" class=" fill-radio fill-female"  v-bind:class="{ fillfemale:!checked }" v-on:click="check()">女</label>
                <input type="radio" name="sex" id="female" value="female" ref="female">
            </mt-field>
            <mt-field label="民族" placeholder="民族" v-model="info.nation" class="clear-input"><van-cell ref="nation" @click="showNation" value="民族" is-link ></van-cell> 
                <van-popup v-model="showNat" position="bottom" :style="{ height: '30%' }">
                <van-picker
                  title="标题"
                  show-toolbar
                  :default-index="2"
                  :columns="columns"
                  @confirm="onConfirmNation"
                  @cancel="onCancel"
                  
                />
                </van-popup>
            </mt-field>
            <mt-field label="身份证号" v-model="info.bodynumber" placeholder="身份证号" type="tel"></mt-field>
            <mt-field label="出生日期" v-model="info.birthnumber" class="buttom-no-border clear-input">
                <van-cell ref="brithData" @click="showPopup" value="出生日期" is-link ></van-cell> 
                <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :columns="columns"
                    @cancel="onCancel"
                    @confirm="onConfirm"
                />
                </van-popup>
            </mt-field>
        </div>                      
        <div class="fill-part2 fill-part">
            <mt-field label="毕业院校" placeholder="学校全称" v-model="info.school"></mt-field>
            <mt-field label="学历" placeholder="最高学历" v-model="info.education"  class="buttom-no-border clear-input">
                <van-cell ref="edu" @click="showEducation" value="学历" is-link ></van-cell> 
                <van-popup v-model="showEdu" position="bottom" :style="{ height: '30%' }">
                <van-picker
                  title="学历"
                  show-toolbar
                  :default-index="2"
                  :columns="education"
                  @confirm="onConfirmEducation"
                  @cancel="onCancel"
                />
                </van-popup>
            </mt-field>

        </div>
        <div class="fill-part3 fill-part">
            <mt-field label="人员类别" v-model="info.peopletype" class="clear-input">
                <label for="male" class="fill-people fill-male" v-bind:class="{ fillmale:checkPeople }" v-on:click="checkpeople()">正式党员</label>
                <input type="radio" name="sex" id="male" value="" ref="male">
                <label for="female" class=" fill-people fill-female"  v-bind:class="{ fillfemale:!checkPeople }" v-on:click="checkpeople()">预备党员</label>
                <input type="radio" name="sex" id="female" value="female" ref="female">
            </mt-field>
            <mt-field label="转入支部" v-model="info.branch" placeholder="组织全称" class="clear-input" ><van-cell ref="bra" @click="showBranch" value="转入支部" is-link ></van-cell> 
                <van-popup v-model="showBra" position="bottom" :style="{ height: '30%' }">
                <van-picker
                  title="转入支部"
                  show-toolbar
                  :default-index="2"
                  v-model="currentDate"
                  :columns="branch"
                  @confirm="onConfirmBranch"
                  @cancel="onCancel"
                />
                </van-popup>
            </mt-field>

            <mt-field label="入党日期" v-model="info.indate" class="clear-input" placeholder="入党日期" >
                <van-cell ref="inData" @click="showIn" value="入党日期" is-link ></van-cell> 
                <van-popup v-model="showin" position="bottom" :style="{ height: '30%' }">
                <van-datetime-picker
                    type="date"
                    title="选择年月日"
                    v-model="currentDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="onCancel"
                    @confirm="onConfirmIn"
                />
                </van-popup>
            </mt-field>
            <mt-field label="转正日期" v-model="info.outDate" class="clear-input" placeholder="转正日期" >
                <van-cell ref="outData" @click="showOut" value="入党日期" is-link ></van-cell> 
                <van-popup v-model="showout" position="bottom" :style="{ height: '30%' }">
                <van-datetime-picker
                    type="date"
                    title="选择年月日"
                    v-model="currentDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="onCancel"
                    @confirm="onConfirmOut"
                />
                </van-popup>
            </mt-field>
            <mt-field label="介绍人1" v-model="info.interperson1" placeholder="介绍人姓名（选填）"></mt-field>
            <mt-field label="介绍人2" v-model="info.interperson2" placeholder="介绍人姓名（选填）"></mt-field>
            <mt-field label="党籍正常" v-model="info.identity" class="clear-input">
                <label for="male" class="fill-radio fill-male" v-bind:class="{ fillmale:checkTrue }" v-on:click="checktrue()">是</label>
                <input type="radio" name="sex" id="male" value="" ref="male">
                <label for="female" class=" fill-radio fill-female"  v-bind:class="{ fillfemale:!checkTrue }" v-on:click="checktrue()">否</label>
                <input type="radio" name="sex" id="female" value="female" ref="female">
            </mt-field>
            <mt-field label="档案地" v-model="info.place" placeholder="地址精确到门牌号（选填）" ></mt-field>
        </div>
        <div class="fill-part4 fill-part">
            <mt-field label="手机号码" placeholder="手机号码" v-model="info.phone"></mt-field>
            <mt-field label="家庭住址" placeholder="地址精确到门牌号" v-model="info.doornumber"></mt-field>
        </div>
        <!-- <router-link to="/success"> -->
            <input type="button" value="确认并签名" class="fill-btn" v-on:click="getinfo()">
        <!-- </router-link> -->
    </div>
</div>

</template>

<script>
// import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            info:{
                name,sex:'',nation:'',bodynumber:'',birthnumber:'',school:'',education:'',peopletype:'',branch:'',inDate:'',outDate:'',identity:'',place:'',phone:'',doornumber:'',interperson1:'',interperson2:'',nowDate:''
            },
            checked:true,
            checkPeople:true,
            checkTrue:true,
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            show: false,
            showin: false,
            showout:false,
            showNat:false,
            showEdu:false,
            showBra:false,
            columns: ["汉族","壮族","满族","回族","珞巴族","赫哲族","塔塔尔族","独龙族","鄂伦春族","门巴族","乌孜别克族","裕固族","俄罗斯族","保安族","德昂族","基诺族","京族","怒族","鄂温克族","普米族","阿昌族","塔吉克族","布朗族","撒拉族","毛南族","景颇族","达斡尔族","柯尔克孜族","锡伯族","仫佬族","土族","羌族","纳西族","佤族","水族","拉祜族","高山族","东乡族","仡佬族","傈僳族","畲族","傣族","黎族","哈萨克族","哈尼族","白族","朝鲜族","瑶族","侗族","布依族","藏族","蒙古族","彝族","土家族","维吾尔族","苗族"],
            education:["博士","硕士","本科","大专","高中","中专","初中","小学","其他"],
            branch:["南方网第一党支部","南方网第二党支部","南方日报集团第一党支部","南方日报集团第二党支部","南方杂志党支部"]
        }
    },
    mounted() {
           this.info.sex = this.checked
           this.info.identity =  this.checkTrue
           this.info.peopletype = this.checkPeople
    },
    methods: {
       check() {
           this.checked = !this.checked
           this.info.sex = this.checked
       },
       checkpeople() {
           this.checkPeople = !this.checkPeople
           this.info.identity = this.checkPeople
       },
       checktrue() {
           this.checkTrue = !this.checkTrue
           this.info.place = this.checkTrue
       },
       showPopup() {
            this.show = true;
        },
        showIn() {
            this.showin = true;
        },
        showOut() {
            this.showout = true;
        },
        showNation() {
            this.showNat = true;
        },
        showEducation() {
            this.showEdu = true
        },
        showBranch() {
            this.showBra = true
        },
        onConfirm(value) {
          this.$refs.brithData.innerText = this.timeFormat(value)
          this.info.birthnumber = this.timeFormat(value)
          this.show = false
        },
        onConfirmIn(value) {
          this.$refs.inData.innerText = this.timeFormat(value)
          this.info.inDate = this.timeFormat(value)
          this.showin = false
        },
        onConfirmOut(value) {
          this.$refs.outData.innerText = this.timeFormat(value)
          this.info.outDate = this.timeFormat(value)
          this.showout = false
        },
        onConfirmNation(value) {
          this.$refs.nation.innerText = value
          this.info.nation = value
          this.showNat = false
        },
        onConfirmEducation(value) {
          this.$refs.edu.innerText = value
          this.info.education = value
          this.showEdu = false
        },
        onConfirmBranch(value) {
          this.$refs.bra.innerText = value
          this.info.branch = value
          this.showBra = false
        },
        onCancel() {
            this.show = false;
            this.showin = false
            this.showout = false
            this.showEdu = false
            this.showBra = false
            this.showNat = false
        },
        timeFormat(time) { // 时间格式化 2019-09-08
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            return year + '-' + month + '-' + day 
        },
        getinfo(){
            
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var hour = date.getHours();
            if(hour <= 9) {
                hour = "0"+hour
            }
            var minute = date.getMinutes();
            if(minute <= 9) {
                minute = "0"+minute
            }
            var second = date.getSeconds();
            if(second <= 9) {
                second = "0"+second
            }
            var setdate = year+'-'+month+'-'+day+'-'+hour+':'+minute+':'+second
            this.info.nowDate = setdate
            for(let i in this.info) {
                if(this.info[i] == '' && i != 'interperson1' && i != 'interperson2'){
                    this.$toast({
                    message: "请填写完整",
                  })
                    return false
                }
            }
            
            if(this.info.sex == 'true') {
                this.info.sex = '男' 
            }else {
                this.info.sex = '女' 
            }
            if(this.info.peopletype == 'true') {
                this.info.peopletype = '正式党员' 
            }else {
                this.info.peopletype = '预备党员'
            }
            if(this.info.identity == 'true') {
                this.info.identity = '是'
            }else {
                this.info.identity = '否'
            }
            this.$store.commit('increment', {
              amount: this.info
            })
            // console.log(this.info)
            let dothis = this
            this.$axios.post('http://127.0.0.1:5000/postinfo',this.info)
            .then(function (response) {
                dothis.$router.push({
                path: '/check', 
            })
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            
        }
    },
}
</script>
 
 
<style> 
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

