<template>
  <div class="home">
    <v-parallax
      height="500"
      dark
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <v-layout fill-height align-center>
        <v-container align-md="center" align-sm="start" >
          <v-row align-md="center" align-sm="start" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1  font-weight-bold': $vuetify.breakpoint.smAndDown}"
              >Hi, I'm Facundo.</div>
              <div
                :class="{'headline': $vuetify.breakpoint.smAndUp, 'title': $vuetify.breakpoint.smAndDown}"
              >I design and build websites and applications.</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-parallax>
    <v-container class="mt-10">
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-2 font-weight-bold max-width" id="about">About me </div>
        </v-flex>
        <v-flex xs12 my-10>
          <div class="body-1">{{aboutText}}</div>
          <br>
        </v-flex>
      </v-layout>
      <br>
      <v-layout wrap my-5 mt-5>
        <v-flex xs12>
          <div class="display-2 font-weight-bold mb-5" id="portfolio">Some of my projects</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in apps">
              <v-flex :key="i" xs12 sm6 lg4>
                <p-portfolio-app :app="app" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container style="background: #f5f5f5">
      <v-layout fill-height align-center>
        <v-container>
          <v-layout wrap my-5 class="contact">
            <v-flex xs12 mb-5 mt-5>
              <div class="display-2 font-weight-bold" id="contact">Contact</div>
            </v-flex>
            <template v-for="(contact, i) in contactLinks">
              <v-flex sm6 md4 xs12 :key="i">
                <p-contact-info :contact="contact" />
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";

export default {
  name: "home",
  components: {
    PPortfolioApp,
    PContactInfo,
  },
  data() {
    return {
      aboutText:
        "I am a front-end developer from Buenos Aires, currently based in Berlin. A recent bootcamp graduate, I take every opportunity I can to learn and apply new things on front-end projects. Besides programming, I've got a special interest in jazz and cats.",
      apps: [
        {
          name: "Secret Chef",
          logo: "secret-chef.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "https://secretchef1.herokuapp.com/",
            },
          ],
          description:
            "Order meal kits from your favourite restaurant, along with a cooking tutorial by the chef to show you exactly how the dish is cooked. A Ruby on Rails project I developed during my while studying at Le Wagon Bootcamp.",
          technologies: [
            {
              name: "Ruby on Rails",
              icon: "mdi-language-ruby-on-rails",
            },
            {
              name: "Bootstrap",
              icon: "mdi-bootstrap",
            },
            {
              name: "ActiveRecord",
              icon: "mdi-database-search",
              link: "",
            },
            {
              name: "Javascript",
              icon: "mdi-language-javascript",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/Who-s-cooking",
          },
        },
        {
          name: "Video game Quiz",
          price: "COMING SOON",
          logo: "quiz.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "https://mrfacundo.github.io/vueJS-videogame-quiz/",
            },
            {
              name: "android",
              icon: "mdi-android",
              link: "",
            },
          ],
          description:
            "A simple quiz I built to get started with Vue.js.",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "",
            },
            {
              name: "Bootstrap",
              icon: "mdi-bootstrap",
              link: "",
            },
            {
              name: "Javascript",
              icon: "mdi-language-javascript",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/vueJS-videogame-quiz",
          },
        },
        {
          name: "Shoot me",
          price: "COMING SOON",
          logo: "shoot-me.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "http://shoot-me-398.herokuapp.com/",
            },
            {
              name: "android",
              icon: "mdi-android",
              link: "",
            },
          ],
          description:
            "Similar to AirBnB, but for filming locations. Another Ruby on Rails project I developed during my coding bootcamp.",
          technologies: [
            {
              name: "Ruby on Rails",
              icon: "mdi-language-ruby-on-rails",
              link: "",
            },
            {
              name: "Bootstrap",
              icon: "mdi-bootstrap",
              link: "",
            },
            {
              name: "ActiveRecord",
              icon: "mdi-database-search",
              link: "",
            },
            {
              name: "Node",
              icon: "mdi-language-javascript",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/Shoot-Me",
          },
        },
        {
          name: "JuniorDev Positions (to be deployed)",
          logo: "juniordevpos.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "",
            },
          ],
          description:
            "A job board app for entry level developers. The app receives a data feed from the GitHub Jobs API, filters the results through a simple algorythm and displays them through React FrontEnd",
          technologies: [
            {
              name: "React",
              icon: "mdi-react",
            },
            {
              name: "Node",
              icon: "mdi-nodejs",
              link: "",
            },
            {
              name: "Express REST API",
              icon: "mdi-api",
            },
            {
              name: "Material UI",
              icon: "mdi-material-ui",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/juniordevpositions",
          },
        },
        {
          name: "E-commerce (to be deployed)",
          logo: "ecommerce.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "https://secretchef1.herokuapp.com/",
            },
          ],
          description:
            "An e-commerce front-end prototype, with responsive layout, sorting methods and filters, built on React.",
          technologies: [
            {
              name: "React",
              icon: "mdi-react",
            },
            {
              name: "GraphQL",
              icon: "mdi-graphql",
            },
            {
              name: "Node",
              icon: "mdi-nodejs",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/e-commerce",
          },
        },
        {
          name: "Job Search UI",
          logo: "job-search-ui.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "https://job-search-ui398.herokuapp.com/",
            },
          ],
          description:
            "Another job board Frontend app. This one lists job posts by fetching search results from the Joblocal (local job offers in Germany) API.",
          technologies: [
            {
              name: "React",
              icon: "mdi-react",
            },
            {
              name: "Express.js",
              icon: "mdi-api",
            },
            {
              name: "React-Bootstrap",
              icon: "mdi-bootstrap",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/job-search-ui/",
          },
        },
        {
          name: "Weather App",
          logo: "weather.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "https://afternoon-cliffs-65346.herokuapp.com/",
            },
          ],
          description:
            "A weather app that includes geolocation and dynamic backgrounds. I also used this projects to get familiar with Redux, Typescript and Bulma.",
          technologies: [
            {
              name: "React",
              icon: "mdi-react",
            },
            {
              name: "Typescript.js",
              icon: "mdi-language-typescript",
            },
            {
              name: "Redux",
              icon: "mdi-react",
            },
            {
              name: "Bulma",
              icon: "mdi-bulma",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MrFacundo/weatherapp3",
          },
        },
      ],
      contactLinks: [
        {
          name: "Email",
          value: "ftroitero@gmail.com",
          link: "mailto:ftroitero@gmail.com",
          icon: "mdi-email",
        },
        {
          name: "LinkedIn",
          value: "Facundo Troitero",
          link: "https://www.linkedin.com/in/facundo-troitero/",
          icon: "mdi-linkedin",
        },
        {
          name: "Github",
          value: "MrFacundo",
          link: "https://github.com/MrFacundo/",
          icon: "mdi-github",
        },
      ],
    };
  },
};
</script>
