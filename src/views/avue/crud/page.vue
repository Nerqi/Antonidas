<template>
    <div class="app-container">
        <avue-crud :data="tableData" :option="option" v-model="obj" :page="page" :table-loading="loading" @size-change="sizeChange" @current-change="currentChange" :search-solt="true">
            <template slot-scope="scope" slot="menu">
                <el-button plain type="primary" size="mini" @click="connectPorduct(scope.row)">按 钮</el-button>
            </template>
        </avue-crud>
    </div>
    </div>
</template>

<script>
	import baseTable from '@/mixin/table.config'
    import { fetchList } from '@/api/article'
	export default {
		name: 'BaseTable',
		mixins: [baseTable],
		data() {
			return {
				listQuery: {
					page: 1,
					pageSize: 10,
					projectName: '',
					projectBu: '',
					projectManager: ''
				},
				tableData: [],
				column:[
					{ label:'display_time', prop:'display_time', },
					{ label:'image_uri', prop:'image_uri' ,overHidden:true},
					{ label:'forecast', prop:'forecast' },
					{ label:'pageviews', prop:'pageviews' },
					{ label:'reviewer', prop:'reviewer' },
					{ label:'title', prop:'title' ,overHidden:true },
				],

			}
		},
		created() {
			this.getProjectList()
		},
		methods: {
			getProjectList() {
				this.loading = true
                fetchList({
					page: this.page.currentPage,
                    limit: this.page.pageSize,
					projectName: this.listQuery.projectName,
					projectBu: this.listQuery.projectBu,
					projectManager: this.listQuery.projectManager
				}).then(res => {
					this.loading = false
					if (res.code === 20000) {
						this.tableData = res.data.items
						this.total = res.data.total
						this.page.total =  res.data.total
					}
				}).catch(() => {
					this.loading = false
				})
			},
			getListData() {
				this.getProjectList()
			}
		}
	}
</script>

<style lang='scss'>
	.requirement {

	}
</style>

