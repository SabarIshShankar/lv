<template>
  <transition name="post">
    <article v-if="allReady" class="post">
      <header class="post__header">
        <h2 class="post_title">{{ title }}</h2>

        <h3 class="post__meta">
          by
          <router-link class="psot__author" :to="`/by/${kebabify(author)}`">
            {{ author }}
          </router-link>
          <span class="post__sep"></span>
          <time>
            {{ prettyDate(published) }}
          </time>
        </h3>

        <blockquote class="post__subtitle">
          {{ description }}
        </blockquote>

        <section class="post__body rte" v-html="content"></section>
      </header>
    </article>
  </transition>
</template>

<script>
import { kebabify, prettyDate } from "../helpers";

export default {
  name: "blog-post",
  resource: "BlogPost",
  props: { post: String },

  data() {
    return {
      title: "",
      author: "",
      content: "",
      published: "",
      description: "",
      ready: false,
    };
  },
  computed: {
    allReady() {
      return this.ready && this.post;
    },
  },

  methods: {
    kebabify,
    prettyDate,
  },

  mounted() {
    if (!this.post) {
      this.ready = true;
      return;
    }
  },
};
</script>