import mongoose from 'mongoose'


const connection=async(URL)=> {
        try{
            console.log('database is running')
            
            await mongoose.connect(URL)
        }
        catch(error){
            console.log('database is not connected',error)
        }
}

export default connection;