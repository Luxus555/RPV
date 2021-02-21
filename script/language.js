

let lang1 = 'en',
	arr = [];

if (lang1 === 'ru') {
   let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
}
if (lang1 === 'en') {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	alert(arr);
}

let lang2 = 'ru',
	arr2 = [];
switch (lang2) {
	case 'ru':
		arr2 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	break;
	case 'en':
		arr2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		break;
	}
	alert(arr2);
	

let lang3 = 'ru',
 day = {
	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
alert(day[lang3]);

let namePerson;
