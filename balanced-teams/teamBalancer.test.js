const { generateBalancedTeamByRating, participants, teams } = require('./findBalancedTeamByRating')

describe('generateBalancedTeamByRating', () => {

  it('should return two teams with balanced total ratings', () => {
    const result = generateBalancedTeamByRating(participants, teams)

    // Check that both teams are returned
    expect(result.length).toBe(2)

    // Check team names
    expect(result.map(team => team.teamName).sort()).toEqual(teams)

    // Check all participants are assigned
    const allMembers = result.flatMap(team => team.members.map(m => m.name))
    expect(allMembers.sort()).toEqual(participants.map(p => p.name).sort())

    // Check rating balance (difference should be minimal, here within 1 point)
    const [teamA, teamB] = result
    const ratingDiff = Math.abs(teamA.totalRating - teamB.totalRating)
    expect(ratingDiff).toBeLessThanOrEqual(1)
  })
})
