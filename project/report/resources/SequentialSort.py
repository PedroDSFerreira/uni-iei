# Traverse through all array elements
for i in range(len(A)):
     
    # Find smaller elements in remaining
    # unsorted array
    for j in range(i+1, len(A)):
        # Swap the found smaller element with
        # the first element
        if A[i] > A[j]:
            A[i], A[j] = A[j], A[i]
             
           
 
# Driver code to test above
print ("Sorted array")
for i in range(len(A)):
    print("%d" %A[i]),