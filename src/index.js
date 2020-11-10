import dbclickEdit from "@/components/dblclickEditInput";
import previewPic from "@/components/previewPic";
import multiPreviewPic from "@/components/multiPreviewPic";
import drawer from '@/components/drawer'
import tipbox from '@/components/tipbox'
import createtipbox from "./components/tipbox";
Vue.config.devtools = true;
new Vue({
    components:{
        dbclickEdit,
        previewPic,
        multiPreviewPic,
        drawer,
        tipbox,
    },
    data:{
        isEdit:true,
        show:false,
        previewsrc:'',
        now:Date.now(),
        visible:false,
        activeIndex:'',
        srcArr:[
            'http://p1.music.126.net/mNBZXF0p44ctw6yUA-Dohw==/109951165333477161.jpg?imageView&quality=89',
            'http://p1.music.126.net/m_ld-Icz0Jpq_bEZ2fxWNg==/109951165333455780.jpg?imageView&quality=89',
            'http://p1.music.126.net/CJIyqcFbELGtdDJj5vay9g==/109951165333408056.jpg?imageView&quality=89',
        ]
    },
    methods:{
      showpreview(img){
          this.previewsrc = img 
          this.visible = true
      },
      showmessage(){
          this.$message({
            //   duration:0,
              showClose: true,
              message: '错了哦，这是一条错误消息',
              type: 'error'
          })
          ;
      },
        showmytips(){
            createtipbox('this is a error tips')
        }
    },
    computed:{
        now(){
            return this.now
        }
    },
    template:`
        <div>
            <dbclick-edit :isEdit="isEdit"/>
            <img @click="visible=true;activeIndex=i;" width='400px' :src="src" alt="" v-for="(src,i) in srcArr" :key='i'>
            <div>{{now}}</div>
            <multi-preview-pic :imglist="srcArr" :active-index.sync="activeIndex" :isshow.sync="visible" />
            <button @click="show=!show">点击抽屉</button>
            <drawer position='top' height='300px' :isshow.sync='show' />
            <button @click='showmessage'>点击提示框</button>
            <button @click='showmytips'>点击自制提示框</button>
        </div>
    `
}).$mount('#app')