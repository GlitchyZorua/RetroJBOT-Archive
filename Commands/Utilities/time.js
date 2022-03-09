module.exports = {
	name: 'time',
	async execute() {
		const unix = Math.floor(Date.now() / 1000);
		// const thisDate = new Date();
		// let clock;
		// switch (new Date().getHours()) {
		// 	case 11:
		// 		clock = "🕛";
		// 		break;
		// 	case 10:
		// 		clock = "🕚";
		// 		break;
		// 	case 9:
		// 		clock = "🕙";
		// 		break;
		// 	case 8:
		// 		clock = "🕘";
		// 		break;
		// 	case 7:
		// 		clock = "🕗";
		// 		break;
		// 	case 6:
		// 		clock = "🕖";
		// 		break;
		// 	case 5:
		// 		clock = "🕕";
		// 		break;
		// 	case 4:
		// 		clock = "🕔";
		// 		break
		// 	case 3:
		// 		clock = "🕓";
		// 		break;
		// 	case 2:
		// 		clock = "🕒";
		// 		break;
		// 	case 1:
		// 		clock = "🕑";
		// 		break;
		// 	case 0:
		// 		clock = "🕐";
		// 		break;
		// } // First time using switches, I am proud
		// let currentTime = new Date(),
		// 	hours = currentTime.getHours(),
		// 	seconds = currentTime.getSeconds(),
		// 	minutes = currentTime.getMinutes();


		// var suffix = "AM";
		// if (hours >= 12) {
		// 	suffix = "PM";
		// 	hours = hours - 12;
		// }
		// if (hours == 0) {
		// 	hours = 12;
		// }
		// if (timehours == 0) { timehours = 12 }
		// timehours = timehours.toString().length > 1 ? timehours : '0' + timehours
		// timeminutes = timeminutes.toString().length > 1 ? timeminutes : '0' + timeminutes
		// timeseconds = timeseconds.toString().length > 1 ? timeseconds : '0' + timeseconds
		return `🕒 <t:${unix}:T>`;
		//+ '\n:warning: `this time isnt really accurate, so sometimes it might show the wrong time`'
	}
}