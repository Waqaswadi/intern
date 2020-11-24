var testArray = [5,5,5,5,5,5];


console.log("Program to check whether numbers are equal or not");

console.log("The elements of Array are:");


for(let i=0;i<testArray.length;i++) {

console.log("First element compared with =  " +i);

if(testArray[i] == testArray[i+1])
	{
		console.log("Equal");
		
	}
	
	else {
		
    console.log(" Not Equal")
	break;
	
	}

} //to print & check the elements

