<template>
    <!-- 登录成功后进入的首页 -->
    <mu-container class="demo-container is-stripe">
        <mu-row >
                <mu-col span="1">
                    <div class="grid-cell">
                        淘
                    </div>
                </mu-col>
            <mu-col span="11">
                <div class="grid-cell">
                    <input type="text" value="寻找宝贝店铺" @click='clickJump'>
                    <span >
                        <img :src="search" >
                    </span>
                </div>
            </mu-col>
        </mu-row>
        <!-- <mu-row>
        <mu-col span="6"><div class="grid-cell"></div></mu-col>
        <mu-col span="6"><div class="grid-cell"></div></mu-col>
        </mu-row>
        <mu-row>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        </mu-row>
        <mu-row>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        </mu-row>
        <mu-row>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        </mu-row> -->
    </mu-container>
</template>
<script>
    import './content.scss'
    import search from '../../../static/search.png'
    export default {
        name:'content',
        data(){
            return{
                search,
            }
        },
        methods:{
            clickJump(){
                this.$router.push({
                    name:'clickJump'
                })
            }
        }
    }
</script>