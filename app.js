function addUsers() {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( response => response.json() )
        .then( data => displayUsers( data ) );
}

function addPosts() {
    fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then( res => res.json() )
        .then( data => displayPosts( data ) );
}
// addPosts();

function displayUsers( data ) {
    const ul = document.getElementById( 'user-list' );
    for ( const user of data ) {
        const li = document.createElement( 'li' );
        li.innerText = `User Name: ${ user.name } & Email Address: ${ user.email }`;
        ul.appendChild( li );
    };
}

function displayPosts( data ) {
    const posts = document.getElementById( 'posts' );
    for ( const post of data ) {
        const div = document.createElement( 'div' );
        div.classList.add( 'para' );
        div.innerHTML = `
        <h2>Post Title: ${ post.title }</h2>
        <p>Details: ${ post.body }</p>
        `;
        posts.appendChild( div );
    }
}