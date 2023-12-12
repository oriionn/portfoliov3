<script>
  import "./app.css";
  import Navbar from "../components/Navbar.svelte";
  import Stars from "../components/Stars.svelte";
  import Socials from "../components/Socials.svelte";
</script>


<main class="text-primary w-screen h-screen flex justify-center flex-col text-center">
  <Navbar currentPage="home" />
  <Socials />
  <h1 class="text-8xl font-bold">Orion</h1>
  <h2 class="text-secondary text-5xl max-[500px]:text-3xl mt-4">Backend developer</h2>
  <p class="text-lg mt-2">So my projects are ugly lol</p>
  <Stars />
</main>


<svelte:head>
  <title>Orion - Home</title>

  <meta name="keywords" content="orion, developer, discord.js, next.js, react.js, node.js, javascript, css, tailwind, rust, tauri"/>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="orion, contact@oriondev.fr">
  <meta name="description" content="The simple portfolio of Orion">

  <meta property="og:title" content="Orion - Home"/>
  <meta property="og:type" content="portfolio"/>
  <meta property="og:description" content="The simple portfolio of Orion"/>
  <meta property="og:email" content="contact@oriondev.fr"/>
  <meta property="og:site_name" content="Orion"/>
  <meta property="og:url" content="https://oriondev.fr"/>
  <meta property="og:image" content="/favicon.png"/>
  <meta property="og:country-name" content="FR"/>
  <meta property="og:locale" content="en_GB" />
  <meta property="og:locale:alternate" content="fr_FR" />

  <meta http-equiv="onion-location" content="http://ytpdo4jbq33ltuxencldqpz7ys7igqoufmymtd6w7xlzmd4y7s56i7ad.onion/" />
</svelte:head>
