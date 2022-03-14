function imageAlbum() {
    fetch( 'https://jsonplaceholder.typicode.com/photos' )
        .then( res => res.json() )
        .then( data => displayAlbum( data ) );
}
imageAlbum();
function displayAlbum( data ) {
    const container = document.getElementById( 'album-container' );
    for ( const value of data ) {
        // console.log( value );
        const div = document.createElement( 'div' );
        div.innerHTML = `
        <h2>${ value.title }</h2>
        <img src="${ value.url }">
        `;
        container.appendChild( div );
    }
}