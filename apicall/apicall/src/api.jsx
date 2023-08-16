import axios from 'axios'
const searchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID zQINj_8rr3Vvo_3NQW827YnR4HTwBo7j9BIwVbS_htk',
      },
      params:{
        query: term,
      },
    })
    return response.data.results
    }
    
   

    export default searchImages