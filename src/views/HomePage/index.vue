<template>
    <div class="home-page">
        <HomeNav />
        <HomeContent />
    </div>
</template>

<script>
import HomeNav from './HomeNav.vue'
import HomeContent from './HomeContent.vue'
export default {
    name: 'HomePage',
    components:{
        HomeNav,
        HomeContent
    }
}
</script>

<style lang="less" scoped>
.home-page{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
</style>