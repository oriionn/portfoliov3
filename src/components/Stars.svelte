<script>
  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1,
    });
  }
</script>

<div class="stars">
  {#each stars as star (star)}
    <div class="star" style="top:{star.y}vh; left:{star.x}vw; width:{star.size}px; height:{star.size}px;"></div>
  {/each}
</div>

<style lang="postcss">
    .stars {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: -1;
    }

    .star {
        position: absolute;
        background: white;
    }
</style>