<template>
  <div class="icons-container">
    <div class="icons-wrapper">
      <div
        v-for="item of iconsMap"
        :key="item"
        @click="handleClipboard(generateIconCode(item),$event)"
      >
        <el-tooltip placement="top">
          <div slot="content">
            {{ generateIconCode(item) }}
          </div>
          <div class="icon-item">
            <svg-icon
              :icon-class="item"
              class-name="disabled"
            />
            <span>{{ item }}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './requireIcons'
import clipboard from '@/plugins/clipboard'

export default {
  name: 'Icons',
  data() {
	  return {
      iconsMap: icons
	  }
  },
  methods: {
	  generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
	  },
	  handleClipboard(text, event) {
      clipboard(text, event)
	  }
  }
}
</script>

<style lang="scss" scoped>
	.icons-container {
		padding: 10px;
		overflow: hidden;
		.icons-wrapper {
			margin: 0 auto;
		}
		.icon-item {
			margin: 10px;
			height: 80px;
			text-align: center;
			width: 80px;
			float: left;
			font-size: 20px;
			color: #333;
			cursor: pointer;
			padding-top: 15px;
			border-radius: 5px;
			&:hover{
				background-color: #eeeeee;
			}
		}
		span {
			display: block;
			font-size: 14px;
			margin-top: 10px;
		}
		.disabled{
			pointer-events: none;
		}
	}
</style>
