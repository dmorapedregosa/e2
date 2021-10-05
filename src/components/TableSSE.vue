<template>
  <h1>hola</h1>
</template>

<script>
export default {
    name: 'TableSSE',
    data () {
        return {
            url: '/sse',
            includeCredentials: false,
            format: 'plain'
        }
    },
    methods: {
        connect () {
            client = this.$sse.create({
                url: this.url,
                includeCredentials: this.includeCredentials,
                format: this.format
            })
        }
    },
}
</script>

<style>

</style>