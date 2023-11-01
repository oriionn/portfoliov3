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