//instalar axios
const getValues= async (req,res)=>{

    try{

let allValues=await axios.get(VITE_URLAPI)

    }catch(e){
        
        res.status(200).JSON({status:500,message:e.message})
    }
}

export default getValues;