import{_ as e,M as t,k as l,c as s,w as a,i,o as n,a as d,N as r,d as u,r as o,F as c,b as f,h as m,O as p,P as g,Q as h,x as _,S as w}from"./index-Cfs_Z2UQ.js";const b=e({components:{DemoBlock:t},data:()=>({customStyle:{},options:{speed:300,slidesPerView:1,centeredSlides:!1,centeredSlidesBounds:!1,slidesPerGroup:1,spaceBetween:0,slidesOffsetBefore:0,slidesOffsetAfter:0,centerInsufficientSlides:!1,loop:!1,pagination:{el:!0}},speedValue:300,spaceBetween:0,slidesOffsetBefore:0,slidesOffsetAfter:0,list:[{img:"https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"},{img:"https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg"},{img:"https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg"},{img:"https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg"},{img:"https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg"},{img:"https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe6.jpg"}]}),methods:{radioChangeData(e){this.list=Array(...Array(parseInt(e.detail.value))).map(((e,t)=>({img:`https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe${t+1}.jpg`})))},radioChangeDirection(e){"vertical"==e.detail.value&&Object.assign(this.customStyle,{height:"900rpx"}),this.$refs.zSwiper.swiper.changeDirection(e.detail.value)},radioChangeEnabled(e){Object.assign(this.options,{enabled:"true"==e.detail.value}),"true"==e.detail.value?this.$refs.zSwiper.swiper.enable():this.$refs.zSwiper.swiper.disable()},radioChangeSlidesPerView(e){Object.assign(this.options,{slidesPerView:parseInt(e.detail.value)})},radioChangeCenteredSlides(e){Object.assign(this.options,{centeredSlides:"true"==e.detail.value})},radioChangeCenteredSlidesBounds(e){Object.assign(this.options,{centeredSlidesBounds:"true"==e.detail.value})},radioChangeCenterInsufficientSlides(e){Object.assign(this.options,{centerInsufficientSlides:"true"==e.detail.value})},radioChangeLoop(e){Object.assign(this.options,{loop:"true"==e.detail.value})},radioChangeSlidesPerGroup(e){Object.assign(this.options,{slidesPerGroup:parseInt(e.detail.value)})},confirmSpeed(){Object.assign(this.options,{speed:parseInt(this.speedValue)})},confirmSpaceBetween(){Object.assign(this.options,{spaceBetween:parseInt(this.spaceBetween)})},confirmSlidesOffsetBefore(){Object.assign(this.options,{slidesOffsetBefore:parseInt(this.slidesOffsetBefore)})},confirmSlidesOffsetAfter(){Object.assign(this.options,{slidesOffsetAfter:parseInt(this.slidesOffsetAfter)})}}},[["render",function(e,t,b,C,v,y){const x=m,S=i,O=l("z-swiper-item"),z=l("z-swiper"),V=l("demo-block"),B=p,k=g,j=h,I=_,A=w;return n(),s(S,{class:"debug-swiper"},{default:a((()=>[d(S,{class:"debug-swiper-header"},{default:a((()=>[d(S,{class:"header-content"},{default:a((()=>[d(S,{class:"header-content-info"},{default:a((()=>[d(S,{class:"logo"},{default:a((()=>[d(x,{class:"image",src:"https://swiper.zebraui.com/logo.png",mode:"widthFix"})])),_:1})])),_:1}),d(S,{class:"header-content-button"},{default:a((()=>[r("a",{class:"button-item",href:"https://swiper.zebraui.com/",target:"_blank"},"文档"),r("a",{class:"button-item",href:"https://ext.dcloud.net.cn/plugin?id=7273",target:"_blank"},"插件地址")])),_:1})])),_:1})])),_:1}),d(S,{class:"debug-swiper-bottom"},{default:a((()=>[d(S,{class:"debug-swiper-left"},{default:a((()=>[d(S,{class:"left-content-wrapper"},{default:a((()=>[d(S,{class:"left-content"},{default:a((()=>[d(S,{class:"left-content-view"},{default:a((()=>[d(V,{title:"调试"},{default:a((()=>[d(z,{ref:"zSwiper",modelValue:v.list,"onUpdate:modelValue":t[0]||(t[0]=e=>v.list=e),options:v.options,"custom-style":v.customStyle},{default:a((()=>[(n(!0),u(c,null,o(v.list,((e,t)=>(n(),s(O,{key:t},{default:a((()=>[d(x,{class:"image",src:e.img,mode:"aspectFill"},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["modelValue","options","custom-style"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(S,{class:"debug-swiper-content"},{default:a((()=>[d(A,{"scroll-y":"true",class:"content-scroll"},{default:a((()=>[d(S,{class:"content-scroll-wrapper"},{default:a((()=>[d(S,{class:"wrapper-item"},{default:a((()=>[d(S,{class:"item-title"},{default:a((()=>[f(" 数据 ")])),_:1}),d(S,{class:"item-content-list"},{default:a((()=>[d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" 条数 ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeData},{default:a((()=>[d(B,{value:"1"}),f("1 "),d(B,{style:{"margin-left":"20rpx"},value:"2"}),f("2 "),d(B,{style:{"margin-left":"20rpx"},value:"3"}),f("3 "),d(B,{style:{"margin-left":"20rpx"},value:"4"}),f("4 "),d(B,{style:{"margin-left":"20rpx"},value:"5"}),f("5 "),d(B,{style:{"margin-left":"20rpx"},value:"6",checked:""}),f("6 "),d(B,{style:{"margin-left":"20rpx"},value:"7"}),f("7 "),d(B,{style:{"margin-left":"20rpx"},value:"8"}),f("8 ")])),_:1},8,["onChange"])])),_:1})])),_:1})])),_:1})])),_:1}),d(S,{class:"wrapper-item"},{default:a((()=>[d(S,{class:"item-title"},{default:a((()=>[f(" Basic （swiper一般选项） ")])),_:1}),d(S,{class:"item-content-list"},{default:a((()=>[d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" direction ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeDirection},{default:a((()=>[d(B,{value:"horizontal",checked:""}),f("horizontal "),d(B,{style:{"margin-left":"20rpx"},value:"vertical"}),f("vertical ")])),_:1},8,["onChange"])])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" speed ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(j,{modelValue:v.speedValue,"onUpdate:modelValue":t[1]||(t[1]=e=>v.speedValue=e),style:{width:"100rpx"},type:"number",maxlength:"4",placeholder:"毫秒"},null,8,["modelValue"]),d(I,{size:"mini",onClick:t[2]||(t[2]=e=>y.confirmSpeed())},{default:a((()=>[f("确定")])),_:1})])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" enabled ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeEnabled},{default:a((()=>[d(B,{value:"true",checked:""}),f("true "),d(B,{style:{"margin-left":"20rpx"},value:"false"}),f("false ")])),_:1},8,["onChange"])])),_:1})])),_:1})])),_:1})])),_:1}),d(S,{class:"wrapper-item"},{default:a((()=>[d(S,{class:"item-title"},{default:a((()=>[f(" Carousel （旋转木马） ")])),_:1}),d(S,{class:"item-content-list"},{default:a((()=>[d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" slidesPerView ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeSlidesPerView},{default:a((()=>[d(B,{value:"1",checked:""}),f("1 "),d(B,{style:{"margin-left":"20rpx"},value:"2"}),f("2 "),d(B,{style:{"margin-left":"20rpx"},value:"3"}),f("3 ")])),_:1},8,["onChange"])])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" centeredSlides ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeCenteredSlides},{default:a((()=>[d(B,{value:"true"}),f("true "),d(B,{style:{"margin-left":"20rpx"},value:"false",checked:""}),f("false ")])),_:1},8,["onChange"])])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" centeredSlidesBounds ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeCenteredSlidesBounds},{default:a((()=>[d(B,{value:"true"}),f("true "),d(B,{style:{"margin-left":"20rpx"},value:"false",checked:""}),f("false ")])),_:1},8,["onChange"])])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" slidesPerGroup ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeSlidesPerGroup},{default:a((()=>[d(B,{value:"1",checked:""}),f("1 "),d(B,{style:{"margin-left":"20rpx"},value:"2"}),f("2 "),d(B,{style:{"margin-left":"20rpx"},value:"3"}),f("3 "),d(B,{style:{"margin-left":"20rpx"},value:"3"}),f("4 "),d(B,{style:{"margin-left":"20rpx"},value:"3"}),f("5 ")])),_:1},8,["onChange"])])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" spaceBetween ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(j,{modelValue:v.spaceBetween,"onUpdate:modelValue":t[3]||(t[3]=e=>v.spaceBetween=e),style:{width:"100rpx"},type:"number",maxlength:"2",placeholder:"距离"},null,8,["modelValue"]),d(I,{size:"mini",onClick:t[4]||(t[4]=e=>y.confirmSpaceBetween())},{default:a((()=>[f(" 确定 ")])),_:1})])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" slidesOffsetBefore ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(j,{modelValue:v.slidesOffsetBefore,"onUpdate:modelValue":t[5]||(t[5]=e=>v.slidesOffsetBefore=e),style:{width:"100rpx"},type:"number",maxlength:"2",placeholder:"距离"},null,8,["modelValue"]),d(I,{size:"mini",onClick:t[6]||(t[6]=e=>y.confirmSlidesOffsetBefore())},{default:a((()=>[f(" 确定 ")])),_:1})])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" slidesOffsetAfter ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(j,{modelValue:v.slidesOffsetAfter,"onUpdate:modelValue":t[7]||(t[7]=e=>v.slidesOffsetAfter=e),style:{width:"100rpx"},type:"number",maxlength:"2",placeholder:"距离"},null,8,["modelValue"]),d(I,{size:"mini",onClick:t[8]||(t[8]=e=>y.confirmSlidesOffsetAfter())},{default:a((()=>[f(" 确定 ")])),_:1})])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" centerInsufficientSlides ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeCenterInsufficientSlides},{default:a((()=>[d(B,{value:"true"}),f("true "),d(B,{style:{"margin-left":"20rpx"},value:"false",checked:""}),f("false ")])),_:1},8,["onChange"])])),_:1})])),_:1})])),_:1})])),_:1}),d(S,{class:"wrapper-item"},{default:a((()=>[d(S,{class:"item-title"},{default:a((()=>[f(" Loop （无限循环） ")])),_:1}),d(S,{class:"item-content-list"},{default:a((()=>[d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" loop ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeLoop},{default:a((()=>[d(B,{value:"true",checked:""}),f("true "),d(B,{style:{"margin-left":"20rpx"},value:"false"}),f("false ")])),_:1},8,["onChange"])])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" speed ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(j,{modelValue:v.speedValue,"onUpdate:modelValue":t[9]||(t[9]=e=>v.speedValue=e),style:{width:"100rpx"},type:"number",maxlength:"4",placeholder:"毫秒"},null,8,["modelValue"]),d(I,{size:"mini",onClick:t[10]||(t[10]=e=>y.confirmSpeed())},{default:a((()=>[f("确定")])),_:1})])),_:1})])),_:1}),d(S,{class:"content-list-item"},{default:a((()=>[d(S,{class:"item-left"},{default:a((()=>[f(" enabled ")])),_:1}),d(S,{class:"item-right"},{default:a((()=>[d(k,{onChange:y.radioChangeEnabled},{default:a((()=>[d(B,{value:"true",checked:""}),f("true "),d(B,{style:{"margin-left":"20rpx"},value:"false"}),f("false ")])),_:1},8,["onChange"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-f6dc8dc2"]]);export{b as default};
