### How the data was added ?
Ans: So as it is a complex component where each child can also have same schema as its parent so to add to created the schema as follows for the project
1. Top level array so that data can be rendered easily through map:
1. Then inside an object where each object represent one component with has keys inside of name, type , required , child 
1. The child part will have same Schema as as it parent which array of object so that child can also be rendered 

### How this whole component was created? 
Ans: So as the their was a parent component where all other data was coming which is inputBox which will have all the data that is there in the inputBox and this inputBox will be recursive component which if finds that type is object so it will recurvisevly call the component untill it reaches the final elemnent who doesnt have the type property of the object

