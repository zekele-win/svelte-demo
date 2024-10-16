<script>
  import { pop } from "svelte-spa-router";

  let title = "I am a svelet demo";
</script>

<div class="flex justify-center m-5">
  <p class="text-5xl">{title}</p>
</div>

<div class="flex justify-center">
  <button class="underline underline-offset-4 text-black hover:text-gray-500" type="link" on:click={() => pop()}>
    Home
  </button>
</div>
