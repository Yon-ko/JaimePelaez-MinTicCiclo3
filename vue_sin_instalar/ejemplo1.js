

Vue.component('saludo',{
    template:'<h1>Hola Muchachos</h1>',
});




Vue.component('saludo1',{
    template:'<h1>{{saludo2}}</h1>',
    
    data(){
        return{
            saludo:'Como estan muchachos',
            saludo2:'Muy bien'
        }
    }
});

Vue.component("saludo2",{
    template://html 
    ` 
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
        </div>
    </div>
    `,
    data(){
        return{
            saludo:'Home',
            saludo1:'News',
            saludo2:'Contact',
            saludo3:'About'
        }
    }
    
});

Vue.component('contador',{
    template://html 
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
    
});

/* Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre</h2>
        <hijo></hijo>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
    
}); 
Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo</h4>
    </div>
    `,
    
}); */

/* Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre {{numeropadre}}</h2>
        <button class="bnt btn-danger" @click="numeropadre++">+</button>
        <input type="text" >
        <hijo :numero ="numeropadre" :esto1 ="numeropadre"></hijo>
    </div>
    `,
    
    data(){
        return{
            numeropadre:0
        }
    }
    
}); 



Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{numero}} + {{esto1}}</h4>
    </div>
    `,
    props:['numero','esto1']
    
}); */

// COMUNICACION ENTRE EL HIJO AL PADRE

Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre {{numeropadre}}</h2>
        <button class="bnt btn-danger" @click="numeropadre++">+</button>
        <h4>{{nombrepadre}}</h4>
        <hijo :numero="numeropadre" @nombrehijo="nombrepadre = $event"></hijo>
    </div>
    `,
    data(){
        return{
            numeropadre:0,
            nombrepadre:''
        }
    }
    
});

Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{numero}}</h4>
        <h4>nombre: {{nombre}}</h4>
        <button @click="numero++">+</button>
    </div>
    `,
    props:['numero'],

    data(){
        return{
            nombre:'Felipe'
        }
    },

    mounted() {
        this.$emit('nombrehijo', this.nombre);
    },
});


//INSTANCIA


const app = new Vue({
    el: '#app',
    data:{
        titulo: "Hola muchachos",
        Equipos:[
            {nombre: 'Colombia', titulos: 0},
            {nombre: 'Alemania', titulos: 4},
            {nombre: 'Brazil', titulos: 5}
        ],
        
        x : 5,
        y : 8,
        
        nuevoEquipo:'',
        total:0
    },
    methods:{
        agregarEquipo(){
            this.Equipos.push({
                nombre:this.nuevoEquipo, titulos:0 
            });
            this.nuevoEquipo='';
        }
    },
    computed:{
        sumarCopas(){
            this.total=0;
            for(Equipo of this.Equipos){
                this.total= this.total+ Equipo.titulos;
            }
            return this.total 
        }
    }
})

