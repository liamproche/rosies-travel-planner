async function findRestaurants(){
    try{
        const restaurants = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+miami&key=${process.env.GOOGLE_API_KEY}`)
        return restaurants
    }catch(err){
        console.log(err)
    }
}
console.log(findRestaurants())