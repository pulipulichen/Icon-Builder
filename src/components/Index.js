import IconConfiguration from './IconConfiguration/IconConfiguration.vue'
import IconPreview from './IconPreview/IconPreview.vue'

import $ from 'jquery'
import domtoimage from './vendors/dom-to-img/dom-to-image.min.js'

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
  computed: {
    mainFilename () {
      return 'TODO'
    }
  },
//  watch: {
//  },
  methods: {
    downloadIconPNG () {
      let node = this.$refs.currentFrame.element
      //$(node).addClass('save-style')
      domtoimage.toPng(node)
        .then((dataUrl) => {
            let filename = this.mainFilename + '-' + (new Date()).mmddhhmm() + '.png';
            this.downlaodFile(filename, dataUrl)
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
            alert('oops, something went wrong!', error);
        });
    },
//    downloadIconSVG () {
//      
//    },
    downloadFile (filename, dataUrl) {
      let link = document.createElement("a");
            
      link.download = filename
      //console.log(link.download)

      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      //delete link;
    }
  }
}

export default Index