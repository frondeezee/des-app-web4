

const canciones=[
    C1={
    nombre: '01 Walking With You',
    artista:'Ivan Mateluna',
    álbum: 'The Annual Compilation 2010',
    duración: 4.08,
    image: 'images/The Annual Compilation 2010.jpg'
},

    C2={
    nombre: '02 Lonely Girl',
    artista: 'Oceanlab',
    álbum: 'The Annual Compilation 2010',
    duración: 3.56,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C3={
    nombre: '03 We Belong',
    artista: 'Ferry Corsten',
    álbum: 'The Annual Compilation 2010',
    duración: 2.55,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C4={
    nombre: '04 Coma Aid',
    artista: 'Marco V',
    álbum: 'The Annual Compilation 2010',
    duración: 4.02,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C5={
    nombre: '05 Dont Wake Me Up',
    artista: 'Dj Shah Feat. Inger Hansen',
    álbum: 'The Annual Compilation 2010',
    duración: 3.53,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C6={
    nombre: '06 Never Say Never',
    artista: 'Armin Van Buuren Feat. Jacqueline Govaert',
    álbum: 'The Annual Compilation 2010',
    duración: 3.36,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C7={
    nombre: '07 Change Your Mind',
    artista: 'Sunlounger Feat. Kyler England',
    álbum: 'The Annual Compilation 2010',
    duración: 4.05,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C8={
    nombre: '08 Man On The Run',
    artista: 'Dash Berlin With Cerf, Mitiska & Jaren',
    álbum: 'The Annual Compilation 2010',
    duración: 3.25,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C9={
    nombre: '09 Lost',
    artista: 'Sunlounger Feat. Zara',
    álbum: 'The Annual Compilation 2010',
    duración: 3.51,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C10={
    nombre: '10 L.A. Nights',
    artista: 'Atb',
    álbum: 'The Annual Compilation 2010',
    duración: 4.17,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C11={
    nombre: '11 Made Of Love',
    artista: 'Ferry Corsten Feat. Betsy Larkin',
    álbum: 'The Annual Compilation 2010',
    duración: 3.47,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C12={
    nombre: '12 Find Yourself',
    artista: 'John OCallaghan Feat. Sarah Howells',
    álbum: 'The Annual Compilation 2010',
    duración: 3.33,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C13={
    nombre: '13 To The Sky',
    artista: 'Roger Shah Feat. Chris Jones',
    álbum: 'The Annual Compilation 2010',
    duración: 3.33,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C14={
    nombre: '14 The New World',
    artista: 'Markus Schulz',
    álbum: 'The Annual Compilation 2010',
    duración: 3.19,
    image: 'images/The Annual Compilation 2010.jpg'
},
    C15={
    nombre: '15 In And Out Of Love',
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
        
        enReproducción = canciones
        ahoraSuena = canciones;
    }

    playPause(){ 
        this.enReproducción
        if(this.enReproducción === true){
            this.enReproducción === false;
            console.log(`Haz pausado la reproducción`)
        }else{
            this.enReproducción === true;
            console.log(`Ahora suena: "${canciones[this.ahoraSuena].nombre}"`)
        }
    }

    shuffle(){ 
    this.ahoraSuena = Math.floor(Math.random()*canciones.length);   
    return this.ahoraSuena;

    }

    next(){
        this.ahoraSuena+=1
        return console.log(this.showSongInSite())
    }

    prev(){
            this.ahoraSuena-=1
            return console.log(this.showSongInSite())
    }

    stop(){
        console.log('Haz detenido la reproducción')
        this.ahoraSuena === -1
    }

    play(canciones){
        this.ahoraSuena
        console.log(this.ahoraSuena)
    }

    songsList(){
    
    }

    showSongInSite(){
        if(this.ahoraSuena === -1){
            console.log('No existe ninguna canción seleccionada')
        }else{
            console.log(canciones[this.ahoraSuena])
        }
    }
}

const one = new Reproductor();

one.shuffle();
one.playPause();
one.next();
one.next();
one.prev();
one.prev();
one.stop();
one.play();
one.showSongInSite();

// console.log(canciones[1].nombre)









