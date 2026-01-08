class Media{
    constructor(info){
        this.publish = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media{
    constructor(song){
        super(song);
        this.dog = song.artist;
    }
}
    
const mySong = new Song({
    artist: 'Adele',
    name: 'Firestone',
    publishDate: '2015'
})
const Dogg = new Song({
    artist: 'Adsd',
    name: 'atrw',
    publishDate: '201223'
})
console.log(mySong.name);
console.log(mySong);
console.log(Dogg);


