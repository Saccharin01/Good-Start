// * Event Control==============================
export const evnet = function event(eventType){

  let isSelected;

root.addEventListener(`click`, function(e){ // === ()=>{}
  if(e.target !== root){
    if(isSelected){
      isSelected.style.backgroundColor = "#f0f0f0"
      e.target.style.backgroundColor = "red"
      isSelected = e.target
      // console.log(456)
    }else{
      e.target.style.backgroundColor = "red"
      isSelected = e.target
      // console.log(123)
    };
  }else{
    isSelected.style.backgroundColor = "#f0f0f0"
    // console.log(3)
  }
})

}
//*==============================
