<template>
    <div>
        <h3>Home</h3>
        <div>
            {{item}}
        </div>
        <h3 v-if="item">{{item.title}}</h3>
        <div>
            <ul>
                <li @click="fetchCurrentItem(1)">1</li>
                <li @click="fetchCurrentItem(2)">2</li>
                <li @click="fetchCurrentItem(3)">3</li>
                <li @click="fetchCurrentItem(4)">4</li>
                <li @click="fetchCurrentItem(5)">5</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        // Server-side only
        // This will be called by the server renderer automatically
        serverPrefetch() {
            // return the Promise from the action
            // so that the component waits before rendering
            return this.$store.dispatch('fetchItem', 1)
        },
        computed: {
            item() {
                return this.$store.state.item
            },
        },
        methods: {
            showShadow: function () {
                this.show = !this.show;
            },
            closeAll: function () {
                this.show = false;
                this.$refs.nav.closeNav();
            },
            fetchCurrentItem(id){
                this.$store.dispatch('fetchItem', id)
            }
        },
        async created(){
            if (!this.item){
                await this.$store.dispatch('fetchItem', 1)
            }
        }
    }
</script>