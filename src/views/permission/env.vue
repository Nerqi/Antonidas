<template>
    <container ref="cardEnv" type="card">
        <template slot="header">process.env</template>
        <highlight :code="env" ></highlight>
    </container>
</template>

<script>
    import Highlight from '@/components/Highlight'
    export default {
        methods:{
            // adfasfasd(){
            //     this.$refs["cardEnv"].scrollTop()
            //     console.log(__filename)
            //     console.log(__filename)
            // }
        },
        components:{
            Highlight
        },
        data () {
            return {
                filename: __filename,
                env: JSON.stringify(process.env, null, 2)
            }
        }
    }
</script>
