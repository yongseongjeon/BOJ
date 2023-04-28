E, S, M = map(int,input().split())

e = 1
s = 1
m = 1 
year = 1

while True:
	if E == e and S == s and M == m:
		break
	
	year += 1
	curE = (e + 1) % 15
	curS = (s + 1) % 28
	curM = (m + 1) % 19
	
	if curE == 0:
		e = 15
	else:
		e = curE

	if curS == 0:
		s = 28
	else:
		s = curS
		
	if curM == 0:
		m = 19
	else:
		m = curM

print(year)