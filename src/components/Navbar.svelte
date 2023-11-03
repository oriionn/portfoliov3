<script>
  import Logo from "./Logo.svelte";
  import Menu from "./Menu.svelte";
  import Close from "./Close.svelte";
  export let currentPage;
</script>

<nav class="flex absolute top-0 justify-center">
  <div class="logo ml-10 mt-5 absolute left-0 max-[620px]:hidden"><Logo /></div>
  <div class="nav flex justify-center text-center max-[500px]:invisible min[500px]:absolute max-[500px]:bg-background z-20">
    <div role="button" tabindex="0" on:click={e => {
      document.querySelector(".nav").classList.toggle("max-[500px]:invisible");
      document.querySelector(".nav").classList.toggle("max-[500px]:h-screen");
      document.querySelector(".nav").classList.toggle("max-[500px]:w-screen");
      document.querySelector(".socials").classList.toggle("max-[670px]:invisible");
      document.querySelector(".close").classList.toggle("invisible");
    }} on:keydown={(e) => {
      // Remove warning
      console.log("keydown");
    }} class="close absolute top-0 right-0 invisible cursor-pointer mt-2 mr-2">
      <Close />
    </div>
    <ul class="flex mt-5 text-2xl min-[500px]:absolute min-[500px]:left-0 min-[500px]:top-0 justify-center w-screen max-[500px]:items-center max-[500px]:flex-col max-[500px]:text-6xl">
      <li class="min-[500px]:mr-10"><a href="/" class="{currentPage === 'home' ? 'text-secondary':'text-primary'} hover-underline-animation">Home</a></li>
      <li class="min-[500px]:mr-10 max-[500px]:mt-4"><a href="/about" class="{currentPage === 'about' ? 'text-secondary':'text-primary'} hover-underline-animation">About</a></li>
      <li class="min-[500px]:mr-10 max-[500px]:mt-4"><a href="/projects" class="{currentPage === 'projects' ? 'text-secondary':'text-primary'} hover-underline-animation">Projects</a></li>
      <li class="max-[500px]:mt-4"><a href="/contact" class="{currentPage === 'contact' ? 'text-secondary':'text-primary'} hover-underline-animation">Contact</a></li>
    </ul>
  </div>
  <div role="button" tabindex="0" class="burger absolute top-0 left-0 invisible max-[500px]:visible cursor-pointer mt-2 ml-2" on:click={e => {
    document.querySelector(".nav").classList.toggle("max-[500px]:invisible");
    document.querySelector(".nav").classList.toggle("max-[500px]:h-screen");
    document.querySelector(".nav").classList.toggle("max-[500px]:w-screen");
    document.querySelector(".socials").classList.toggle("max-[670px]:invisible");
    document.querySelector(".close").classList.toggle("invisible");
  }} on:keydown={(e) => {
    // Remove warning
    console.log("keydown");
  }}>
    <Menu />
  </div>
</nav>

<style lang="postcss">
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    --secondary: #4185C5;
  }

  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>