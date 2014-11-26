
var test_creation=function(){
	var l1;
	l1=list(1,list(2,list(3,null)));
	console.log("Classic: list(1,list(2,list(3,null)))=>"+ltos(l1));
	console.log("null list: list()=> "+ ltos(list()));
	l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	console.log("from Seq: list_from_seq(1,2,3,4,5,6,7,8,9,10)=> "+ltos(l1));
	var lol=list_from_seq(list(1,list(2)),list('a',list("b")));
	console.log("List of lists (1,2) (a,b) =>"+ ltos(lol));
	
	};

test_reverse=function(){
	var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	console.log("Reverse Tests:")
	console.log("Reverse("+ltos(l1)+")=>\n"+ltos(reverse(l1)));
	console.log("Reverse of Reverse(l1)"+ltos(reverse(reverse(l1))));
	console.log("Reverse of Empty list =>"+ltos(reverse(list())));
	
};

var test_append=function(){
 
	var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	console.log("Append tests");
	console.log('append ('+ltos(l1)+',20)=>\n'+ ltos(append(l1,20)));
	console.log("append 20 to empty list =>"+ ltos(append(list(),20)));
	
};

var test_map=function(){
	console.log("map: ");
	var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	var ml=map(l1, function(x){ return x*2;});
	console.log("Map (x) => x*2 of "+ ltos(l1)+"=>\n"+ltos(ml));
	var ml=map(l1, function(x){ return x*3;});
	console.log("Map (x) => x*3 of "+ ltos(l1)+"=>\n"+ltos(ml));
};

var test_reduce=function(){
	console.log("reduce: ")
	var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	var redfun=function(prev,cur){ return prev+cur;}
	console.log("reduce " + ltos(l1)+": using func(p,c)=>p+c =>\n"+reduce(l1,redfun));
	 
	console.log("reduce empty list(): "+reduce(list(),redfun));
	 
};
 

var test_filter=function(){
	console.log("filter: ")
	var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	console.log("Filter "+ltos(l1)+" using function(x){ return x52==0}\n"+
			     ltos(filter(l1,function(x){return x%2==0;})));
	console.log("Filter empty list=> "+filter(list(),function (x) {return x%2==0;}));
}

var test_length=function(){
	console.log("length:" )
	var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	console.log("Lenght L1 " + length(l1));
	console.log("length () "+ length(list()));
	
}

var test_concat=function(){
	console.log("concat: ")
	var al=list_from_seq(1,2,3);
	var al1=list_from_seq("a","b","c");

	console.log("Concat of (1,2,3) and (a,bc) =>"+ltos(concat(al,al1)));
	console.log("Concat of (1,2,3) and () =>"+ltos(concat(al,list())));
	console.log("Concat of () and (a,bc) =>"+ltos(concat(list(),al1)));
};
 

 var test_insert=function(){
	 console.log("insertAt");
	 var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	 var il=insertAt(l1,0, "a");
	 console.log("L1= "+ltos(l1));
	 console.log("insertAt (l1,0) :"+ ltos(il));
	 il=insertAt(l1,4,"b");
	 console.log("insertAt (l1,4) "+ ltos(il));

	 il=insertAt(l1,10,"b");
	 console.log("insertAt (10) beyond length "+ ltos(il)); 
 };

 var test_remove=function(){
	 console.log("removeAt: ");
	 var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);
	 var rl=removeAt(l1,0);
	 console.log("L1= "+ltos(l1));
	 console.log("removeAt(l1,0) "+ltos(rl));

	 var rl=removeAt(l1,4);
	 console.log("removeAt(l1,4) "+ltos(rl));

	 var rl=removeAt(l1,10);
	 console.log("removeAt(l1,10) beyond length "+ltos(rl)); 
	 
 };

var test_qSort=function(){
console.log("QSORT: ")
var sl=list_from_seq(23,4,9,2,3,1,2,4,37,26,12,15);
var r1=ltos(qSort(sl));
console.log("Qsort "+ltos(sl)+" =>\n"+r1);
};


var test_removeWhere=function(){
console.log("removeWhere: ")
var l1=list_from_seq(1,2,3,4,5,6,7,8,9,10);

var r1=ltos(removeWhere(l1,function(x){return x%2==0;}));
console.log("L1= "+ ltos(l1));
console.log("removeWhere multiples of 2 from l1=>"+r1)

r1=ltos(removeWhere(l1,function(x){return x%3==0;}));
console.log("L1= "+ ltos(l1));
console.log("removeWhere multiples of 3 from l1=>"+r1);
};


var test_all=function(){
	test_creation();
	test_reverse();
	test_append();
	test_map();
	test_reduce();
	test_filter();
	test_length();
	test_concat();
	test_insert();
	test_remove();
	test_qSort();
	test_removeWhere();
	
}

test_all()