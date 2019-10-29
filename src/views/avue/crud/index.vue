
<template>
    <div class="app-container">
        <p class="warn-content">
            <a
                href="https://github.com/nmxiaowei/avue"
                target="_blank"
            >Avue.js
            </a>是基于现有的element-ui库进行的二次封装，简化一些繁琐的操作，核心理念为数据驱动视图</p>
        <avue-crud :data="data" :option="option" v-model="obj" ></avue-crud>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                obj:{},
                data: [
                    {
                        name:'张三',
                        sex:'男',
                        date:'1994-02-23 00:00:00'
                    }, {
                        name:'李四',
                        sex:'女',
                        date:'1994-02-23 00:00:00'
                    }, {
                        name:'王五',
                        sex:'女',
                        date:'1994-02-23 00:00:00'
                    }, {
                        name:'赵六',
                        sex:'男',
                        date:'1994-02-23 00:00:00'
                    }
                ],
                option:{
                    title:'基础表格',
                    page:false,
                    align:'center',
                    menuAlign:'center',
                    column:[
                        {
                            label:'姓名',
                            prop:'name'
                        },
                        {
                            label:'性别',
                            prop:'sex'
                        },{
                            label: "日期",
                            prop: "date",
                            type: "date",
                            format: "yyyy-MM-dd hh:mm:ss",
                            valueFormat: "yyyy-MM-dd hh:mm:ss",
                        }
                    ]
                }
            }
        }
    }
</script>
