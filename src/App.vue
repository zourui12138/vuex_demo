<template>
    <div id="app" class="clear">
        <aside class="aside fl">
            <h1><img src="./assets/img/logo.png" alt="">内部服务平台</h1>
            <ul>
                <li class="current"><i class="el-icon-menu"></i>内部平台管理</li>
                <li><i class="el-icon-menu"></i>内部项目管理</li>
            </ul>
        </aside>
        <section class="section fl">
            <header class="header"></header>
            <div class="main"></div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style lang="scss" scoped>
    // 全局变量
    @import "./assets/css/constant";
    #app{
        height: $height;
        .aside{
            width: 248px;
            height: $height;
            background-color: $bgColor;
            border-right: 2px solid $borderColor;
            h1{
                text-align: center;
                font-size: 24px;
                font-weight: 400;
                height: 100px;
                line-height: 100px;
                color: $color;
                img{
                    margin: 26px 0;
                }
            }
            ul{
                li{
                    height: 56px;
                    line-height: 56px;
                    padding-left: 36px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: .2s all;
                    margin-bottom: 2px;
                    &:hover,&.current{
                        background-color: $color;
                        color: #fff;
                    }
                    i{
                        margin-right: 20px;
                    }
                }
            }
        }
        .section{
            width: calc(100% - 250px);
            height: $height;
            .header{
                height: 68px;
                line-height: 68px;
                background-color: $bgColor;
                border-bottom: 2px solid $borderColor;

            }
            .main{
                height: calc(100% - 90px);
                padding: 0 20px 20px;
            }
        }
    }
</style>
