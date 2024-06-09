
//CREATING ARRAY

const contestants=[
    {
        candidateName:"Ayman",
        votes:200000,
        region:"Machilipatnam"
    },
    {
        candidateName:"rahul",
        votes:100000,
        region:"Machilipatnam"
    },
    {
        candidateName:"modi",
        votes:40000,
        region:"Machilipatnam"
    },
]


let caliculateVotes=(candidateName,votes,region)=>{
    return `${candidateName} received ${votes} votes in the ${region} region.`;
}

for (let each of contestants){
    console.log(caliculateVotes(each.candidateName,each.votes,each.region));
}