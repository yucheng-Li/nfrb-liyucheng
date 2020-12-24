<template>
<div class="manage-center-all">
    <div class="manage-center-title">党员信息采集表</div>
    <div class="manage-center-select">
        <select class="manage-center-select-choose">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
        <div class="manage-center-select-out">
           <input type="text" placeholder="姓名" name="" value="" id="" class="manage-center-select-in">
        </div>
        <input type="button" value="搜索" class="manage-center-select-btn-select">
        <input type="button" value="清空" class="manage-center-select-btn-clear">
    </div>
    <div class="manage-center-icon">
        <table class="manage-center-table">
            <tr class="manage-center-th">
                <th class="manage-center-th-first">姓名</th>
                <th>接收支部</th>
                <th>提交时间</th>
                <th>操作</th>
            </tr>
            <tr class="manage-center-td" v-for="item in info_list" :key=item.index>
                <td class="manage-center-th-first">{{item.name}}</td>
                <td>{{item.branch}}</td>
                <td>{{item.time}}</td>
                <td>{{item.code}}</td>
            </tr>
        </table>
    </div>
    <div class="manage-center-page">
        <el-pagination
          background
          layout="prev, pager, next"
          :pager-count="9"
          :total="90"          
          >
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            info_list:[
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
                {
                    name:'小明',
                    branch:'南方网第二党支部',
                    time:'2020-01-04  09:41:00',
                    code:'查看二维码'
                },
            ],
        }
    },
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
