var arr1= [1, 1, 23, 32, 23,1,50,40, 60,50];

function input(arr,n){
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a,b) => b -a);
     

    console.log('uniquearr', uniqueArr);
    
}
input (arr1, 3)