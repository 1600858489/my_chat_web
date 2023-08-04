<template>
  <svg class="SvgIcon" :class="className">
    <use :xlink:href="`#${iconId}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconId: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
};
</script>

