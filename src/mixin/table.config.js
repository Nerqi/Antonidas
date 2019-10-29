import { page,option } from '@/utils/constant'
export default {
  data() {
    return {
      obj:{},
      page: {},
      loading:false,
      option:option,
      column:[],
    }
  },
  computed: {
  },
  watch: {
    listQuery: {
      handler(newValue, oldValue) {
        this.resetPage()
        this.getListData()
      },
      deep: true
    },
  },
  created() {
    this.option.column=this.column
    this.resetPage()
  },
  methods: {
    // 初始化分页器
    resetPage(){
      this.page = _.cloneDeep(page)
    },
    sizeChange(val) {
      this.page.currentPage = 1
      this.page.pageSize = val
      this.getListData()
    },
    currentChange(val) {
      this.page.currentPage = val
      this.getListData()
    },
  }
}
