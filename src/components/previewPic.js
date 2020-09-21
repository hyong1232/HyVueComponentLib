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
  methods: {},
  watch: {
      isShow(){
          this.innerIsShow = this.isShow
      },
      innerIsShow(val){
          this.$emit('update:isShow',val)
      }
  },
  template: `
    <div class="previewbox" v-if="innerIsShow===true" @click="innerIsShow=false">
        <img @click.stop :src="src" alt="preview-picture">
    </div>
    `,
};