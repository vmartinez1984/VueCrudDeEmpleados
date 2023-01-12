<template>
    <div>
        <h1 class="text-info">Lista de empleados</h1>

        <div class="container">

            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="empleado in empleados" :key="empleado.id">
                        <td>{{ empleado.nombre }}</td>
                        <td>{{ empleado.correo }}</td>
                        <td>
                            <router-link :to="{path:'editar', query:{'id':empleado.id}}" class="btn btn-warning text-white">Editar</router-link>                            
                            <button v-on:click="borrarEmpleado(empleado.id)"  class="btn btn-danger">Borrar</button>       
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            empleados:[]
        }
    },
   created: function(){
    this.consultarEmpleados()
   },
   methods:{
    consultarEmpleados(){
        var url = 'http://localhost/HolaMundo/v1/api/Empleados';

        fetch(url)
        .then(respuesta => respuesta.json())
        .then((datosDeRespuesta) =>{
            //console.log(datosDeRespuesta)
            this.empleados = datosDeRespuesta
        })
        .catch(console.log)
    },
    borrarEmpleado(id){
        if(confirm("¿Desea borrar el empleado?")){

            var url = 'http://localhost/HolaMundo/v1/api/Empleados/' + id;
            
            fetch(url,{
                method:'DELETE',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })            
            .then((datosDeRespuesta) =>{
                console.log(datosDeRespuesta)    
                window.location.href = 'listar'        
            })
            .catch(console.log)
        }
    }
   }
}
</script>