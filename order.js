console.log("order");

const orders= [
  { 
	"customer" : {
		"name": "Bop",
		"phone": 123,
	},
	"cart":[

		{
		  "product"    : "Bread",
		  "quantity"   : 10,	  
		  "Unit Price" : 10,	
		  "Total_Price": 100,	
			  
		}],
	"total": 100,
	"paid" :80,
	"due" :20,
  },
  {
	"customer" : {
		"name": "Alis",
		"phone": 124,
	},
	"cart":[

		{
		  "product"    : "Rice",
		  "quantity"   : 10,	  
		  "Unit Price" : 5,	
		  "Total_Price": 50,	
			  
		}],
	"total": 50,
	"paid" :50,
	"due" :0,	
  }]
  
   const product = orders.map( (n) => {
	const products = n.cart[0].product
	const totalPrice = n.cart[0].Total_Price;
	return [products,totalPrice];
	
	});
console.log(product);
const productOne = product[0][0];
const productOneSale = product[0][1];
console.log(productOne,productOneSale);
 let arr = ["a","b"];
 let arrj = arr.length;
 //console.log(arrj);
 const order = orders.map((n) => n.total)
 const totalOrder = order.reduce( (sum,current) => sum+=current,0);
 const totalOrderAvg = totalOrder/arrj;
 let paid = orders.map((n) => n.paid)
 const totalPaid = paid.reduce((sum,current) => sum+=current,0);
 const due = orders.map((n) => n.due)
 const totalDue = due.reduce((sum,current) => sum+=current,0);
 
 
 console.log("total order amount: ",totalOrder);
 console.log("total paid: ",totalPaid);
 console.log("total due: ",totalDue);
 console.log("total order number: ",arrj);
 console.log("average order amount: ",totalOrderAvg);
 //const itemWiseTotalSale = orders.map(item => item.cart).flat().map(item => item.unitPrice * item.quantity)
 const arrayM = ["one",
["two","three", "four", ["five", "six", ["seven", "eight", "nine", "ten"]]]
];
const arrayf1 = arrayM.flat(2);
console.log(arrayf1);
/*const order2= {
	"customer" : {
		"name": "Alis",
		"phone": 124,
	},
	"cart":[

	{
	  "product"    : "Rice",
      "quantity"   : 10,	  
      "Unit Price" : 5,	
      "Total Price": 50,	
      	  
	}
	],
	"total": 50,
	"paid" :50,
	"due" :0,
	}*/
	//caldulate total amount of order;
	//caldulate total  paid;
	//caldulate total  Due amount;
	//ouder count