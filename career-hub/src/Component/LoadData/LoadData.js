const loaderData = async()=>{
    const data = await fetch('jobs.json')
    const response = await data.json();
    return response;
}



export default loaderData;