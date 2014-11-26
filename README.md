# List implementation in Javascript- ES6 and ES5

 The ability to make functions behave like data is one of the most fascinating 
 aspects of functional programming.
 
 This an implementation of classic LISP-style non-mutable lists using the CONS, 
 CAR and CDR functions which have been defined for JS at the top of the files.
 
 Classic Lists are created by nesting calls i.e:
  (1,2,3,4) => list(1,list(2,list(3,list(4,null)));
  
  As a syntactic sugar a function list_from_seq() has been provided where
  the list will be created from the arguments directly.
  
  e.g: list_from_seq(1,2,3,4) is equivalent to:
 
 list(1,list(2,list(3,list(4,null)));

 Another helper function ltos() has been provided to convert a list to a string.
 
 The primary purpose is to study the data abstraction techniques using functions. 
 The ES6 version demonstrates the power of lambdas.
 
 These functions use recursion ( all of them use tail-recursive versions except for
 qSort()) and hence if the environment does not support tail-recursion optimization
 they may blow the stack. 
 
 ES6 list_es6 need to be run on environments that support lambdas. These have bee tested 
 on FireFox 33.
 
 list_test  is common from both list_es5 and list_es6 and uses plain old JS.

## Usage
1. list(head, tail)  
   where head is an element tail is a list. if tail == null then that is the end of the list
   
   syntactic liberty-- if the caller doesn;t provied "tail" it will default to null
   
   So list(1) and list (1,null) are the same -- a list with 1 member
   
2. ltos(l)=> list to string

3. reverse(l)  -self explanatory
4. append(l,elem) -- a new list created by appending elem to l
5. map(l, mapfn)
   a new list consisting of elements tranformed using the function mapfn
   see test_map() in list_test for usage.
6. reduce(l, reduceFn)
   - similar to Array.reduce
   see test_reduce() in  list_test
7. filter(l, filterFn)
   returns a list consisting of those elements for which the filterFn returns true
   see filter_test() in test_list.js ffor usage.
5. length(l) - returns the length of l
6. concat(l1,l2) 
  - returns a list that is the result of concatenation of l1 and l2
7. insertAt(l,at)
  - a new list that is the result of inserting an element at position ( at=> 0,1,2....) in l;
8, removeAt(1,at)
   returns a new  list after the renoving the element at the position specified by the
   second argument.
9. qSort(l) 
  - quickSort-- returns a sorted version of l using quicksort


## Developing



### Tools
 
 Created using Eclipse   
