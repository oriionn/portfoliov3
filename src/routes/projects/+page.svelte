<script>
  import Navbar from "../../components/Navbar.svelte";
  import Stars from "../../components/Stars.svelte";
  import Socials from "../../components/Socials.svelte";
  import axios from "axios";
  let projects = [];

  axios.get("https://raw.githubusercontent.com/oriionn/portfoliov3/main/projects.json").then(res => {
    projects = res.data;
  });
</script>

<main class="text-primary">
  <h1 class="max-[500px]:visible invisible absolute top-2 left-0 w-screen text-center text-3xl font-bold">My projects</h1>
  <Navbar currentPage="projects" />
  <Socials />
  <div class="content flex flex-col items-center justify-center w-screen absolute top-20">
    <div class="projects grid grid-cols-2 max-[1400px]:grid-cols-1 gap-x-12 gap-y-5">
      {#each projects as project, index}
        <div role="button" tabindex="0" class="project p-5 w-[500px] max-[500px]:w-[400px] h-auto max-[400px]:w-[95vw] bg-background2 rounded-2xl relative flex transition-transform transform hover:-translate-y-2" on:click={() => {
          window.open(project.link, "_blank");
        }} on:keydown={() => {
          console.log("keydown");
        }}>
          <img src="{project.image}" alt="{project.name}" class="h-[100px] w-[100px] rounded-2xl mt-auto mb-auto">
          <div class="project_desc">
            <p class="mt-2 ml-4 text-3xl max-[450px]:text-xl font-bold overflow-y-hidden">{project.name}</p>
            <p class="mt-2 ml-4 text-lg max-[450px]:text-[15px]">{project.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <Stars />
</main>

<svelte:head>
  <title>Orion - Projects</title>

  <meta name="keywords" content="orion, developer, discord.js, next.js, react.js, node.js, javascript, css, tailwind, rust, tauri"/>
  <meta name="robots" content="noindex,nofollow" />
  <meta name="author" content="orion, contact@oriondev.fr">
  <meta name="description" content="The simple portfolio of Orion">

  <meta property="og:title" content="Orion - Projects"/>
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