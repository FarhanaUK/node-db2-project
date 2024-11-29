// STRETCH
const cars = [
    
    {
    vin: '11111111111111111',
    make: "toyota",
    model: "prius",
    mileage: 215334,
    title: "clean",
    transmission: "manual"
},
{
    vin: '22222222222222222',
    make: "ford",
    model: "focus",
    mileage: 215000,
    
},
{
    vin: '33333333333333333',
    make: "toyota",
    model: "corolla",
    mileage: 143334,
    title: "salvage",
    transmission: "manual"
},
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(()=>{
        return knex('cars').insert(cars)
    })
   
}