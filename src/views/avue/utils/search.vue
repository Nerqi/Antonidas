<template>
    <div class="app-container">
        <avue-search :option="option" v-model="form" @change="handleChange"></avue-search>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    zt: ["370000", "620000", "610000", "110000", "410000"],
                    checkbox: 0,
                    jtgj: [0, 1, 2, 3, 4]
                },
                option: {
                    card: true,
                    column: [{
                        label: '地区',
                        prop: 'zt',
                        dicData:'zt',
                        dicUrl: 'https://cli2.avue.top/api/area/getProvince',
                        props: {
                            label: 'name',
                            value: 'code'
                        }
                    }, {
                        label: '多选',
                        prop: 'checkbox',
                        multiple: false,
                        dicData: [{
                            label: '单层',
                            value: 0
                        }, {
                            label: '多层',
                            value: 1
                        }]
                    }, {
                        label: '交通工具',
                        prop: 'jtgj',
                        dicData: [{
                            label: '飞机',
                            value: 0
                        }, {
                            label: '动车',
                            value: 1
                        }, {
                            label: '驾车',
                            value: 2
                        }, {
                            label: '其他',
                            value: 3
                        }]
                    }]
                }
            }
        },
        methods: {
            handleChange(form) {
                this.$message.success(JSON.stringify(form))
            }
        }
    }
</script>
