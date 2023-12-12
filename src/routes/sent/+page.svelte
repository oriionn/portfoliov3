<script>
  import "../app.css"
  import Navbar from "../../components/Navbar.svelte";
  import Stars from "../../components/Stars.svelte";
</script>

<main class="text-primary flex">
  <Navbar />

  <div class="content flex flex-col h-screen w-screen justify-center items-center max-[670px]:w-[90vw] text-center">
    <h1 class="text-3xl font-bold">The form has been successfully confirmed.</h1>
    <p class="text-xl">You will receive a confirmation e-mail.</p>
  </div>

  <Stars />
</main>

<svelte:head>
  <title>Orion - Sent</title>

  <meta name="keywords" content="orion, developer, discord.js, next.js, react.js, node.js, javascript, css, tailwind, rust, tauri"/>
  <meta name="robots" content="noindex,nofollow" />
  <meta name="author" content="orion, contact@oriondev.fr">
  <meta name="description" content="The simple portfolio of Orion">

  <meta property="og:title" content="Orion - Sent"/>
  <meta property="og:type" content="portfolio"/>
  <meta property="og:description" content="The simple portfolio of Orion"/>
  <meta property="og:email" content="contact@oriondev.fr"/>
  <meta property="og:site_name" content="Orion"/>
  <meta property="og:url" content="https://oriondev.fr"/>
  <meta property="og:image" content="/favicon.png"/>
  <meta property="og:country-name" content="FR"/>
  <meta property="og:locale" content="en_GB" />
  <meta property="og:locale:alternate" content="fr_FR" />

  <meta http-equiv="onion-location" content="http://ytpdo4jbq33ltuxencldqpz7ys7igqoufmymtd6w7xlzmd4y7s56i7ad.onion/sent" />
</svelte:head>
