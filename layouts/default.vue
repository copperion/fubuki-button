<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="1024" class="elevation-3" fixed app>
      <!--
      <template v-slot:img>
        <v-img />
        <div
          class="nav-darwer-overlay"
          :class="$vuetify.theme.dark ? 'nav-darwer-overlay-dark' : 'nav-darwer-overlay-light'"
        />
      </template>
      -->
      <v-list style="padding-top: 0;">
        <v-list-item to="/" router exact dense>
          <v-list-item-action>
            <v-icon>{{ icons.apps }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.index') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in nav_items"
          :key="i"
          :href="item.to"
          target="_blank"
          rel="noreferrer"
          router
          exact
          dense
        >
          <v-list-item-action>
            <v-img :src="item.icon" style="width: 24px;" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-if="current_locale === 'zh'">
        <v-divider />
        <v-list>
          <v-list-item
            v-for="item in external_cn"
            :key="item.to"
            dense
            :href="item.to"
            target="_blank"
            rel="noreferrer"
          >
            <v-list-item-action>
              <v-icon>{{ icons[item.icon] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <v-divider />
      <v-list>
        <v-list-item dense to="/links" router exact>
          <v-list-item-action>
            <v-icon>{{ icons.play_list_star }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.links') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item dense to="/about" router exact>
          <v-list-item-action>
            <v-icon>{{ icons.code_tags }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.about') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dense
      class="primary white--text"
      :class="[this.$vuetify.theme.dark ? 'gradient-header-dark' : 'gradient-header-light']"
      app
    >
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="$t('site.title') + '(^・ω・^§)ﾉ'" />
      <v-img src="/img/oruyanke_transparent.png" style="max-width: 24px; margin-left: 6px;" />
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon class="white--text" @click="switch_dark()" v-on="on">
            <v-icon>{{ icons.brightness }}</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('site.switch_dark_mode') }}</span>
      </v-tooltip>
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon class="white--text" v-on="{ ...tooltip, ...menu }">
                <v-icon>{{ icons.translate }}</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('site.switch_language') }}</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item id="lang-switch-zh" @click="switch_lang('zh')">
            <v-list-item-title>简体中文</v-list-item-title>
          </v-list-item>
          <v-list-item id="lang-switch-ja" @click="switch_lang('ja')">
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item id="lang-switch-en" @click="switch_lang('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container class="page">
        <nuxt />
      </v-container>
      <v-footer :fixed="false" class="footer">
        <div>
          <div style="vertical-align: middle;">
            <span>&copy; {{ new Date().getFullYear() }} </span>
            <span>
              <a href="https://github.com/lonelyion" target="_blank" rel="noreferrer">
                {{ $t('site.footer.lonely_ion') }}
              </a>
            </span>
            <span>
              &
              <a href="https://github.com/oruyanke" target="_blank" rel="noreferrer">
                {{ $t('site.footer.oruyanke') }}
              </a>
            </span>
            <v-btn
              icon
              href="https://github.com/oruyanke/fubuki-button"
              target="_blank"
              style="vertical-align: middle;"
              rel="noreferrer"
            >
              <v-icon>{{ icons.github }}</v-icon>
            </v-btn>
          </div>
          <div>
            <span>Powered by</span>
            <a href="https://www.vercel.com/?utm_source=oruyanke" target="_blank" rel="noreferrer">
              <img :src="vercel_logo" alt="vercel" height="16px" />
            </a>
          </div>
          <div>
            <p>{{ $t('site.footer.content') }}</p>
            <p v-if="$i18n.locale === 'zh'" style="font-size: 12px;">
              <a href="https://icp.gov.moe" target="_blank" rel="noreferrer">萌ICP备 </a>
              <a href="https://icp.gov.moe/?keyword=20201005" target="_blank" rel="noreferrer"> 20201005号</a>
            </p>
          </div>
        </div>
      </v-footer>
    </v-main>
    <console-message />
  </v-app>
</template>

<style lang="scss">
$blur-function: blur(3px);
.v-application {
  html[lang='en'] & {
    font-family: $en-body-fonts;
  }
  html[lang='ja'] & {
    font-family: $ja-body-fonts;
  }
  html[lang='zh'] & {
    font-family: $zh-body-fonts;
  }
}
.gradient-header-light {
  background-image: linear-gradient(120deg, #1e64aa 0%, #55c8ff 100%) !important;
}
.gradient-header-dark {
  background-image: linear-gradient(120deg, #003c78 0%, #0087c8 100%) !important;
}
.nav-drawer-img {
  width: auto;
  height: 100%;
  /*
  -webkit-filter: $blur-function;
  -moz-filter: $blur-function;
  -ms-filter: $blur-function;
  filter: $blur-function;
   */
}
.nav-darwer-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.nav-darwer-overlay-light {
  background-color: rgba(255, 255, 255, 0.8);
}
.nav-darwer-overlay-dark {
  background-color: rgba(0, 0, 0, 0.8);
}
a {
  text-decoration: none;
}
.page {
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 150px;
}
.footer {
  margin-top: -150px;
}
</style>

<script>
import ConsoleMessage from '../components/ConsoleMessage';
import {
  mdiApps,
  mdiCodeTags,
  mdiBrightness2,
  mdiTranslate,
  mdiGithub,
  mdiNewspaper,
  mdiAlphaBBox,
  mdiPlaylistStar
} from '@mdi/js';

export default {
  components: {
    ConsoleMessage
  },
  data() {
    return {
      icons: {
        apps: mdiApps,
        code_tags: mdiCodeTags,
        brightness: mdiBrightness2,
        translate: mdiTranslate,
        github: mdiGithub,
        newspaper: mdiNewspaper,
        alpha_b_box: mdiAlphaBBox,
        play_list_star: mdiPlaylistStar
      },
      drawer: false,
      fixed: false,
      nav_items: [
        {
          icon: '/img/youtube-fill.svg',
          title: 'Youtube',
          to: 'https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg?sub_confirmation=1'
        },
        {
          icon: '/img/twitter-fill.svg',
          title: 'Twitter',
          to: 'https://twitter.com/shirakamifubuki'
        },
        {
          icon: '/img/bilibili-fill.svg',
          title: 'Bilibili',
          to: 'https://space.bilibili.com/332704117'
        }
      ],
      external_cn: [
        {
          icon: 'alpha_b_box',
          title: '御宅白狐的狐笋之林',
          to: 'https://space.bilibili.com/314977548'
        },
        {
          icon: 'newspaper',
          title: '白上吹雪周报',
          to: 'https://space.bilibili.com/487763794/article'
        }
      ]
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    },
    vercel_logo() {
      const mode = this.$vuetify.theme.dark ? 'dark' : 'light';
      return '/img/vercel/' + mode + '.svg';
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.$store.state.dark === 'true';
    if (window.innerWidth >= 1024) {
      this.drawer = true;
    }
  },
  methods: {
    switch_dark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$store.commit('SET_DARK', this.$vuetify.theme.dark);
    },
    switch_lang(lang) {
      console.log('switching to ' + lang);
      this.$store.commit('SET_LANG', lang);
      this.$i18n.locale = lang;
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.current_locale
      }
    };
  }
};
</script>
