<template>
  <div>
    <v-layout
      align-center 
      justify-center 
      row 
      fill-height 
      class="full-screen-height"
    >
      <v-flex text-xs-center>
        <h1 class="display-1 font-weight-thin mb-3">{{ $vuetify.lang.t('$vuetify.salutation') }}</h1>
        <h4 class="subheading">{{ $vuetify.lang.t('$vuetify.shortPresentation') }}</h4>
      </v-flex>
    </v-layout>
    <v-container></v-container>
    <v-divider></v-divider>
    <v-container></v-container>
    <v-container>
      <div
      >
        <v-layout 
          row 
          wrap
          align-center
          justify-center
        >
          <h1 
            class="display-1"
            id="about"
          >{{ $vuetify.lang.t('$vuetify.about') }}</h1>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-container
            align-center
            align-content-center
          >
            <p
              class="text-xs-center"
              v-html="$vuetify.lang.t('$vuetify.presentation')"
            >
            </p>
          </v-container>
        </v-layout>
      </div>
      <v-container grid-list-xs></v-container>
      <v-divider></v-divider>
      <v-container grid-list-xs></v-container>
      <div>
        <v-layout 
          row 
          wrap
          align-center
          justify-center
        >
          <h1
            class="display-1"
            id="skills"
          >{{ $vuetify.lang.t('$vuetify.skills') }}</h1>
        </v-layout>
        <v-layout
          row
          wrap
          align-center
          justify-center
          class="mt-3"
        >
          <div>
            <v-list subheader>
              <v-subheader>{{ $vuetify.lang.t('$vuetify.progLanguages') }}</v-subheader>
              <v-list-tile
                v-for="(lang, l) in languages"
                :key="l"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ lang.lang }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-rating
                    readonly
                    v-model="lang.level"
                    half-increments
                    color="secondary"
                    small
                  ></v-rating>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </div>
          <div>
            <v-list subheader>
              <v-subheader>{{ $vuetify.lang.t('$vuetify.frameworks') }}</v-subheader>
              <v-list-tile
                v-for="(fr, f) in frameworks"
                :key="f"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ fr.frame }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-rating
                    readonly
                    v-model="fr.level"
                    half-increments
                    color="secondary"
                    small
                  ></v-rating>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </div>
          <div>
            <v-list subheader>
              <v-subheader>{{ $vuetify.lang.t('$vuetify.databases') }}</v-subheader>
              <v-list-tile
                v-for="(db, d) in databases"
                :key="d"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ db.name }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-rating
                    readonly
                    v-model="db.level"
                    half-increments
                    color="secondary"
                    small
                  ></v-rating>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </div>
        </v-layout>
      </div>
      <v-container grid-list-xs></v-container>
      <v-divider></v-divider>
      <v-container grid-list-xs></v-container>
      <div>
        <v-layout 
          row 
          wrap
          align-center
          justify-center
        >
          <h1 
            class="display-1"
            id="portfolio"
          >{{ $vuetify.lang.t('$vuetify.portfolio') }}</h1>
        </v-layout>
        <v-timeline
          class="mt-3"
        >
          <v-timeline-item
            v-for="(job, i) in $vuetify.lang.locales.fr.jobs"
            :color="$vuetify.lang.t('$vuetify.jobs[' + i + '].color')"
            :key="i"
            small
          >
            <span
              slot="opposite"
              :class="`headline font-weight-bold ${job.color}--text`"
            >{{ $vuetify.lang.t('$vuetify.jobs[' + i + '].period') }}</span>
            <div 
              class="py-3"
            >
              <h2 :class="`headline font-weight-light mb-3 ${job.color}--text`">
                {{ $vuetify.lang.t('$vuetify.jobs[' + i + '].title') }} - 
                <v-btn
                  color="secondary"
                  outline
                  :href="$vuetify.lang.t('$vuetify.jobs[' + i + '].companyLink')"
                  target="_blank"
                >{{ $vuetify.lang.t('$vuetify.jobs[' + i + '].company') }}</v-btn>
              </h2>
              <div>
                {{ $vuetify.lang.t('$vuetify.jobs[' + i + '].description') }}
              </div>
              <span
                v-for="(tech, t) in $vuetify.lang.locales.fr.jobs[i].technologies"
                :key="t"
              >
                <v-chip
                  color="primary"
                  text-color="white"
                >{{ tech }}</v-chip>
              </span>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
      <v-container grid-list-xs></v-container>
      <v-divider></v-divider>
      <v-container grid-list-xs>
        <v-form>
          <v-layout 
            row 
            wrap
            align-center
            justify-center
          >
            <h1
              class="display-1"
              id="contact"
            >{{ $vuetify.lang.t('$vuetify.contact') }}</h1>
          </v-layout>
          <v-text-field
            v-model="name"
            :label="$vuetify.lang.t('$vuetify.name')"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            :label="$vuetify.lang.t('$vuetify.email')"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            :error-messages="messageErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            box
            :label="$vuetify.lang.t('$vuetify.message')"
            auto-grow
            required
          ></v-textarea>
          <v-btn
            @click="submit"
            class="primary"
          >{{ $vuetify.lang.t('$vuetify.send') }}</v-btn>
        </v-form>
        <v-snackbar
          v-model="snackbar"
          color="success"
          :timeout="3000"
        >
          {{ $vuetify.lang.t('$vuetify.messageSent') }}
          <v-btn
            dark
            flat
            @click="snackbar = false"
          >
            {{ $vuetify.lang.t('$vuetify.close') }}
          </v-btn>
        </v-snackbar>
      </v-container>
    </v-container>
  </div>
</template>

<style>
.full-screen-height {
  min-height: 100vh;
}
</style>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import firebase from 'firebase'

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    message: { required }
  },
  data () {
    return {
      email: '',
      message: '',
      name: '',
      snackbar: false,
      languages: [
        { lang: 'Java', level: 4.5 },
        { lang: 'Javascript', level: 4 },
        { lang: 'Python', level: 3.5 }
      ],
      frameworks: [
        { frame: 'Spring Framework', level: 4 },
        { frame: 'Vuejs', level: 4 },
        { frame: 'Angular', level: 3.5 }
      ],
      databases: [
        { name: 'Mysql', level: 3 },
        { name: 'Mongodb', level: 3 },
        { name: 'SQL Server', level: 3 }
      ]
    }
  },
  computed: {
    emailErrors () {
      const err = []
      if (!this.$v.email.$dirty) return err
      !this.$v.email.email && err.push(this.$vuetify.lang.t('$vuetify.mailErrorMsg'))
      !this.$v.email.required && err.push(this.$vuetify.lang.t('$vuetify.emailRequired'))
      return err
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push(this.$vuetify.lang.t('$vuetify.messageRequired'))
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      this.sendMessage(this.name, this.email, this.message)
    },
    sendMessage (name, email, message) {
      console.log(this.emailErrors)
      if (this.emailErrors.length === 0) {
        firebase.database().ref('mails/' + Date.now()).set({
          name: name,
          email: email,
          message: message
        })
        this.snackbar = true
        this.reset()
      }
    },
    reset () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
