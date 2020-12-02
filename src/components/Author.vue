<template>
    <div class="author">

        <h1 v-if="showTitle" class="author-site-title">
            {{ $static.metadata.siteName }}
        </h1>

        <p class="author-intro">
            Alexandra Rivero. <br>
            Co-organizadora de la comunidad AdaLoveDev y GDG Tenerife.
        </p>

        <p class="author-links">
            <a href="https://twitter.com/AleSt4r"> Twitter</a>
            -
            <a href="https://github.com/alelit4"> GitHub</a>
        </p>

    </div>
</template>

<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>

<script>
    export default {
        props: ['showTitle']
    }
</script>

<style lang="scss">
    .author {
        margin: 0 auto;
        max-width: 800px;
        text-align: center;
        padding: calc(var(--space) / 2) 0;

        &_image {
            border-radius: 100%;
            width: 90px;
            height: 90px;
            margin-bottom: 1em;
        }

        &_intro {
            opacity: .8;
        }

        &_site-title {
            font-size: 1.5em;
        }

        &_links {
            margin-top: -.5em;

            a {
                margin-left: 200em;
            }
        }
    }
</style>
