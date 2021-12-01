const API = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0044b0a81b4854ecf9816a3cd071f0b4&hash=268a0440678e1496d5dcc2b0a97c906c'

const getData = async (id) =>{
    const apiURL = id ? `${API}${id}` : API

    try{
        const response = await fetch(apiURL)
        const data = await response.json()
        // console.log( data.data.results );
        return data.data.results
    }catch (error){
        console.error("Fetch Error ", error);
    }
}


export default getData
