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