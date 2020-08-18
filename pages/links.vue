<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>{{ $t('site.links') }}</v-card-title>
        <v-card-text>
          <a v-for="item in links" :key="item.title" :href="item.url" target="_blank">
            <voice-btn :large="true" class="link-button white--text" :class="item.color" :emoji="item.emoji">
              {{ item.tr[current_locale] }}
            </voice-btn>
          </a>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VoiceBtn from '../components/VoiceBtn';
export default {
  components: {
    VoiceBtn
  },
  data() {
    return {
      links: []
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    }
  },
  mounted() {
    const api = '//' + window.location.host + '/links.json';
    this.$axios
      .get(api)
      .then(res => {
        this.links = this.shuffle(
          res.data.filter(function (el) {
            return el.title !== 'fbk';
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    shuffle(array) {
      //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
};
</script>
