

const canciones=[
    C1={
    nombre: 'Walking With You',
    artista:'Ivan Mateluna',
    álbum: 'The Annual Compilation 2010',
    duración: 4.08,
    image: 'images/The Annual Compilation 2010.jpg'
},

    C2={
    nombre: 'Lonely Girl',
    artista: 'Oceanlab',
    álbum: 'The Annual Compilation 2010',
    duración: 3.56,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C3={
    nombre: 'We Belong',
    artista: 'Ferry Corsten',
    álbum: 'The Annual Compilation 2010',
    duración: 2.55,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C4={
    nombre: 'Coma Aid',
    artista: 'Marco V',
    álbum: 'The Annual Compilation 2010',
    duración: 4.02,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C5={
    nombre: 'Dont Wake Me Up',
    artista: 'Dj Shah Feat. Inger Hansen',
    álbum: 'The Annual Compilation 2010',
    duración: 3.53,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C6={
    nombre: 'Never Say Never',
    artista: 'Armin Van Buuren Feat. Jacqueline Govaert',
    álbum: 'The Annual Compilation 2010',
    duración: 3.36,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C7={
    nombre: 'Change Your Mind',
    artista: 'Sunlounger Feat. Kyler England',
    álbum: 'The Annual Compilation 2010',
    duración: 4.05,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C8={
    nombre: 'Man On The Run',
    artista: 'Dash Berlin With Cerf, Mitiska & Jaren',
    álbum: 'The Annual Compilation 2010',
    duración: 3.25,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C9={
    nombre: 'Lost',
    artista: 'Sunlounger Feat. Zara',
    álbum: 'The Annual Compilation 2010',
    duración: 3.51,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C10={
    nombre: 'L.A. Nights',
    artista: 'Atb',
    álbum: 'The Annual Compilation 2010',
    duración: 4.17,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C11={
    nombre: 'Made Of Love',
    artista: 'Ferry Corsten Feat. Betsy Larkin',
    álbum: 'The Annual Compilation 2010',
    duración: 3.47,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C12={
    nombre: 'Find Yourself',
    artista: 'John OCallaghan Feat. Sarah Howells',
    álbum: 'The Annual Compilation 2010',
    duración: 3.33,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C13={
    nombre: 'To The Sky',
    artista: 'Roger Shah Feat. Chris Jones',
    álbum: 'The Annual Compilation 2010',
    duración: 3.33,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C14={
    nombre: 'The New World',
    artista: 'Markus Schulz',
    álbum: 'The Annual Compilation 2010',
    duración: 3.19,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C15={
    nombre: 'In And Out Of Love',
    artista: 'Armin Van Buuren Feat. Sharon Den Adel',
    álbum: 'The Annual Compilation 2010',
    duración: 4.55,
    image: 'images/The Annual Compilation 2010.jpg'
}
]

class Reproductor {
    constructor(enReproducción, ahoraSuena){
        this.enReproducción = enReproducción;
        this.ahoraSuena = ahoraSuena;

        this.ahoraSuena = 0;
    }

    playPause(){  
        if(this.enReproducción === true){
            this.enReproducción === false;
            console.log(`Haz pausado la reproducción`)
        }else{
            this.enReproducción === true;
            console.log(`Ahora suena: ${'NOMBRE DE LA CANCIÓN'}`)
        }
    }

    shuffle(){ 
    this.ahoraSuena = Math.floor(Math.random()*canciones.length);
    return this.ahoraSuena;
    }

    next(){
             
    }

    prev(){
        this.ahoraSuena -= 1;
    }

    stop(){
        console.log('Haz detenido la reproducción')
        this.ahoraSuena === -1
    }

    play(canciones){
        this.ahoraSuena === canciones;
    }

    songsList(){
        for(let i=play(canciones); i<=15; i++){
        console.log(i)
        }
    }

    showSongInSite(){
        console.log(this.ahoraSuena)
        if(this.ahoraSuena === -1){
            console.log('No existe ninguna canción seleccionada')
        }
    }
}

const one = new Reproductor();

one.shuffle();
console.log(one.shuffle());
one.playPause();
one.next();
console.log(one.next());