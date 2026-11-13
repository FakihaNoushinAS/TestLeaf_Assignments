
// declaring objects enum in typescript

//Task 1 – Declare and Manipulate a Product Object

let productDetails: {
    productID:number,
    productName: string,
    isAvailable?:boolean
}={
    productID:121,
    productName:"Monitor",
    isAvailable:true
};

//update the product name after initializing the object

productDetails.productName= "Mobile";
console.log(productDetails.productName);
//delete the isAvailable property from the object

delete productDetails.isAvailable;



