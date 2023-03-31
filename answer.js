var number = function(busStops){
  return busStops.map(x=>x.reduce((peopleIn,peopleOut)=>peopleIn-peopleOut)).reduce((accumulator,currentValue)=>accumulator+currentValue)
}

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)

var number = function(busStops){
	var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
