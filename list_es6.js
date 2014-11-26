 
//helper functions
var ltos=function (l){
	 var result=""; 
	 var ltos_iter=function (l,res){
		
		 
		 if(isEmpty(l)){
			 if(res.length)
			     res=res.substr(0,res.length-1);
			 return res;
		 }
		 var h=head(l);
		 if(h.isList) 
			 res=res+'('+ltos_iter(h,result)+')'+',';
		 else 
			 res+=h.toString()+",";
		return ltos_iter(tail(l),res);
	 
	 };
 if(l==undefined)
	 return undefined;
 return '('+ltos_iter(l,result)+')';
 }
 
 var list_from_seq=function(...args){
	 var result;
	 result=list();
	 for(var i=args.length-1;i>=0;i--)
		 result=list(args[i],result)
	return result;	 
 }
 
//end  helper functions

// in memory of John McCarthy- LISP primitives 
var CONS=(first,second)=>(f)=>f(first,second); 
var CAR=(fn)=> fn((x,y)=>x);
var CDR=(fn)=> fn((x,y)=>y);

//end LISP primitives
 
//List functions 
 var list= function (H,T){	//more readable name for CONS
	 var l=CONS(H || null,T || null);
	 l.isList=true;
	 return l;
 };
 
 
 
 
 var head= (l)=> CAR(l); //readable name for CAR
 var tail= (l)=> CDR(l); // and CDR
 
  
 
 
 
var isEmpty= (l)=> (l==null || head(l)==null);
var length=(l,cnt=0)=> isEmpty(l)? cnt
		             :length(tail(l),cnt+1);
var reverse= (ll,res=list())=> 
              isEmpty(ll)? res:reverse(tail(ll),list(head(ll),res));
 
var append= (l,elem)=> isEmpty(l)?list(elem):reverse(list(elem,reverse(l)));

var map=(l,fn,res=list())=>
	   isEmpty(l)?reverse(res):map(tail(l),fn,list(fn(head(l)),res));	
	   

var reduce_tr=(l,fn,res)=> isEmpty(l)?res:             //_tr itertor tail recursive fn
	                       reduce_tr(tail(l),fn, fn(res,head(l)));
var reduce= (l,fn)=> isEmpty(l)?undefined:
	                  reduce_tr(tail(l),fn,head(l));
 

var filter=(l,fn,res=list())=>isEmpty(l)?reverse(res):
	                      filter(tail(l),fn,fn(head(l))?list(head(l),res):res);

 
var concat_tr=(l1,l2)=>isEmpty(l2)? reverse(l1):isEmpty(l1)?l2:concat_tr(list(head(l2),l1),tail(l2));
var concat=(l1,l2)=> concat_tr(reverse(l1),l2);
 

var insertAt= (ll,at,elem,count=0,res=list())=> isEmpty(ll)? undefined  /*reverse(list(elem,res))*/
	                                      :(count==at)? concat(reverse(list(elem,res)),list(head(ll),tail(ll)))
	                                      :insertAt(tail(ll),at,elem,count+1, list(head(ll),res));


var removeAt=(l,at,count=0,res=list())=>isEmpty(l)?reverse(res)
								 :(count==at)? concat(reverse(res),tail(l))
								 : removeAt(tail(l),at,count+1,list(head(l),res))


var qSort=(l)=> isEmpty(l)? list():
	            concat(qSort(filter(tail(l),(x)=>x<head(l))),
	            		list(head(l),qSort(filter(tail(l),(x)=>x>head(l))))
	            	   );
	            		
var removeWhere=function (l,cond){
	 
	return filter(l, function(x){ return !cond(x);})
}
                                 

//helper functions
//(l)ist to (s)string

var ltos=function (l){
	 var result=""; 
	 var ltos_iter=function (l,res){
		
		 
		 if(isEmpty(l)){
			 if(res.length)
			     res=res.substr(0,res.length-1);
			 return res;
		 }
		 var h=head(l);
		 if(h.isList) 
			 res=res+'('+ltos_iter(h,result)+')'+',';
		 else 
			 res+=h.toString()+",";
		return ltos_iter(tail(l),res);
	 
	 };
if(l==undefined)
	 return undefined;
return '('+ltos_iter(l,result)+')';
};

//syntactic sugar for creating list directly from arguments instead 
//of LISP style nested calls

var list_from_seq=function(...args){
	 var result;
	 result=list();
	 for(var i=args.length-1;i>=0;i--)
		 result=list(args[i],result)
	return result;	 
}

//end  helper functions                                   
