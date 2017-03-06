line = '''
'''
f=open('easy.js','r')
line=f.read()
line = line.replace("\n", "")#Remove CRLFs
line = line.replace("\t", "")#Remove tabs
f1=open('easy.min.js','w')
f1.write(line)
f1.close()
f.close()
print('Done.   Result:  easy.min.js')
print('Check  it  before  use!')