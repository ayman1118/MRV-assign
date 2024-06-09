verifyVotes=(votesCount)=>{
    if(votesCount.length===0){
        return 0;
    }else{
        return votesCount[0]+verifyVotes(votesCount.slice(1));
    }
}
const votes=[50000,20000,30000,10000];

console.log(verifyVotes(votes));
