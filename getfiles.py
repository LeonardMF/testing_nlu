filepath = 'data/hvv/nlu.md'

string = ""
with open(filepath) as fp:
   for cnt,line in enumerate(fp):
       string += line+"\\n"


filepath = 'data/hvv/nlu.txt'
f = open(filepath,"w")
f.write(string)


# filepath = 'config_time.yml'

# string = ""
# with open(filepath) as fp:
#    for cnt,line in enumerate(fp):
#        string += line+"\\n"


# filepath = 'config_time.txt'
# f = open(filepath,"w")
# f.write(string)

# filepath = 'data/time'