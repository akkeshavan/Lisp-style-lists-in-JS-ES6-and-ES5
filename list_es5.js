 
 

// In memory of John Macarthy- Lisp style CONS, CAR and CDR
var CONS= function(first,second){
	  return function(f){
		  return f(first,second);
	  };
 };
  
 
 var CAR= function (fn){
	return fn(function (x,y){
		return x;
	});
 };
 
 var CDR=function (fn){
	 return fn(function(x,y){
		 return y;
	 });
 };
 

 
 //List functions
 
 var list= function (H,T){
	 var l=CONS(H || null,T || null);
	 l.isList=true;
	 return l;
 };
 
 
 
  
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
	 
	 }
 if(l==undefined)
	 return undefined;
 return '('+ltos_iter(l,result)+')';
 }
 

 var list_from_seq=function(){
	 var result;
	 var args=arguments;
	 result=list();
	 for(var i=args.length-1;i>=0;i--)
		 result=list(args[i],result);
	return result;	 
 };
 

 var reverse=function(l){
	 reverse_tr=function (ll, res){
		 if(ll==null)
			 return res;
		res=list(head(ll),res);
	    return reverse_tr(tail(ll),res); 
	 }; 
 return reverse_tr(l,null);
 }
 
var append=function (l, elem){
	  if(head(l)==null)
		  return list(elem);
	  return reverse(list(elem,reverse(l)));
}

  

 var map=function(lst,mapFn){
	 var map_tr=function(l,fn,res){
		 if(l== null)
			 return res;
		 if(head(l)==null)
			 return res;
		 return map_tr(tail(l),fn,list(fn(head(l)),res));
	 };
	   
	 return reverse(map_tr(lst,mapFn,list()));
 }
 
     
var reduce=function(l,fn){
	if(l==null || head(l)==null)
		 return undefined;
	var reduce_tr=function (l,fn,res){
		if(l==null || head(l)==null)
			return res;
		//(res=fn(res,head(l)));
		return reduce_tr(tail(l),fn, (res=fn(res,head(l))));
	};
	return reduce_tr(tail(l),fn,head(l));
}

 
var filter=function (l,fn,res){
	res=res||list();
	if(isEmpty(l))
      	return res;
      	 
	res=fn(head(l))?list(head(l),res):res;
      	 
	return filter(tail(l),fn,res);
}
      
      

      

      
   
       
 var concat=function (l1,l2){
     var concat_tr=function(l1,l2){
      	if(isEmpty(l2))
      		return reverse(l1);
      	if(isEmpty(l1))
      		return l2;
      	return concat_tr(list(head(l2),l1),tail(l2));
      	};
  return concat_tr(reverse(l1),l2);
};

 var insertAt=function (l,at,elem){

 	insertAt_tr=function (ll,count,res){
 		if(isEmpty(ll))
 			return concat(res,elem);
 	    if(count==at)
 	    	return concat(reverse(list(elem,res)),list(head(ll),tail(ll)));
 	    return insertAt_tr(tail(ll),count+1, list(head(ll),res));
 	};
 return insertAt_tr(l,0,list());
};

var removeAt=function (l,at,count,res){
	count=count || 0;
	res=res || list();
	if(isEmpty(l))
		return reverse(res);
	if (count==at)
			return concat(reverse(res),tail(l));
	return removeAt(tail(l),at,count+1,list(head(l),res));
};     
 
var qSort=function (l){
	if(isEmpty(l))
		return list();
	var lesser= qSort(filter(tail(l),function(x) {return x<head(l);}));
	var bigger= qSort(filter(tail(l),function (x) { return x>head(l);}));
	return concat(lesser, list(head(l),bigger));
}
 
var removeWhere=function (l,cond){
	 
	return filter(l, function(x){ return !cond(x);});
};  

// End of list functions


// helper functoions
// (l)ist to (s)tring
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
	 
	 }
if(l==undefined)
	 return undefined;
return '('+ltos_iter(l,result)+')';
}

// syntactci sugar for creating lists  directly from arguments
var list_from_seq=function(){
	 var result;
	 var args=arguments;
	 result=list();
	 for(var i=args.length-1;i>=0;i--)
		 result=list(args[i],result);
	return result;	 
};
