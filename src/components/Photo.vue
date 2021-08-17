<template>
<div class="lightbox" @click.self="closeLightbox">
  <img :src="photoUrl(photo.filename)">
  <div class="lightbox-info">
    <div class="lightbox-info-inner">
      <p v-if="photo.title">{{photo.title}}</p>
      <p v-if="photo.location">{{photo.location}}</p>
      <p v.if="photo.source"><a
      rel="nofollow" :href="photo.source.url">{{photo.source.name}}
        </a></p>
    </div>

  </div>
  
  </div>
</template>

<script>
import photos from '@/photos.json';

export default {
  name: "Photo",
  data(){
    return {
      photos,
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap");
*,
.title,
h1 {
  font-family: "Syncopate";
  color: #fff;
  right: 0;
  position: relative;
  padding-right: 20px;
}

hr {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 0.6px solid rgb(17, 17, 17);
}
</style>

