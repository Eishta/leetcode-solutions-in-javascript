// Binary search

var countNegativesBinary = function(grid) {
    let count = 0;
    for(const row of grid){
      const index = searchFirstNegativeIndex(row)
      count+= row.length - index;
    }
    return count
      
  };
  
  function searchFirstNegativeIndex(arr,target){
    let r = arr.length - 1;
    let l = 0;
    while(l <= r){
      const mid = Math.floor((l+r)/2)
      if(arr[mid] < 0){
        r = mid-1
      }else{
        l = mid+1
      }
    }
    return l
  }




  //SECOND
  let countNegativeReduce = grid=>{
    return grid.reduce((acc, row)=> acc += row.filter(e=> e<0).length, 0 )
  }