<main class="text-primary relative w-screen h-screen">
  <Navbar currentPage="about" />
  <div class="content flex flex-col items-center justify-center w-screen absolute top-20">
    <h1 class="text-2xl mb-2 font-bold">A brief description of me</h1>
    <div class="description w-[400px] max-[470px]:w-[300px]">
      <p>I'm Orion, a young developer from Alsace who started at the age of 8. Now I'm at high school and I'm still passionate about the <b class="text-secondary">art of development</b>! </p>
      <p>I do a lot of projects that I don't necessarily finish, but I learn a lot even when I don't finish the project! </p>
      <p>Thanks to my mother for helping me discover this art.</p>
    </div>
    <h1 class="text-2xl mb-4 mt-10 font-bold">My skills</h1>
    <div class="skills grid grid-cols-2 max-[880px]:grid-cols-1 gap-x-12 gap-y-5">
      {#each skills as skill}
        <div class="skill w-[400px] max-[450px]:w-[300px] h-40 bg-background2 rounded-2xl relative">
          <p class="mt-2 ml-4 text-3xl max-[450px]:text-2xl overflow-y-hidden">{skill.name}</p>
          <div class="progress-bar w-[300px] max-[450px]:w-[200px] h-4 bg-primary rounded-2xl mt-2 ml-4 bottom-4 absolute">
            <div class="progress h-4 bg-secondary rounded-2xl" style="width: {skill.percent}%;<"></div>
          </div>
          <p class="absolute bottom-3 right-5 text-xl">{skill.percent}%</p>
        </div>
      {/each}
    </div>
  </div>
  <Socials />
  <Stars />
</main>

<script>
  import "../app.css";
  import Navbar from "../../components/Navbar.svelte";
  import Stars from "../../components/Stars.svelte";
  import Socials from "../../components/Socials.svelte";
  import axios from "axios";
  let skills = []

  axios.get("https://raw.githubusercontent.com/oriionn/portfoliov3/main/competences.json").then(res => {
    skills = res.data
  })
</script>

<style>
    * {
        overflow-x: hidden;
    }
</style>

<svelte:head>
  <title>Orion - About me</title>

  <meta name="keywords" content="orion, developer, discord.js, next.js, react.js, node.js, javascript, css, tailwind, rust, tauri"/>
  <meta name="robots" content="noindex,nofollow" />
  <meta name="author" content="orion, contact@oriondev.fr">
  <meta name="description" content="The simple portfolio of Orion">

  <meta property="og:title" content="Orion - About"/>
  <meta property="og:type" content="portfolio"/>
  <meta property="og:description" content="The simple portfolio of Orion"/>
  <meta property="og:email" content="contact@oriondev.fr"/>
  <meta property="og:site_name" content="Orion"/>
  <meta property="og:url" content="https://oriondev.fr"/>
  <meta property="og:image" content="/favicon.png"/>
  <meta property="og:country-name" content="FR"/>
  <meta property="og:locale" content="en_GB" />
  <meta property="og:locale:alternate" content="fr_FR" />
</svelte:head>