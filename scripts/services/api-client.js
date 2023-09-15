import URL from "../utils/constant.js";

async function doNetworkCall(){
    try{
        const response = await fetch(URL);//    block
        const object = await response.json();//  block
        return object;//    wrap promise
    }
    catch(err){
        console.log('Some problem in API call ', err);
        throw err;
    }

    
    // const promise = fetch(URL);
    // console.log("Promise is ", promise);
    // promise.then(response=>{
    //     console.log("Response is ",response);
    //     const promise2 = response.JSON();// Deserialization(JSON to Object)
    //     promise2.then(data => console.log("Data is ", data))
    //     .catch(e =>console.log("JSON parse Error ", e));
    // }).catch(err=>{
    //     console.log("Error is ",err);
    // });
    // console.log("Good Bye");
}
export default doNetworkCall;