var words = ["battered","steam","fried","calamari","groundfish","roundfish","scallop","skinned","crumble","horse","fish","hippopotamus","seawater","sashimi","marinated","fresh","cuisine","flathead","kitten","saltwater"];
var word = new Array();
var z;
var xAttempt;

function loadWord()
{
	document.getElementById(reset());
	document.getElementById('attempts').innerHTML = "Attempts Left: " + (xAttempt = 6);
	var num = (Math.random() * 20);
	var num = parseInt(num);	
	word = words[num].split("");
	z=new Array(word.length);
	generateGuessDisplay(z);
}

function letter(value)
{
	var attempt = false;
	for (var i = 0; i < word.length; i++)
	{
		if (value == word[i])
		{
			z[i] = value;
			attempt = true;
		}
	}	

	if (attempt == true)
	{
		if (z.join() == word.join() && xAttempt == 6)
		{
			alert("You Won!!! Perfect Score!!!!");
			disableKeys();
		}
			
		if (z.join() == word.join() && xAttempt < 6 && xAttempt > 0)
		{
			alert("You Won!!!");
			disableKeys();
		}
		
	}
	
	if (attempt == false)
	{
		xAttempt--;
		if (xAttempt == 0)
		{
			alert("Game Over!!!! You Lost");
			disableKeys();
			for (var i = 0; i < word.length; i++)
			{
				if (z[i] == null)
				{
					z[i] = word[i];
				}	
			}	
		}
	}
	
	
	
	generateGuessDisplay(z);
	document.getElementById('attempts').innerHTML = "Attempts Left: " + xAttempt;
}

function generateGuessDisplay(word){
	var result="";
	for(var i=0;i<word.length;i++){
	
		if(word[i]==null){
			result+="_";
		}
		
		else{	
			result+=word[i];
		}	
		document.getElementById("answer").innerHTML=result;
	}		
}

function disableKeys(){	
	document.getElementById("q").disabled=true;
	document.getElementById("w").disabled=true;
	document.getElementById("e").disabled=true;
	document.getElementById("r").disabled=true;
	document.getElementById("t").disabled=true;
	document.getElementById("y").disabled=true;
	document.getElementById("u").disabled=true;
	document.getElementById("i").disabled=true;
	document.getElementById("o").disabled=true;
	document.getElementById("p").disabled=true;
	document.getElementById("a").disabled=true;
	document.getElementById("s").disabled=true;
	document.getElementById("d").disabled=true;
	document.getElementById("f").disabled=true;
	document.getElementById("g").disabled=true;
	document.getElementById("h").disabled=true;
	document.getElementById("j").disabled=true;
	document.getElementById("k").disabled=true;
	document.getElementById("l").disabled=true;
	document.getElementById("z").disabled=true;
	document.getElementById("x").disabled=true;
	document.getElementById("c").disabled=true;
	document.getElementById("v").disabled=true;
	document.getElementById("b").disabled=true;
	document.getElementById("n").disabled=true;
	document.getElementById("m").disabled=true;	
}

function reset(){	
	document.getElementById("q").disabled=false;
	document.getElementById("w").disabled=false;
	document.getElementById("e").disabled=false;
	document.getElementById("r").disabled=false;
	document.getElementById("t").disabled=false;
	document.getElementById("y").disabled=false;
	document.getElementById("u").disabled=false;
	document.getElementById("i").disabled=false;
	document.getElementById("o").disabled=false;
	document.getElementById("p").disabled=false;
	document.getElementById("a").disabled=false;
	document.getElementById("s").disabled=false;
	document.getElementById("d").disabled=false;
	document.getElementById("f").disabled=false;
	document.getElementById("g").disabled=false;
	document.getElementById("h").disabled=false;
	document.getElementById("j").disabled=false;
	document.getElementById("k").disabled=false;
	document.getElementById("l").disabled=false;
	document.getElementById("z").disabled=false;
	document.getElementById("x").disabled=false;
	document.getElementById("c").disabled=false;
	document.getElementById("v").disabled=false;
	document.getElementById("b").disabled=false;
	document.getElementById("n").disabled=false;
	document.getElementById("m").disabled=false;
}