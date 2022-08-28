const chart = document.querySelector('#chart').getContext('2d');
// create a new chart instance
new Chart(chart, {
	type: 'line',
	data: {
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		datasets: [
			{
				label: 'BTC',
				data: [
					29741, 35157, 15454, 54454, 21584, 24524, 24542, 24654, 24564, 45445,
					44654, 55011,
				],
				borderColor: 'red',
				borderWidth: 2,
			},
			{
				label: 'ETH',
				data: [
					54545, 12424, 12542, 32242, 13124, 32313, 21245, 13421, 002114, 12454,
					44654, 50512,
				],
				borderColor: 'blue',
				borderWidth: 2,
			},
		],
	},
	options: {
		responsive: true,
	},
});

// show or hide sidebar section start

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sideBar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
	sideBar.style.display = ' block';
});

closeBtn.addEventListener('click', () => {
	sideBar.style.display = 'none';
});

// show or hide sidebar section end

// change theme

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme');

	themeBtn.querySelector('span:first-child').classList.toggle('active');
	themeBtn.querySelector('span:last-child').classList.toggle('active');
});
