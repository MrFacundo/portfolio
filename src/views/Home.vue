<template>
	<div class="home">
		<v-parallax
			height="500"
			dark
			src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
		>
			<v-layout fill-height align-center>
				<v-container align-md="center" align-sm="start">
					<v-row
						align-md="center"
						align-sm="start"
						justify="center"
						class="white--text"
					>
						<v-col cols="12">
							<div
								:class="{
									'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
									'display-1  font-weight-bold': $vuetify.breakpoint.smAndDown,
								}"
							>
								Hi, I'm Facundo.
							</div>
							<div
								:class="{
									headline: $vuetify.breakpoint.smAndUp,
									title: $vuetify.breakpoint.smAndDown,
								}"
							>
								I design and build web experiences.
							</div>
						</v-col>
					</v-row>
				</v-container>
			</v-layout>
		</v-parallax>
		<v-container class="mt-10">
			<v-layout wrap>
				<v-flex xs12>
					<div class="display-2 font-weight-bold max-width" id="about">
						About me
					</div>
				</v-flex>
				<v-flex xs12 my-10>
					<div class="body-1">{{ aboutText }}</div>
					<br />
				</v-flex>
			</v-layout>
			<br />
			<v-layout wrap my-5 mt-5>
				<v-flex xs12>
					<div class="display-2 font-weight-bold mb-5" id="portfolio">
						Professional projects
					</div>
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
			<v-layout wrap my-5 mt-12>
				<v-flex xs12>
					<div class="display-1 font-weight-bold mb-5" id="portfolio">
						Playground (learning projects)
					</div>
				</v-flex>
				<v-flex xs12 class="mt-5">
					<v-layout wrap>
						<template v-for="(app, i) in appsS">
							<v-flex :key="i" xs12 sm6 lg4>
								<p-portfolio-app :app="app" />
							</v-flex>
						</template>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container style="background: #FFFAC2">
			<v-layout fill-height align-center>
				<v-container>
					<v-layout wrap my-5 class="contact">
						<v-flex xs12 mb-5 mt-5>
							<div class="display-2 font-weight-bold" id="contact">
								Contact me
							</div>
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
				"I am a front-end developer / designer from Buenos Aires, currently based in Lisbon ☀️. I build projects using HTML, CSS and Javascript. I can also use libraries and frameworks such as React Js, Vue Js and Ruby on Rails. I am interested in  Besides programming, I've got a special love for jazz and cats.",
			apps: [
				{
					name: "Lisboa Em Tango (work in progress)",
					logo: "let.png",
					platforms: [
						{
							name: "apple",
							icon: "mdi-apple",
							link: "http://lisboaemtango.herokuapp.com/",
						},
					],
					description:
						"A single-page website designed for a Tango Dancing School. My role: freelancer UX/UI designer and front-end developer. In this project, I took charge of research, branding, prototyping in Figma, planning for animations and front-end development using React Js, Tailwind and Framer Motion. New challenges included implementing animations and a multi language functionality",
					technologies: [
						{
							name: "React",
							icon: "mdi-react",
						},
						{
							name: "Tailwind",
							icon: "mdi-tailwind",
						},
						{
							name: "Framer Motion",
							icon: "mdi-animation",
							link: "",
						},
						{
							name: "i18next",
							icon: "mdi-translate",
							link: "",
						},
					],
					code: {
						name: "github",
						icon: "mdi-github",
						link: "https://github.com/MrFacundo/landing-page1",
					},
				},
				{
					name: "Secret Chef",
					logo: "secret-chef.png",
					platforms: [
						{
							name: "apple",
							icon: "mdi-apple",
							link: "https://safe-earth-67754.herokuapp.com/",
						},
					],
					description:
						"Order meal kits from your favourite restaurant, along with a cooking tutorial by the chef to show you exactly how the dish is cooked. A Ruby on Rails full-stack project.",
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
					name: "Entretejiendo Voces",
					logo: "entretejiendo.png",
					platforms: [
						{
							name: "apple",
							icon: "mdi-apple",
							link: "https://entretejiendovoces.com.ar",
						},
					],
					description:
						"A landing page designed for a team of mental health professionals offering group therapy and counseling. The website includes contacts through forms, custom domain email and a front-end that allows the client to write articles in a blog.",
					technologies: [
						{
							name: "Wordpress",
							icon: "mdi-wordpress",
						},
						{
							name: "CSS",
							icon: "mdi-language-css3",
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
						link: "",
					},
				},
			],
			appsS: [
				{
					name: "MERN Shopping Cart",
					price: "COMING SOON",
					logo: "mern-cart.png",
					platforms: [
						{
							name: "apple",
							icon: "mdi-apple",
							link: "https://mern-shopping-cart1.herokuapp.com",
						},
						{
							name: "android",
							icon: "mdi-android",
							link: "",
						},
					],
					description:
						"A mini-MERN ecommerce app, featuring an Express / Node server, a database hosted in MongoDB and a front end built with React and Redux.",
					technologies: [
						{
							name: "React",
							icon: "mdi-react",
						},
						{
							name: "Redux",
							icon: "mdi-react",
						},
						{
							name: "MongoDB",
							icon: "mdi-database-search",
						},
						{
							name: "Node",
							icon: "mdi-language-javascript",
						},
						{
							name: "Express",
							icon: "mdi-server",
							link: "",
						},
					],
					code: {
						name: "github",
						icon: "mdi-github",
						link: "https://github.com/MrFacundo/MERN-ecommerce",
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
						"Similar to AirBnB, but for filming locations. Another Ruby on Rails full stack project.",
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
						"A job board frontend app. This one lists job posts by fetching search results from the Joblocal (local job offers in Germany) API.",
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
					name: "JuniorDev Positions",
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
					name: "E-commerce",
					logo: "ecommerce.png",
					platforms: [
						{
							name: "apple",
							icon: "mdi-apple",
							link: "",
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
					description: "A simple quiz I built to get started with Vue.js.",
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
					name: "Notes",
					logo: "notes.png",
					platforms: [
						{
							name: "apple",
							icon: "mdi-apple",
							link: "https://pure-gorge-50705.herokuapp.com/",
						},
						{
							name: "android",
							icon: "mdi-android",
							link: "",
						},
					],
					description:
						"A simple notes app built in React and Styled Components.",
					technologies: [
						{
							name: "React",
							icon: "mdi-react",
							link: "",
						},
						{
							name: "Styled Components",
							icon: "mdi-palette",
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
						link: "https://github.com/MrFacundo/notes",
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
