export default {
  name: "previewPic",
  props: {
    src: {
      type: String,
      require: true,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
        innerIsShow:this.isShow
    }
  },
  methods: {
    _getImg(src) {
      return new Promise(function (resolve, reject) {
        let img = new Image()
        img.onload = function (params) {
          resolve(img)
        }
        img.src = src
      })
    }
  },
  watch: {
      isShow(){
          this.innerIsShow = this.isShow
      },
      innerIsShow(val){
          this.$emit('update:isShow',val)
        },
      src(val){
        this.$nextTick(_=>{
          this._getImg(val)
          .then(img=>{
            let canvas = this.$refs.canvas
            let ctv = canvas.getContext('2d')
            ctv.clearRect(0,0,canvas.width,canvas.height)
            canvas.width = img.width
            canvas.height = img.height
            ctv.drawImage(img,0,0,img.width,img.height)
          }).catch(e=>{
            console.log(e)
          })

        })
      },
  },
  template: `
    <div class="previewbox" v-if="innerIsShow===true" @click="innerIsShow=false">
        <canvas @click.stop ref='canvas'/>
    </div>
    `,
};