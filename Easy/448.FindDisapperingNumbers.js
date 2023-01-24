let findDisappearedNumbers = (nums) => {
    let obj ={};
    for(let i=1;i<=nums.length;i++){
        obj[i] = 1;
    }
     nums.forEach(e=> obj[e] = -1) 
      return Object.keys(obj).filter(e=> obj[e]>0);
  };