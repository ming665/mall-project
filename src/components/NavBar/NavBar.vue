<template>
    <div class="nav-bar" @touchmove=onTouchmove>
        <div class="nav-item" :class="{active: active=== 'index'}" @click=goIndex>
            <i class="anticon icon-index"></i>
            <p>MENU1</p>
        </div>
        <div class="nav-item" :class="{active: active=== 'category'}" @click=goCategory>
            <i class="anticon icon-category"></i>
            <p>MENU2</p>
        </div>
        <div class="nav-item" :class="{active: active=== 'cart'}" @click=goCart>
            <i class="anticon icon-shopping-cart"></i>
            <p>MENU3</p>
        </div>
        <div class="nav-item" :class="{active: active=== 'order'}" @click=goOrder>
            <i class="anticon icon-order"></i>
            <p>MENU4</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['active'],
    data() {
        return {
        }
    },
    methods: {
        onTouchmove(e) {
            e.preventDefault()
        },
        goIndex() {
            if ("index" === this.active) return false;
            window.location.href = '/Home.html'
        },
        goCategory() {
            if ("category" === this.active) return false;
            window.location.href = '/Category.html'
        },
        goCart() {
            if ("cart" === this.active) return false;
        },
        goOrder() {
            if ("order" === this.active) return false;
        },
    }

}
</script>
<style lang="scss">
.nav-bar {
    display: flex;
    box-sizing: border-box;
    position: fixed;
    z-index: 10001;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #e7e7e7;
    background-color: #fff;
    .nav-item {
        flex: 1;
        font-size:22px;
        text-align: center;
        padding-top: 12px;
        p {
            font-size: 12Px;
            line-height: 12Px;
            margin-top: 4px;
            color: #757575;
            
        }
        &.active {
            color: #4cc3ff;
            p {
                color: #4cc3ff;
            }
        }
    }

}
</style>