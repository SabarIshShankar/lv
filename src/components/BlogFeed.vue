<template>
  <transition-group tag="ul" :name="transition" class="blog__feed">
    <li v-for="post in feed" class="preview" :key="post.id">
      <figure
        class="preview__figure"
        :class="figureClass"
        :style="getBgImg(post.image)"
      >
        <transition name="v--fade">
          <figCaption v-if="!reading || $device.phone" class="preview__details">
            <router-link
              class="preview__title"
              :to="`read/${post.id}`"
              @click.native="scrollTo(0, 220, scrollDelay)"
            >
              {{ post.title }}
            </router-link>
            <div>
              <time class="preview__meta">
                {{ prettyDate(post.published) }}
              </time>

              <router-link
                class="preview__author"
                :to="`/by/${wordsl(post.author)}`"
                @click.native="scrollTo(0, 220, scrollDelay)"
              >
                {{ post.author }}
              </router-link>
            </div>
          </figCaption>
        </transition>
      </figure>
    </li>
  </transition-group>
</template>