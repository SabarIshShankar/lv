<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <blog-nav :content="content" :filter="filters" :navs="navs" />
    <blog-feed :filters="filters" />
    <blog-post :post="post" />
    <blog-footer />
  </main>
</template>

<script>
import BlogNav from "./BlogNav";
import BlogFeed from "./BlogFeed";
import BlogPost from "./BlogPost";
import BlogFooter from "./BlogFooter";

export default {
  name: "blog",
  components: { BlogNav, BlogFeed, BlogPost, BlogFooter },
  resource: "Blog",
  props: {
    post: String,
    author: String,
  },

  data() {
    return {
      navs: 0,
      title: "",
      labels: {
        post: "",
        author: "",
      },
    };
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels };
    },
    filters() {
      let filters = {};

      if (this.post) filters.post = this.post;
      if (this.author) filters.author = this.author;

      return filters;
    },
  },

  watch: {
    "$route.name"(to, from) {
      if (to !== from) this.navs++;
    },
  },
  mounted() {
    this.$getResource("blog").then((x) => {});
  },
};
</script>
<style scoped>
::selection {
  color: rgb(0, 0, 0);
  background-color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4b4b4b;
}
</style>
