import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre: '', id: ''}
  },
  mutations: {
    setTareas(state, tareas) {
      state.tareas = tareas;
    },
    setTarea(state, tarea) {
      state.tarea = tarea
    }
  },
  actions: {
    getTareas({commit}) {
      const tareas = [];
      db.collection('tareas').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id);
            console.log(doc.data());
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
        })
        commit('setTareas', tareas);
    },
    getTarea({commit}, id) {
      db.collection('tareas').doc(id).get()
      .then(doc => {
        let tarea = doc.data();
        tarea.id = doc.id;
        commit('setTarea', tarea);
      })
    },
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update(
        {
          nombre: tarea.nombre
        }
      ).then(() => {
        router.push({name: 'inicio'})
      })
    },
    agregarTarea({commit}, nombre){
      db.collection('tareas').add({
        nombre: nombre
      }).then(doc => {
        console.log(doc)
        router.push({name: 'inicio'})
      })
    }
  },
  modules: {
  }
})
