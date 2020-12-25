<template>
<div class="manage-center-all">
    <div class="manage-center-title">党员信息采集表</div>
    <div class="manage-center-select">
        <select class="manage-center-select-choose" ref="select"  @change="DispayPrice()">
            <option value="" ref="selectdefault" style='display:none;' selected disabled hidden>接入支部</option>
            <option :value=item v-for="item in branchList" :key=item>{{item}} </option>
        </select>
        <div class="manage-center-select-out">
           <input type="text" placeholder="姓名" ref="inputname" name="" value="" id="" class="manage-center-select-in">
        </div>
        <input type="button" value="搜索" @click="search()" class="manage-center-select-btn-select">
        <input type="button" value="清空" @click="cancel()" class="manage-center-select-btn-clear">
    </div>
    <div class="manage-center-icon">
        <table class="manage-center-table">
            <tr class="manage-center-th">
                <th class="manage-center-th-first">姓名</th>
                <th>接收支部</th>
                <th>提交时间</th>
                <th>操作</th>
            </tr>
            <tr class="manage-center-td" v-for="item in info_list[nowPage]" :key=item.index>
                <td class="manage-center-th-first">{{item.name}}</td>
                <td>{{item.branch}}</td>
                <td>{{item.nowDate}}</td>
                <td>查看二维码</td>
            </tr>
        </table>
    </div>
    <div class="manage-center-page">
        <el-pagination
          background
          layout="prev, pager, next"
          :pager-count="9"
          :total="(pageLen-1)*10"  
          @prev-click= "prevClick"
          @next-click= "nextClick"
          @current-change = "currentChange"
          >
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            info_list:[],
            info_origin:[],
            branchList:["南方网第一党支部","南方网第二党支部","南方日报集团第一党支部","南方日报集团第二党支部","南方杂志党支部"],
            nowPage:0,
            pageLen:1
        }
    },
    methods: {
        prevClick(cpage) {
            this.nowPage = cpage-1
        },
        nextClick(cpage) {
            this.nowPage = cpage-1
        },
        disposeDate(arr) {
            let len = arr.length
            let pagelen = len / 10;
            let lastlen = len % 10;
            if(lastlen > 0) {
                this.pageLen = pagelen+1
            }else {
                this.pageLen = pagelen
            }
            let new_arr = []
            for(let i = 0; i < pagelen; i++) {
                new_arr[i] = arr.slice(i*10, (i+1)*10)
            }
            this.info_list = new_arr
        },
        currentChange(cpage) {
            this.nowPage = cpage-1
        },
        DispayPrice() {
            this.$refs.select.style = "red"
            console.log(this.$refs.select.style)
        },
        search() {
            let search_branch = this.$refs.select.value
            let search_name = this.$refs.inputname.value
            console.log(search_branch)
            if(search_name) {
                if(search_branch) {
                    this.seachTwo(search_branch,search_name)
                } else{
                    this.seachOne(search_name, 'name')
                }
            } else {
                if(search_branch) {
                    this.seachOne(search_branch, 'branch')
                }
            }
        },
        seachOne(value, type) {
            let search_arr = []
            let arr = this.info_origin
            if(type == 'branch') {
                for(let item in arr) {
                    if(arr[item].branch == value) {
                        search_arr.push( arr[item])
                    }
                }
            } else {
                for(let item in arr) {
                    if(arr[item].name == value) {
                        search_arr.push( arr[item])
                    }
                }
            }
            this.disposeDate(search_arr)
        },
        seachTwo(value1, value2) {
            let search_arr = []
            let arr = this.info_origin
            for(let item in arr) {
                if(arr[item].branch == value1 && arr[item].name == value2) {
                    search_arr.push( arr[item])
                }
            }
            this.disposeDate(search_arr)
        }, 
        cancel() {
            this.$router.go(0)
        }

    },
    mounted() {
        let that = this
        this.$axios.get('http://127.0.0.1:5000/getinfo').then(function (response){
            response.data.reverse()
            that.info_origin = response.data.reverse()
            that.disposeDate(response.data.reverse())
            // that.info_list = response.data
        }).catch(function(error){
            console.log(error);
        }); 
    }
}
</script>
 
 
<style > 
    .manage-center-title {
        margin-left: 24px;
        margin-top: 24px;
        width: 126px;
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 25px;
    }
    .manage-center-select {
        display: flex;
    }
    .manage-center-select-choose {
        width: 160px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 2px;
        margin-left: 24px;
        margin-top: 25px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        outline: none;
    }
    .manage-center-select-choose:focus {
        width: 160px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 2px;
        border: 1px solid #EB4646;
        box-shadow:  0 0 2px 2px  rgba(235, 70, 70, 0.2);
    }
    .manage-center-select-out {
        display: inline-block;
        box-sizing: border-box;
        width: 160px;
        height: 32px;
        margin-left: 24px;
        margin-top: 25px;
        background: #FFFFFF;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
    }
    .manage-center-select-out input {
        box-sizing: border-box;
        margin: 5px 12px;
        width: 136px;
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0);
        border: none;
        outline: none;
        line-height: 22px;
    }
    .manage-center-select-out input::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
    :-moz-placeholder {/* Firefox 18- */
      color: rgba(0, 0, 0, 0.25);
    }
    ::-moz-placeholder{/* Firefox 19+ */
     color: rgba(0, 0, 0, 0.25);
    }
    :-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.25);
    }

    .manage-center-select-btn-select {
        width: 60px;
        height: 32px;
        background: #EB4646;
        border: 0;
        border-radius: 2px; 
        padding: 0;
        outline: none;
        margin: 25px 16px 0 16px;
        font-size: 1s4px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;

    }
    .manage-center-select-btn-clear {
        width: 60px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        outline: none;
        margin: 25px 16px 0 0;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
    }
    .manage-center-icon {
        width: 1152px;
        height: 593px;
        margin: auto;
        margin-top: 8px;
    }
    .manage-center-table {
        width: 1152px;
        border:0px;
        border-collapse:collapse;
        border-spacing:0;
    }
    .manage-center-th {
        width: 1152px;
        height: 54px;
        background: rgba(0, 0, 0, 0.02);
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        border-collapse: collapse;
        line-height: 22px;
    }
    td, th{
        border-bottom:1px solid  rgba(0, 0, 0, 0.06);
    }
    .manage-center-th th {
        text-align: left;
        width: 25%;
    }
    .manage-center-th-first {
        padding-left: 56px;
    }
    .manage-center-td {
        width: 1152px;
        height: 54px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
    }
    .manage-center-page {
        margin-top: 20px;
        margin-left: 720px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled) {
        background-color: #fff!important;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        width: 32px;
        height: 32px;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 28px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        color: #EB4646!important;
        border: 1px solid #EB4646;
    }
    .btn-prev {
        width: 32px!important;
        height: 32px!important;
        background-color: #fff!important;
        border: 1px solid rgba(0, 0, 0, 0.15)!important;
    }
    .btn-next {
        width: 32px!important;
        height: 32px!important;
        background-color: #fff!important;
        border: 1px solid rgba(0, 0, 0, 0.15)!important;
    }
</style>
