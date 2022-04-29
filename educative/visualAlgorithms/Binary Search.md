# Question:

As given array [1,3,5,7,8,9], targetValue: 5, let use Binary Search to quick find target value

## Classification:

Binary Search Problem 

## Logic:

1) Define left variable and right variable, define mid \
left: beginning of array \
right: last of array \
mid(guess): (left + right) /2 
2) Define left and right relationship \
    left < right (normal case) \
    right < left (special case) 
3) Define relationship among left, right and mid
    mid = taget return result 
    mid > left  return mid right -1 
    mid < right return mid left + 1
    
## Details: 

  1) Recusive function 
     All parameters involve into function
        // parallel case 
  2) while loop 
     while(){
        // parallel case 
     }

