/**
 * SOLVED PROBLEM
 */

function submitProblem() {
	/*var problem = document.getElementById("inputProblem").value;
	console.log("PROBLEM :: "+problem);
	document.getElementById("displayInput").innerHTML = problem;*/
	
	//create set
	var sampleOne = ["A","A"];
	var sampleTwo = ["A","B","C","A"];
	var sampleThree = ["A","A","A"];
	var sampleEmpty = [];
	
	document.getElementById("displayInput").innerHTML = "[ "+sampleOne+" ]<br/>[ "+sampleTwo+" ]<br/>[ "+sampleThree+" ]<br/>[ "+sampleEmpty+" ]";
	
	var clouse1 = new Array();
	clouse1 = [sampleOne,sampleEmpty];

	document.getElementById("displayInput-1").innerHTML = "["+sampleOne+"],["+sampleEmpty+"] <br/>";
	var clouse1Result = simpl1(clouse1);
	console.log("CLOUSE RESULT :: "+clouse1Result);
	document.getElementById("displayOutput-1").innerHTML = "[ "+clouse1Result[0][0]+" ] [ "+clouse1Result[0][1]+" ]<br/>";
	
	var clouse2 = [sampleTwo,sampleEmpty];
	document.getElementById("displayInput-11").innerHTML = "[ "+sampleTwo+" ] [ "+sampleEmpty+" ]<br/>";
	
	var clouse2Result = simpl1(clouse2);
	console.log("CLOUSE RESULT :: "+clouse2Result);
	document.getElementById("displayOutput-11").innerHTML = "[ "+clouse2Result[0][0]+" ] [ "+clouse2Result[0][1]+" ]  <br/>";
	
	var clouse3 = [sampleEmpty,sampleEmpty];
	document.getElementById("displayInput-12").innerHTML = "[ "+sampleEmpty+" ]["+sampleEmpty+"]<br/>";
	var clouse3Result = simpl1(clouse3);
	console.log("CLOUSE RESULT :: "+clouse3Result);
	document.getElementById("displayOutput-12").innerHTML = "[ "+clouse3Result[0][0]+" ] [ "+clouse3Result[0][1]+" ] <br/>";
	
	var clouse4 = [sampleThree,sampleEmpty];
	document.getElementById("displayInput-13").innerHTML = "[ "+sampleThree+" ] ["+sampleEmpty+"]<br/>";
	var clouse4Result = simpl1(clouse4);
	console.log("CLOUSE RESULT :: "+clouse4Result);
	document.getElementById("displayOutput-13").innerHTML = "[ "+clouse4Result[0][0]+" ] [ "+clouse4Result[0][1]+" ]<br/>";
	
	var simpleTwoclouse1 = [sampleEmpty,sampleOne];
	document.getElementById("displayInput-21").innerHTML = "[ "+sampleEmpty+" ]["+sampleOne+"]<br/>";
	var simpleTwoclouse1Result = simpl2(simpleTwoclouse1);
	console.log("CLOUSE RESULT :: "+simpleTwoclouse1Result);
	document.getElementById("displayOutput-21").innerHTML = "[ "+simpleTwoclouse1Result+" ]<br/>";
	
	var simpleTwoclouse2 = [sampleEmpty,sampleTwo];
	document.getElementById("displayInput-22").innerHTML = "[ "+sampleEmpty+" ]["+sampleTwo+"]<br/>";
	var simpleTwoclouse2Result = simpl2(simpleTwoclouse2);
	console.log("CLOUSE RESULT :: "+simpleTwoclouse2Result);
	document.getElementById("displayOutput-22").innerHTML = "[ "+simpleTwoclouse2Result+" ]<br/>";

	
	var simpleTwoclouse3 = [sampleEmpty,sampleEmpty];
	document.getElementById("displayInput-23").innerHTML = "[ "+simpleTwoclouse3+" ]<br/>";

	var simpleTwoclouse3Result = simpl2(simpleTwoclouse3);
	console.log("CLOUSE RESULT :: "+simpleTwoclouse3Result);
	document.getElementById("displayOutput-23").innerHTML = "[ "+simpleTwoclouse3Result+" ]<br/>";
	
	var simpleTwoclouse4 = [sampleEmpty,sampleThree];
	document.getElementById("displayInput-24").innerHTML = "[ "+simpleTwoclouse4+" ]<br/>";
	
	var simpleTwoclouse4Result = simpl2(simpleTwoclouse4);
	console.log("CLOUSE RESULT :: "+simpleTwoclouse4Result);
	document.getElementById("displayOutput-24").innerHTML = "[ "+simpleTwoclouse4Result+" ]<br/>";
	
	var l1 = ["A"];
	
	var l2 = ["B"];
	
	var l3 = ["A","B"];
	
	var l4 = ["C"];
	
	var l5 = ["A","A","B"];
	
	var l6 = ["A","A"];
	
	var l7 = ["B","B"];
	
	
	var rClause1 = [l1,sampleEmpty];
	
	var rClause2 = [sampleEmpty,l1];
	
	document.getElementById("displayInput-31").innerHTML = "[ "+rClause1+" ] , &nbsp;[ "+rClause2+" ]";
	
	var rClause3 = [sampleEmpty,l2];
	
	var rClause4 = [l3,sampleEmpty];
	
	var rClause5 = [sampleEmpty,l3];
	
	var rClause6 = [l2,l4];
	
	var rResult = resolution(rClause1, rClause2);
	
	document.getElementById("displayOutput-31").innerHTML = "[ "+rResult+" ]";
	
}


