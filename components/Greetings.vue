<template>
  <article class="greetings container">
    <img class="greetings__avatar" :src="avatar" alt="a cyclist" />
    <div class="greetings__message">
      <p>Eh, hola!</p>
      <p>
        Aquest és un blog d'aventures bicicleteres.<br />Espere trobes les ganes
        de fer-te amb un bon <strong>cul ciclista</strong>!
      </p>
      <span class="greetings__emojis">🍑🥰</span>
    </div>
  </article>
</template>

<script>
import avatar from "@/assets/avatar.png";

export default {
  data: () => ({
    avatar
  })
};
</script>
<style lang="scss">
.greetings {
  display: flex !important;
  align-items: center;
  padding-top: $inuit-global-spacing-unit;
  padding-bottom: $inuit-global-spacing-unit;

  &__avatar {
    $size: 180px;
    width: $size;
    height: $size;
    border-radius: $size/2;
  }

  &__message {
    padding-left: $inuit-global-spacing-unit-small;
  }

  &__message p {
    color: $f-color__neutral-grey--semi-dark;
    font-style: italic;
  }

  &__emojis {
    font-size: 50px;
  }
}
</style>
