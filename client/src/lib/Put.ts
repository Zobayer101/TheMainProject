
const PutData = async (url: string, data: object|string,token:string) => {
    try {
        console.log(data)
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token,
          },
          body: JSON.stringify({data}),
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}

export default PutData;