<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
      <a class="signature" traget="_blank"> Name </a>
    </footer>
  </transition>
</template>

<script>
export default { name: "blog-footer" };
</script>