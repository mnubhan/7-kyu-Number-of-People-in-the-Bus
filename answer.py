def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])
  
def number(stops):
    return sum(i - o for i, o in stops)
  
def number(bus_stops):
    total_people = 0
    for people in bus_stops:
        total_people = total_people+people[0]-people[1]
    return total_people
