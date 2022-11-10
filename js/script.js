const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//REFACTOR CODICE POST CORREZIONE

function getRandomColor(){
	let color = Math.floor(Math.random()*16777215).toString(16);
	return color
}

function colorChange(arrIcons) {
	arrIcons.forEach(objIcon => objIcon.color = getRandomColor());
}

function renderIcons(arrData) {
	eleContainer.innerHTML = '';
	for(let i = 0; i < arrData.length; i++){
		const objIcon = arrData[i];
		eleContainer.innerHTML += generateCard(objIcon);
	}
	// ALTERNATIVA CON forEach 
	// arrData.forEach(objIcon => eleContainer.innerHTML += generateCard(objIcon));
};

function generateCard(objData){
	return `
		<div class="card">
			<i class="${objData.family} ${objData.prefix}${objData.name} ${objData.type}" style="color: #${objData.color}"></i>
			<div class="text">${objData.name}</div>
		</div>
	`
};	

function populateSelect(arrData, eleSelect){

	const arrTypes = [];
	arrData.forEach(objIcon =>{
		if(!arrTypes.includes(objIcon.type)){
			arrTypes.push(objIcon.type);
		}
	});
	
	// ALTERNATIVA CON L'IF IN RIGA USANDO ? :
	// arrData.forEach(objIcon => arrTypes.includes(objIcon.type) ? '' : arrTypes.push(objIcon.type));

	arrTypes.forEach(type => eleSelect.innerHTML += `<option value="${type}>${type}</option>`);
}

function filterIcons() {
	const selectedType = this.value;

	// filtrare array
	if(selectedType !== ''){
		arrIconsFiltered = arrIcons.filter(objIcon => objIcon.type === selectedType)
	} else {
		arrIconsFiltered = arrIcons;
	}
	
	// renderizzare array delle icone filtrate
	renderIcons(arrIconsFiltered, eleContainer);
}
	

const eleContainer = document.querySelector('.container');
const eleSelect = document.querySelector('#icons-select');

colorChange(arrIcons);
renderIcons(arrIcons, eleContainer)
populateSelect(arrIcons, eleSelect);
eleSelect.addEventListener('change', filterIcons);















  

