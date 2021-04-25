import axios from 'axios'

 export const GetMovies  = async ({HandleData , searchType}) =>   {
    const BASE_URL = 'https://swapi.dev/api'
    const userToken ='j8BRtoARktpfFhhYDbgj'
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    }
  const {data} = await axios.get(`${BASE_URL}/${searchType}` , config)
  console.log(data)
HandleData(data)
   
}