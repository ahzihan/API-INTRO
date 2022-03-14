const data = [
    { name: 'Mobile', price: 29000, brand: 'samsung' },
    { name: 'watch', price: 3000, brand: 'kalbor' },
    { name: 'Laptop', price: 39000, brand: 'Asus' },
    { name: 'Printer', price: 22000, brand: 'Epson' },
    { name: 'Monitor', price: 9000, brand: 'Hp' }
];
const product = JSON.stringify( data );
// console.log( product );
const parseData = JSON.parse( product );
for ( const value of parseData ) {
    // console.log( value.name );
}
const pro = {
    name: 'Jaber', height: 6, address: {
        dist: 'Bhola',
        upozila: 'Lalmohon'
    }, phone: '01776327689'
};
console.log( pro.address.upozila );
