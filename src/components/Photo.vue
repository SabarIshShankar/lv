<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(photo.filename)" />
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p v.if="photo.source">
          <a rel="nofollow" :href="photo.source.url"
            >{{ photo.source.name }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import photos from "@/photos.json";

export default {
  name: "Photo",
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    closeLightbox() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap");
*,
.title,
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
}
.lightbox-info {
  margin: auto 2rem auto 0;
}
.lightbox-info-inner {
  background-color: #FFFFFF;
  display: inline-block;
  padding: 2rem;
}
</style>