function  simpl1( clouse) {
	var positive_atoms = clouse[0];
	console.log("TEST CLOUSE-1 ::  ");
	console.log(positive_atoms);
	var i = positive_atoms.length;
	var positive_res = new Array();
	for (var x = 0; x < i; x++) {
		var to_add = true;
		for (var y = x + 1; y<i; y++) {
			console.log("------------------------------");
			console.log(positive_atoms[x]);
			console.log(positive_atoms[y]);
			console.log("------------------------------");
			if (positive_atoms[x] === positive_atoms[y] ) {
				to_add = false;
			}
		}
		if (to_add){
			positive_res.push(positive_atoms[x]);
		}
		console.log(positive_atoms[x]);
		console.log(" TO ADD ::: "+to_add);
	}
	console.log("LIST 1 CHECK :: ");
	console.log(positive_res);
	var finalList = new Array();
	for(var i = 0; i < 1; i++){
		finalList[i] = new Array();
	}
	finalList[0][0] = positive_res;
	finalList[0][1] = clouse[1];
	console.log("simple1--->");
	console.log(finalList);
	return finalList;
}

function simpl2( clouse) {
	var positive_atoms = clouse[1];
	var i = positive_atoms.length;
	var positive_res = new Array();
	for (var x = 0; x < i; x++) {
		var to_add = true;
		for (var y = x + 1; y < i; y++) {
			if (positive_atoms[x]=== positive_atoms[y]) {
				to_add = false;
			}
		}
		if (to_add)
			positive_res.push(positive_atoms[x]);
	}
	var finalList = new Array();
	for(var i = 0 ; i < 2; i++){
		finalList[i]=new Array();
	}
	finalList[0][0] = clouse[0];
	finalList[0][1] = positive_res;
	return finalList;
}


function universal( clause) {
	var pos_atoms = clause[0];
	console.log("U P :: "+pos_atoms);
	var neg_atoms = clause[1];
	console.log("U N :: "+neg_atoms);
	var pos_res = new Array();
	var neg_res = new Array();
	for (var x = 0; x < pos_atoms.length; x++) {	
		for(var n=0; n < neg_atoms.length; n++){
			if (neg_atoms[n]!== pos_atoms[x]) {
				pos_res.push(pos_atoms[x]);
			}
		}
	}

	for(var x = 0; x < neg_atoms.length; x++){
		for(var p = 0; p < pos_atoms.length; p++){
			if(pos_atoms[p] !== neg_atoms[x]){
				neg_atoms.push(neg_atoms[x]);
			}
		}
	}

	console.log("UNIVERS POS :: "+pos_res);
	console.log("UNIVERS NEG :: "+neg_res);
	var clause_res = new Array();
	for(var i = 0; i < 2; i++){
		clause_res[i] = new Array();
	}
	
	clause_res[0][0]= pos_res;
	clause_res[0][1]= neg_res;
	return clause_res;
}

function resolution( clause1,  clause2) {
	console.log("PRINT RESOLUTION :: ")
    console.log("--->"+clause1);
    console.log("--->"+clause2);
    
	var pos_res = new Array();
	pos_res.push(clause1[0]);
	pos_res.push(clause2[0]);
	console.log("PR :: "+pos_res);
	var neg_res = new Array();
	neg_res.push(clause1[1]);
	neg_res.push(clause2[1]);
	console.log("NR :: "+neg_res);
    
	var clause = new Array();

	clause.push(pos_res);
	clause.push(neg_res);
	console.log("c :: "+clause);
	var simpleOneclause = simpl1(clause);
	console.log(simpleOneclause);
	var simpleTwoclause = simpl2(simpleOneclause);
	console.log(simpleTwoclause);
	clause = universal(simpleTwoclause);
	console.log(clause);
	return clause;
}