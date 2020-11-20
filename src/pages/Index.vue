<template>
  <Layout :show-logo="false">
    <Author/>
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import Author from '~/components/Author.vue'

export default {
  components: {
    PostCard,
    Author
  },
  metaInfo: {
    title: 'Alexandra Rivero'
  }
}
</script>


<style lang="scss">
  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.5rem;
  }

  .fa-ul > li {
    display: flex;
    align-items: center;
  }

  .dev-icons {
    font-size: 3rem;
  }

  .dev-icons .list-inline-item svg:hover {
    color: var(--primary);
  }

  section.resume-section {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
  }

  section.resume-section .resume-item .resume-date {
    min-width: inherit;
  }

  @media (min-width: 768px) {
    section.resume-section {
      min-height: 100vh;
    }
    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
  }

  @media (min-width: 992px) {
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }
</style>
