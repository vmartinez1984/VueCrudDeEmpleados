<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <form v-on:submit.prevent="agregarRegistro">
                        <div class="form-gorup">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" name="nombre" id="nombre"  v-model="empleado.nombre"/>
                        </div>

                        <div class="form-gorup">
                            <label for="correo">Correo</label>
                            <input type="email" class="form-control" name="correo" id="correo"  v-model="empleado.correo"/>
                        </div>

                        <div class="form-gorup">
                            <button type="submit" class="btn btn-success">Agregar</button>
                            <button type="reset" class="btn btn-secondary">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   data(){
    return{
        empleado:{}
    }
   },
   methods:{
    agregarRegistro(){
        console.log(this.empleado)
        var url = 'http://localhost/HolaMundo/v1/api/Empleados';
        var empleado = {
            nombre: this.empleado.nombre,
            correo: this.empleado.correo
        }
        fetch(url,{
            method:'POST',
            body: JSON.stringify(empleado),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(respuesta => respuesta.json())
        .then((datosDeRespuesta) =>{
            console.log(datosDeRespuesta)
            window.location.href = 'listar'
        })
        .catch(console.log)
    }
   }

}
</script>