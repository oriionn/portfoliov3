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