<script>
  import "../app.css";
  import Navbar from "../../components/Navbar.svelte";
  import Stars from "../../components/Stars.svelte";
  import Socials from "../../components/Socials.svelte";

  let skills = [
    {
      name: "Javascript",
      percent: 100
    },
    {
      name: "React",
      percent: 75
    },
    {
      name: "Next.js",
      percent: 65
    }
  ]
</script>

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
          <p class="mt-2 ml-4 text-3xl max-[450px]:text-2xl">{skill.name}</p>
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