<template>
    <div>
        <div class="content-left">
            <ContentNav />
        </div>
        <div class="content-right">
            <ContentInfo />
        </div>
    </div>
</template>

<script>
import ContentNav from "./ContentNav";
import ContentInfo from "./ContentInfo";

export default {
    data() {
        return {
            // isRouterAlive: true,
        };
    },
    // provide() {
    //     return {
    //         reload: this.reload,
    //     };
    // },
    components: {
        ContentNav,
        ContentInfo,
    },
    methods: {
        // reload() {
        //     this.isRouterAlive = false;
        //     this.$nextTick(() => {
        //         // DOM更新
        //         this.isRouterAlive = true;
        //     });
        // },
    },
};
</script>

<style scoped>
.content {
    height: 200px;
    margin: 0 auto;
    margin-top: 10px;
}

.content-left {
    float: left;
    width: 25%;
    height: 100%;
}

.content-right {
    float: left;
    width: 75%;
    height: 100%;
}

.custom-tree-node {
    display: inline-block;
    text-align: right;
    width: 100%;
}
.upload img {
    width: 200px;
}
</style>