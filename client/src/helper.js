export const formatDate =(date)=>{
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-CA',options);
}