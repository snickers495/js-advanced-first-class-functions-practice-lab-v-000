// Code your solution in this file!
 function logDriverNames(arr) {
   arr.forEach(name => console.log(name.name));
 }
 function logDriversByHometown(arr, word) {
   arr.forEach(function(name) {
     if (name.hometown === word) {
       console.log(name.name);
     }
   })
 }
 function driversByRevenue(arr) {
   const newArr = arr.slice();
   return newArr.sort(function(ele, ele2) {
     return ele.revenue - ele2.revenue;
   });
 }
function driversByName(arr){
  const newArr = arr.slice();
  return newArr.sort(function(ele, ele2) {
    return (ele.name).localeCompare(ele2.name);
  })
}
function totalRevenue(arr){
  let newArr = arr.reduce(function(total, el, i, ele2) {
    return (total + ele2.revenue) });
}
function averageRevenue(arr) {
  let newRev = arr.reduce((total, curr) => total + curr.revenue
  )
  return newRev
}
