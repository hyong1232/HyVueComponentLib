import dbclickEdit from "@/components/dblclickEditInput";
import previewPic from "@/components/previewPic";
import multiPreviewPic from "@/components/multiPreviewPic";
Vue.config.devtools = true;
new Vue({
    components:{
        dbclickEdit,
        previewPic,
        multiPreviewPic,
    },
    data:{
        isEdit:true,
        previewsrc:'',
        now:Date.now(),
        visible:false,
        activeIndex:0,
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
        </div>
    `
}).$mount('#app')