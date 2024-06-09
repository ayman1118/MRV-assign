
totalVotes=(...votes)=>{
    let total=0;
    for(let each of votes){
        total+=each
    }
    return total;
}
console.log(totalVotes(1000,2000,3000,4000,5000))
console.log(totalVotes(6000,7000,8000,9000,9500))
