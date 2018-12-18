const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const years = [2017, 2018, 2019];
const date = new Date(),
      m = date.getMonth() + 1,
      y = date.getFullYear();

const monthSelect = document.getElementById('months');
const yearSelect = document.getElementById('years');

const yearIndex = years.indexOf(y);

console.log(yearIndex);

function addOption(value, text) {
	const o = document.createElement('option');
  o.value = value;
  o.text = text;
  return o;
}

for(let i = 0; i <= yearIndex; i++) {
	const option = addOption(years[i], years[i]);
  yearSelect.add(option)
}

var m12, mx;
for(let i = 0; i < 12; i++) {
		var option = addOption(i + 1, month[i]);
		if(i < m){
			 mx += option.outerHTML;
			 monthSelect.add(option);
			}
			 m12 += option.outerHTML;	
		}

monthSelect.value = m;
yearSelect.value = y;

   function changeMonths(e){
			if(e.target.value != y){
				monthSelect.innerHTML = m12;
			}
			else monthSelect.innerHTML = mx;
		}
		yearSelect.addEventListener('change',changeMonths);
   
