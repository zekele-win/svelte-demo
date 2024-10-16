<script>
  import { link } from "svelte-spa-router";

  let title = "Hello buddy";
</script>

<div class="flex justify-center m-5">
  <p class="text-5xl">{title}</p>
</div>

<div class="flex justify-center">
  <a class="underline underline-offset-4 text-black hover:text-gray-500" href="/about" use:link>
    About
  </a>
</div>
