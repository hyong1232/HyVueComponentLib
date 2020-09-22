import dbclickEdit from "@/components/dblclickEditInput";
import previewPic from "@/components/previewPic";
Vue.config.devtools = true;
new Vue({
    el:'#app',
    components:{
        dbclickEdit,
        previewPic
    },
    data:{
        isEdit:true,
        previewsrc:'',
        visible:false,
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
    template:`
        <div>
            <dbclick-edit :isEdit="isEdit"/>
            <preview-pic :src.sync='previewsrc' :isShow.sync="visible" />
            <img @click="previewsrc=src;visible=true" width='400px' :src="src" alt="" v-for="(src,i) in srcArr" :key='i'>
        </div>
    `
})