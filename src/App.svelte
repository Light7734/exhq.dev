<script>
  import Main from "./lib/mmain.svelte";
  import ProgressBar from "./lib/progressBar.svelte";
  import { writable } from "svelte/store";
  import handlecommands from "./handlecommands";
  import Person from "./lib/person.svelte";
  const history = writable([]);
  let buffer = "";
  export let lmao = false;
  let ps1 = ">"


  function handleinput(input) {
    history.update((arr) => {
      return [...arr, ps1 + input, handlecommands(input)]
    });
    requestAnimationFrame(() => {
      let x = document.getElementsByClassName("terminal")[0]
      x.scrollTo({top: x.scrollHeight})
    })
  }
  addEventListener("resize", (event) => {
    let x = document.getElementsByClassName("terminal")[0]
    x.scrollTo({top: x.scrollHeight})
  });

  
  document.addEventListener("keydown", function meow(event) {
    if (event.key === "t") {
      lmao = true;
      document.removeEventListener("keydown", meow);
      document.addEventListener("keydown", function meow(event) {
        if (event.key == "Backspace") {
          buffer = buffer.slice(0, -1);
        } else if (event.key == " ") {
          event.preventDefault();
          buffer += " ";
        } else if (["Control", "Shift"].indexOf(event.key) !== -1) return;
        else if (event.key == "Enter") {
          handleinput(buffer);
          buffer = "";
        } else {
          buffer += event.key;
        }
      });
    }
  });
</script>



{#if lmao}
  <div class="terminal">
    {#each $history as string}
      {string}
      <br />
    {/each}
    >{buffer}|
  </div>
{/if}

<main>


  <Main />
  
  <h1 class="skills">my skills</h1>
  <ProgressBar value={10} name="gaming" />
  <ProgressBar value={1000000} name="shitposting" />
  <ProgressBar value={1} name="being useful" />
  <ProgressBar
    value={69}
    name="i ran out of stuff but press t for a surprise"
  />
  
</main>
<br />
<br />
<br />
<br />

<h1>just look at these amazing reviews!</h1>
<div class="grid-container">
  <Person name="vendy" website="https://vendicated.dev" id="343383572805058560" opinion="gay" />
  <Person name="nea" website="https://nea.moe" id="310702108997320705" opinion="why is it so small?" />
  <Person
    name="SlightDust"
    website="https://broskullemoji.exhq.dev"
    id="386719709472751616"
    opinion="I literally don't know anything about you from the two months I've known you"
  />
  <Person
    name="lucysim"
    id="307316554805018624"
    website="https://broskullemoji.exhq.dev/"
    opinion="AAAAAAAAAAjshjfmnfjkf hsuawhendushjsf :3"
  />
  <Person name="Arxien" website="https://broskullemoji.exhq.dev/" id="159467031169597440" opinion='"one dollar"' />
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  .terminal::-webkit-scrollbar {
  display: none;
  }
  .terminal {
    background-color: #0000003f;
    position: fixed;
    width: 30%;
    height: 40%;
    word-wrap: break-word;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
  }
</style>
