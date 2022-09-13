<template>
    <div class="nav-wrapper"
         ref="nav">
        <button @click="toggleNav()"
                class="nav-button">
            <span v-if="show">X</span>
            <span v-else>Open</span>
        </button>
        <div class="nav">
            <h3>
                Nav
            </h3>
            <ul class="nav-list">
                <li class="nav-list__item"
                    v-for="{name, path} in links"
                    @click="toggleNav()">
                    <router-link
                            :to="path"
                            class="nav-list__link"
                            active-class="nav-list__link--active"
                            exact>
                        {{name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    export default {
        name: "Nav",
        props: {
            showShadow: Function,
        },
        data() {
            return {
                show: false,
                links: [
                    {
                        name: 'Home',
                        path: "/",
                    },
                    {
                        name: 'About',
                        path: "/about",
                    },
                    {
                        name: 'Contacts',
                        path: "/contacts",
                    },
                ],
            }
        },
        methods: {
            toggleNav: function () {
                this.$refs.nav.classList.toggle('nav-wrapper--active')
                this.$props.showShadow()
                this.showNavBar()
            },
            closeNav: function () {
                this.$refs.nav.classList.remove('nav-wrapper--active')
                this.showNavBar()
            },
            showNavBar() {
                this.show = !this.show
            }
        }
    }
</script>

<style scoped lang="scss" src="./nav.scss">

</style>