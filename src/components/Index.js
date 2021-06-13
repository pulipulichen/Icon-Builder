import IconConfiguration from './IconConfiguration/IconConfiguration.vue'
import IconPreview from './IconPreview/IconPreview.vue'

/* global Node */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      iconMain: null,
      iconLeftTop: '',
      iconLeftBottom: '',
      iconRightTop: '',
      iconRightBottom: ''
    }
  },
  components: {
    IconPreview,
    IconConfiguration
  },
//  computed: {
//  },
//  watch: {
//  },
  methods: {
    downloadIcon () {
      
    }
  }
}

export default Index