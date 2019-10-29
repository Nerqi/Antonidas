<template>
    <div class="app-container">
        <avue-date-group v-model="obj" :default="true" @change="handleChange"></avue-date-group>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                obj:undefined,
            }
        },
        methods:{
            handleChange (value) {
                this.$message.success('当前数据'+value);
            },
        }
    }
</script>

<style scoped>

</style>
