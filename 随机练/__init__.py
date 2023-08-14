#导入包
import random
#调用randint（）函数，表示随机取其中的任意一个数，左闭右也毕
#初始化变量
n=0
pc=0#表示电脑计分
person=0#表示人计分
while n<3:
    a=random.randint(1,3)  #a代表电脑
    b=int(input('请出拳（1.剪刀，2.石头，3.布）：'))
    #改变变量
    n+=1
    #if判断,当电脑出剪刀时：
    if a==1:
        if b==1:#人出剪刀
            print('电脑出剪刀，人出剪刀，平局！')
        elif b==2:#人出石头
            print('电脑出剪刀，人出石头，人赢了！')
            person+=1
        elif b==3:#人出布
            print('电脑出剪刀，人出布，电脑赢了！')
            pc+=1
    #当电脑出石头时：
    elif a==2:
        if b==1:#人出剪刀
            print('电脑出石头，人出剪刀，电脑赢了！')
            pc+=1
        elif b==2:#人出石头
            print('电脑出石头，人出石头，平局！')
        elif b==3:#人出布
            print('电脑出石头，人出布，人赢了！')
            person=person+1
    #当电脑出布时：
    elif a==3:
        if b==1:#人出剪刀
            print('电脑出布，人出剪刀，人赢了！')
            person=person+1
        elif b==2:#人出石头
            print('电脑出布，人出石头，电脑赢了！')
            pc+=1
        elif b==3:#人出布
            print('电脑出布，人出布，平局！')
print('电脑计分',pc,'人计分:',person)
#判断条件，到底谁赢了
if pc>person:
    print('电脑赢了，还得练啊，兄der')
elif person>pc:
    print('啊哈哈哈哈，小样，看我整不死你！')
else:
    print('咱两半斤八两，不分伯仲！')

