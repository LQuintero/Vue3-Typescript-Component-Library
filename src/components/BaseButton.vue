<template>
    <button
    :disabled="disabled"
    :class="baseButtonStyle"
    @click="handleClick"
    @mouseover="hoverCallback(true)"
    @mouseleave="hoverCallback(false)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'

import  ButtonType from '../types/ButtonType'

export default defineComponent({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<ButtonType>,
      default: ButtonType.button
  }
  },
  setup(props, { emit }) {
    const baseButtonStyle = computed(() => {
    const selected = props.selected ? "selected" : "";
    return `base-button ${selected}`;
    })

    function handleClick(event: MouseEvent) {
      emit('onClicked', event)
    }
    
    return { baseButtonStyle, handleClick }
  },
  methods: {
    hoverCallback(isHovering: Boolean) {
      this.$emit('onHover', isHovering)
    }
  }
})
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 5px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: Lato;
  color: #284e6f;
}
:hover {
  opacity: 0.8;
}
:disabled {
  color: white;
  cursor: default;
  pointer-events: none;
}
.selected {
  color: white;
  background-color: #5587f8;
  border: 1px solid #5c778e;
  font-size: 20px;
}
</style>