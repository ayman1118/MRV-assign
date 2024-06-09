const votesCount=[{
    candidateName:"Ayman",
    votes:20
},
{
    candidateName:"Lalith",
    votes:30
},
{
    candidateName:"sathwik",
    votes:40
}
];
let threshold=20;
const filtercandidates=(candidateVotes,thresholdVotes)=>candidateVotes.filter(candidates=>candidates.votes>threshold).map(eachCandidate=>eachCandidate.candidateName)
console.log(filtercandidates(votesCount,threshold))

