<template>
  <svg class="SvgIcon":class="className">
    <use :xlink:href="`#${iconId}`"/>
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    // 图标类型
    iconName: {
      type: String,
      required: true
    },
    // 图标颜色
    iconColor:{
      type:String,
      default:'#666'
    }
  },
  computed: {
    iconNameCp() {
      return `#icon-${this.iconName}`
    }
  }
}
</script>