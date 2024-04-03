
const ImageLoder = (file:File)=> {
    return new Promise((resolve, reject) => {
        const readfile = new FileReader();
        readfile.readAsDataURL(file);
        readfile.onload = () => {
            resolve(readfile.result)
        }
        readfile.onerror = (error) => {
            reject(error);
        };
        
    })
}

export default ImageLoder;