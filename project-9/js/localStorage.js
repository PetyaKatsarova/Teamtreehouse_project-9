const checkboxOne = document.querySelector('#checkboxOne');
const checkboxTwo = document.querySelector('#checkboxTwo');
let timeZone = document.querySelector('.timeZone');

function saveSettings(){
  localStorage.setItem('checkboxOne',JSON.stringify(checkboxOne.checked));
  localStorage.setItem('checkboxTwo',JSON.stringify(checkboxTwo.checked));
  localStorage.setItem('select',JSON.stringify(timeZone.selectedIndex));
}
function loadSettings(){
  const checked = JSON.parse(localStorage.getItem('checkboxOne'));
  const checkedTwo = JSON.parse(localStorage.getItem('checkboxTwo'));
  const selectValue = JSON.parse(localStorage.getItem('select'));

  if(checked == false){
    checkboxOne.removeAttribute('checked');
  }
  if(checkedTwo == false){
    checkboxTwo.removeAttribute('checked');
  }
  if(selectValue > 0){
    timeZone.selectedIndex = selectValue;
  }
}
//});

loadSettings();
function removeSettings(){
  localStorage.clear();
}
