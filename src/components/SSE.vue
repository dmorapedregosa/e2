<template>
  <div class="table">
    <div class="table-header">New</div>
    <div class="table-header">Running</div>
    <div class="table-header">Done</div>
    <div class="table-header">Error</div>
    <div v-for="(evento, index) in this.eventos" :key="evento.id" :class="'data-sse status-' + evento.status + ' type-' + evento.type" :style="`grid-row: ${index + 2}`">
        {{ evento.id }}
    </div>
  </div>
</template>

<script>

let client 

export default {
    name: 'SSE',
    data () {
        return {
            url: 'https://www.on4u.es/testjs/events.php',
            includeCredentials: true,
            format: 'plain',
            eventos: [
             ],
        }
    },
    methods: {
        connect () {
            client = this.$sse.create({
                url: this.url,
                includeCredentials: this.includeCredentials,
                format: this.format
            })

            client.on("message", (data) => { // eslint-disable-line
                console.log(data)
                this.addEvent(data)
            })

            client.on('error', () => { // eslint-disable-line
                console.log('[error] disconnected, automatically re-attempting connection', 'system')
            })

            client.connect().then(() => {
                console.log('[info] connected', 'system')
            }).catch(() => {
                console.log('[error] failed to connect', 'system')
            })
        },
        addEvent (data) {
            const json = JSON.parse(data);
            const evento = this.eventos.find((evento) => evento.id === json.id);

            if(!evento) {
                this.eventos.push(json);
            } else {
                Object.assign(evento, json);
            }

        }
    },
    mounted () {
        this.connect();
    }
}
</script>

<style>
    .table {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1em;
        grid-row-gap: 2em;
        grid-auto-rows: max-content;
    }

    .table-header {
        background-color: ghostwhite;
        padding: 1em;
        font-weight: bold;
    }
    .status-new {
        grid-column: 1;
    }
    .status-running {
        grid-column: 2;
    }
    .status-done {
        grid-column: 3;
    }
    .status-error {
        grid-column: 4;
    }
    
    .type-hook {
        background-color: indianred;
    }

    .type-command {
        background-color: lawngreen;
    }
</style>