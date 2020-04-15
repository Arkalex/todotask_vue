<template>
    <div>
        <h1>Editar</h1>
        {{tarea}}
        {{tarea.nombre}}
        <form @submit.prevent="editarTarea(tarea)" class="form-inline">            
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input type="text" class="form-control" v-model="tarea.nombre">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Editar</button>
        
        </form>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getTarea', 'editarTarea'])
    },
    created(){
        console.log(this.id)
        this.getTarea(this.id)
    }, 
    computed: {
        ...mapState(['tarea'])
    }
}
</script>