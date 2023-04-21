const setLocalStorage = (id) => {
 

    const parsedData = JSON.parse(localStorage.getItem('applied jobs'))
    const quantity = parsedData[id]
    
    if(!quantity){
        const data = {...parsedData,[id]:1}
        const stringfiedData = JSON.stringify(data)
        localStorage.setItem('applied jobs', stringfiedData);

    }
    
}
const getLocalStorage =()=>{
    const parsedData = JSON.parse(localStorage.getItem('applied jobs'))
    return parsedData
}




export { setLocalStorage,getLocalStorage }