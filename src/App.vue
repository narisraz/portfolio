<template>
  <v-app>
    <v-toolbar
      app
      flat
      fixed
    >
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn flat @click="$vuetify.goTo('#about', options)">{{ $vuetify.lang.t('$vuetify.about') }}</v-btn>
        <v-btn flat @click="$vuetify.goTo('#skills', options)">{{ $vuetify.lang.t('$vuetify.skills') }}</v-btn>
        <v-btn flat @click="$vuetify.goTo('#portfolio', options)">{{ $vuetify.lang.t('$vuetify.portfolio') }}</v-btn>
        <v-btn flat @click="$vuetify.goTo('#contact', options)">{{ $vuetify.lang.t('$vuetify.contact') }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-menu
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <v-toolbar-title slot="activator">
          <img
            :src="currentLanguage.icon"
          />
          <span class="body-1 pl-2 hidden-sm-and-down">{{ currentLanguage.title }}</span>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile
            v-for="lang in languages"
            :key="lang.id"
            @click="changeLang(lang.id)"
          >
            <v-list-tile-title>
              <img
                :src="lang.icon"
              />
              <span class="body-1 pl-2">{{ lang.title }}</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list dense>
        <v-list-tile
          @click="goTo('#about')"
        >
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $vuetify.lang.t('$vuetify.about') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="goTo('#skills')"
        >
          <v-list-tile-action>
            <v-icon>code</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $vuetify.lang.t('$vuetify.skills') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="goTo('#portfolio')"
        >
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $vuetify.lang.t('$vuetify.portfolio') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="goTo('#contact')"
        >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $vuetify.lang.t('$vuetify.contact') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
    <v-footer
      app
      absolute
    >
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      year: (new Date()).getFullYear(),
      jobs: [],
      languages: [
        {
          id: 'fr',
          icon: require('@/assets/flag/france-flag-icon-16.png'),
          title: 'Français'
        },
        {
          id: 'en',
          icon: require('@/assets/flag/united-kingdom-flag-icon-16.png'),
          title: 'English'
        }
      ],
      currentLanguage: {}
    }
  },
  created: function () {
    this.currentLanguage = this.getCurrentLang()
  },
  methods: {
    getCurrentLang () {
      return this.languages.filter(lang => lang.id === this.$vuetify.lang.current)[0]
    },
    changeLang (id) {
      this.currentLanguage = this.languages.filter(lang => lang.id === id)[0]
      this.$vuetify.lang.current = id
      this.$cookie.set('lang', id)
    },
    goTo (id) {
      this.drawer = !this.drawer
      this.$vuetify.goTo(id, this.options)
    }
  },
  computed: {
    options () {
      return {
        duration: 792,
        offset: -149,
        easing: 'easeInOutCubic'
      }
    }
  },
  name: 'App'
}
</script>
