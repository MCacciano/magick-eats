<template>
  <div>
    <h1>Magick Eats</h1>
    <div v-for="burger in burgers" :key="burger.id">
      <h1>{{ burger.name }}</h1>
      <SanityImage :asset-id="burger.img.assetId" auto="format" />
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity';

const query = groq`*[_type == "burger"] {
  name,
  "id": _id,
  "img": img.asset -> {
    "assetId": _id
  },
}`;

export default {
  async fetch() {
    const res = await this.$sanity.fetch(query);
    this.burgers = res;
  },
  data: () => ({
    burgers: [],
  }),
};
</script>
