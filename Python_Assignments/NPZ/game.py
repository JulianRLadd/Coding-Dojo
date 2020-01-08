import random
import PracticePip





team1=['ninja','pirate','ninja','zombie','pirate','ninja']
team2=['pirate','ninja','zombie','pirate','zombie','zombie']
team3=['cat', 'dog', 'banana', 'cat', 'cat','cat']


def match(t1,t2,point):
    dict = {
        'ninja': t1 if (t2[point] == 'pirate') else t2,
        'pirate': t1 if (t2[point] == 'zombie') else t2,
        'zombie': t1 if (t2[point] == 'ninja') else t2,
    }
    return(dict[t1[point]])

matchup=[
    [team1,team2],
    [team1,team3],
    [team2,team3],
    [team2,team3],
    [team1,team3],
    [team1,team2]]
winners=[]
dict ={
    'pirate': PracticePip.carl,
    'ninja': PracticePip.bob,
    'zombie': PracticePip.zb1
}
for i in range(6):
    winner = (match (matchup[i][0],matchup[i][1],i))
    if winner == matchup[i][0]:
        loser = matchup[i][1]
    else:
        loser = matchup[i][0]
    print ('team', winner[6], 'wins when',winner[i], 'beats', loser[i])
    dict[winner[i]].taunt(dict[loser[i]])