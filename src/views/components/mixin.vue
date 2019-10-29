<template>
  <div class="mixin-components-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span>水波纹效果</span>
          </div>
          <div class="component-item">
            <el-button
              v-waves
              type="primary"
            >
              水波纹效果
            </el-button>
            <el-button
              v-waves
              type="success"
            >
              保存
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import waves from '@/directive/waves/index.js' // 水波纹指令
export default {
  name: 'MixinComponent',
  components: {},
  directives: {
	  waves
  }
}
</script>
<style scoped lang="scss">
	.mixin-components-container {
		background-color: #f0f2f5;
		padding: 20px;
		min-height: calc(100vh - 84px);
		.component-item{
			height: 100px;
		}
	}
</style>
