function kolobok (person){
	switch(person) {
  case 'Дедушка':  
    return 'Я от дедушки ушёл'
  case 'Заяц':  
    return 'Я от зайца ушёл'
	case 'Лиса':  
    return 'Меня съели х_х'
  default:
    return 'И от тебя уйду!'
}
}

const ded = 'Дедушка'
const rabbit = 'Заяц'
const fox = 'Лиса'
const a='Кто-то'

console.log(kolobok(ded))
console.log(kolobok(rabbit))
console.log(kolobok(fox))
console.log(kolobok(a))


function newYear (person){
	let output
	output = `${person}! ${person}! ${person}!`
	return output
}

const dedmoroz='Дед Мороз'
const snegur='Снегурочка'

console.log(newYear(dedmoroz))