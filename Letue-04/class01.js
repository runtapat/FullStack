class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        
    }
}
const MySong = new Song("Shape of You", "Ed Sheeran");
console.log(MySong);
console.log(typeof MySong); //object
console.log(MySong.artist);
