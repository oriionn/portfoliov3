<script>
  import Navbar from "../../components/Navbar.svelte";
  import Stars from "../../components/Stars.svelte";
  import Socials from "../../components/Socials.svelte";
</script>

<main class="text-primary">
  <Navbar currentPage="contact" />
  <Socials />
  <div class="content flex w-screen justify-center h-screen items-center">
    <div class="form">
      <form action="https://contapi.oriondev.fr" class="flex flex-col">
        <label for="pseudo" class="mb-1 text-xl">Pseudo (or complete name)</label>
        <input type="text" id="pseudo" name="pseudo" class="outline-0 text-black p-2 rounded-xl mb-3" required />
        <label for="mail" class="mb-1 text-xl">Mail</label>
        <input type="text" id="mail" name="mail" class="outline-0 text-black p-2 rounded-xl mb-3" required />
        <label for="message" class="mb-1 text-xl">Message</label>
        <textarea id="message" name="message" class="outline-0 text-black p-3 w-[400px] max-[460px]:w-[95vw] h-[100px] rounded-2xl mb-5" required></textarea>
        <input type="submit" class="bg-secondary p-3 rounded-xl cursor-pointer hover:bg-secondary-light" value="Send" />
      </form>
    </div>
  </div>
  <Stars />
</main>


<svelte:head>
  <title>Orion - About me</title>

  <meta name="keywords" content="orion, developer, discord.js, next.js, react.js, node.js, javascript, css, tailwind, rust, tauri"/>
  <meta name="robots" content="noindex,nofollow" />
  <meta name="author" content="orion, contact@oriondev.fr">
  <meta name="description" content="The simple portfolio of Orion">

  <meta property="og:title" content="Orion - Contact"/>
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