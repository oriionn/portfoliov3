<script>
  import Bento from "./Bento.svelte";
  import FaTwitterSquare from "svelte-icons/fa/FaTwitterSquare.svelte";
  import FaGithubSquare from "svelte-icons/fa/FaGithubSquare.svelte";
</script>

<div class="socials fixed bottom-3 right-7 flex flex-row">
  <a href="https://twitter.oriondev.fr" target="_blank" class="text-primary hover:text-secondary mr-3">
    <div class="icon">
      <FaTwitterSquare />
    </div>
  </a>
  <a href="https://github.oriondev.fr" target="_blank" class="text-primary hover:text-secondary mr-3">
    <div class="icon">
      <FaGithubSquare />
    </div>
  </a>
  <a href="https://bento.oriondev.fr" target="_blank" class="hover:fill-secondary fill-primary">
    <div class="icon">
      <Bento />
    </div>
  </a>
</div>

<style lang="postcss">
    .icon {
        width: 32px !important;
        height: 32px !important;
    }
</style>