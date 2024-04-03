const GetUser = async (url:string,token:string) => {
   try {
      const response = await fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      });
      return await response.json();
   } catch (error) {
       console.log(error);
   }
      
  
    
}
export default GetUser;