
export const formatDate =(date)=>{
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-CA',options);
}

export const baseURL = process.env.REACT_APP_BASEURL || "http://localhost:5000"