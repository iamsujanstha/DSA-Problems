const participants = [
  { "name": "Hanuman", "rating": 5 },
  { "name": "Mangal", "rating": 4 },
  { "name": "Ram", "rating": 4 },
  { "name": "Rajput", "rating": 4 },
  { "name": "Bhagat", "rating": 2 },
  { "name": "Shaym", "rating": 3 },
]
const teams = ["Team A", "Team B"]

function generateBalancedTeamByRating(participants, teams) {
  let sortedParticipants = [...participants].sort((a, b) => b.rating - a.rating)

  const groupedTeams = teams.map((team) => ({
    teamName: team,
    members: [],
    totalRating: 0
  }))

  sortedParticipants.forEach((participant) => {
    groupedTeams.sort((a, b) => a.totalRating - b.totalRating);
    groupedTeams[0].members.push({ name: participant.name, rating: participant.rating });
    groupedTeams[0].totalRating += participant.rating
  })
  return groupedTeams;
}

// console.log(generateBalancedTeamByRating(participants, teams))

module.exports = { generateBalancedTeamByRating, participants, teams }