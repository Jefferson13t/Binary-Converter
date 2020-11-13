This is a binary converter made to train my problems solution capability and algorithm.

![screenshot3](https://user-images.githubusercontent.com/67127849/99117703-f04ffb00-25d4-11eb-9341-18bb9dfecfb9.png)


The challenge of this is to take any binary value and transform in a decimal value. to make this, i 
splitted the problem in: data entries, where i shoud let in only binary values and no other; 
treatment of data, where i should discover a way of transforming this values into decimal values; 
and then showing the result on screen. 

To make the data entries i used a basic text-box on HTML and put the value in a variable. The  value 
that this text-box return is always a string, so i had to transform this into a number, but i didnt 
make this so far because i wanted to use a JS string property that allows me to treat any elementy of
the string with a index as in a array. 

To transform a binary value in a decimal value i inverted (to start with the last one) and took every 
index of the string and made a simple operation with it. in a loop i that gos from 0 to the lenght of 
the string, i put a array to receive, in a index of the loop, the value of the index of the string
that contains the binary number, that was multiplied for 2 to the power of the loop. 

example: k[i] = j[i] * (2 ** i)

and then i added all the values of "k" to make a decimal number.
and then i changed the value of a HTML div to the value of the variable that constains the decimal number.

to improve this converter i also include some functions to change the value of the text-box while its not 
being used and to erase it when the mouse enter and to erase anvi value that is not decimal.
