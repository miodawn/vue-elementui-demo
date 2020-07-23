<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <!--左侧导航栏-->
        <el-aside width="200px" height="100%" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['0']">
                <el-submenu v-for="(item,index) in $router.options.routes" :index=index.toString() v-if="item.show">
                    <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                    <el-menu-item-group>
                        <el-menu-item v-for="item2 in item.children" :index=item2.path v-if="item2.show"
                                      :class="$route.path===item2.path?'is-active':''">{{item2.name}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <!--右侧内嵌路由页面-->
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "App",
    }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>