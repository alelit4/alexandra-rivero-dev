<template>
  <div class="post-card content-box" :class="{'post-card-has-poster' : post.poster}">
    <div class="post-card-header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card-image" :src="post.cover_image" />
    </div>
    <div class="post-card-content">
      <h2 class="post-card-title" v-html="post.title" />
      <p class="post-card-description" v-html="post.description" />

      <PostMeta class="post-card-meta" :post="post" />
      <PostTags class="post-card-tags" :post="post" />

      <g-link class="post-card-link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &-header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &-image {
    min-width: 100%;
  }

  &-title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &-tags {
    z-index: 1;
    position: relative;
  }

  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
