import config from './config.json';

import Header from '../Header/index.vue';

export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'HomePage',
      data: config
    }
  },
  components: {
  	Header : Header
  },
  created() {
    this.config = config; 
  }
}
