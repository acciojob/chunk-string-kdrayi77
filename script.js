function stringChop(str, size) {
  let B=[];
  let A="";
  let c=0;
	for(i=0;i<str.length;)
	{
	  for(j=i;j<n && j<str.length;j++)
	  {
	    A+=s[j];
	  }
	  i=j;
	  size=size+size;
	 // console.log(A);
	  B[c]=A;
	  c++;
	  A="";
	}
	return B;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
