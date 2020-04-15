<template>
    <div>
        <h1>Lista de tareas</h1>
        <router-link :to="{name: 'agregar'}">
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>
        <ul class="list-group mt-5">
            <li v-for="item of tareas" :key="item.id" class="list-group-item">
                {{item.id}} - {{item.nombre}}
                <div class="float-right">
                    <router-link class="btn btn-warning btn-sm mr-2" :to="{name: 'editar', params: {id: item.id}}">
                        Editar
                    </router-link>
                    <button class="btn btn-danger btn-sm" @click="eliminarTarea(item.id)">Eliminar</button>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    created(){
        this.getTareas();
    },
    computed: {
        ...mapState(['tareas'])
    }
}
</script>