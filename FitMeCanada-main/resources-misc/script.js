/*
File will be used for reference. Will not be used.

document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded: Code launches when the HTML has been loaded
	var checkPageButton = document.getElementById('checkPage'); // HTML ID used here
	checkPageButton.addEventListener('click', function () {

		chrome.tabs.getSelected(null, function (tab) {
			d = document;

			var f = d.createElement('form');
			f.action = 'http://gtmetrix.com/analyze.html?bm';
			f.method = 'post';
			var i = d.createElement('input');
			i.type = 'hidden';
			i.name = 'url';
			i.value = tab.url;
			f.appendChild(i);
			d.body.appendChild(f);
			f.submit();
		});
	}, false);
}, false);

*/