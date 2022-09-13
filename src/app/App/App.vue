<template>
    <div id="app">
        <Nav ref="nav" :showShadow="showShadow"/>
        <app-content/>
    </div>
</template>

<script>
    import Nav from '../../components/Nav/Nav.vue'
    import AppContent from '../AppContent/AppContent.vue'

    export default {
        name: 'App',
        metaInfo: {
            title: 'App',
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'App World'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'App World'
                }
            ]
        },
        components: {
            Nav,
            AppContent
        },
        data: function () {
            return {
                show: false,
            }
        },
        methods: {
            showShadow: function () {
                this.show = !this.show;
            },
            closeAll: function () {
                this.show = false;
                this.$refs.nav.closeNav();
            }
        },
    }
</script>

<style lang="scss" src="./App.scss"></style>
