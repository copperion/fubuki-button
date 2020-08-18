<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-btn
        class="ma-1 pa-2 vo-btn"
        :class="[dark_text]"
        :elevation="hover ? 6 : 2"
        rounded
        height="max-content"
        min-height="36px"
        :large="large"
        :style="{ '--hover-content': 'url(\'' + emoji_url + '\')' }"
      >
        <div>
          <slot></slot>
        </div>
      </v-btn>
    </template>
  </v-hover>
</template>
<script>
import twemoji from 'twemoji';

export default {
  name: 'VoiceBtn',
  props: {
    emoji: {
      default: '🌽',
      type: String
    },
    large: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      twe_para: {
        base: 'https://emoji.lonelyion.com',
        folder: '/svg',
        ext: '.svg'
      }
    };
  },
  computed: {
    dark_text() {
      return {
        'grey--text text--lighten-2': this.$vuetify.theme.dark
      };
    },
    emoji_url() {
      let reg = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
      let str = twemoji.parse(this.emoji, this.twe_para);
      let match = reg.exec(str);
      return match[1];
    }
  }
};
</script>
<style lang="scss" scoped>
$nonlinear-transition: cubic-bezier(0.25, 0.8, 0.5, 1);
.vo-btn {
  display: inline-block;
  max-width: 100%;
  word-wrap: break-word !important;
  word-break: break-all !important;
  white-space: normal !important;
  text-transform: none !important;
  font-weight: 400;
  text-align: center;
  /*background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%) !important;*/
}

.vo-btn div {
  display: inline-block;
  transition: 0.5s $nonlinear-transition;
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
}

.vo-btn div:after {
  content: var(--hover-content);
  position: absolute;
  right: -20px;
  opacity: 0;
  transition: 0.5s $nonlinear-transition;
  width: 20px;
  height: 20px;
}

.vo-btn:hover div {
  padding-left: 0;
  padding-right: 24px;
}

.vo-btn:hover div:after {
  opacity: 1;
  right: 0;
  text-align: center;
}
</style>
