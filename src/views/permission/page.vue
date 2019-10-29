<template>
    <container  type="card">
        <template slot="header">页面权限</template>
        <switch-roles @change="handleRolesChange" />
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
        <div>ddsdgvsfd</div>
    </container>
</template>

<script>
    import SwitchRoles from './components/SwitchRoles'

    export default {
        name: 'PagePermission',
        components: { SwitchRoles },
        methods: {
            handleRolesChange() {
                this.$router.push({ path: '/permission/index?' + +new Date() })
            }
        }
    }
</script>
