self.addEventListener('install', function(event)	{
		console.log('Service worker installing...');
		//	TODO	3.4:	Skip	waiting
		self.skipWaiting();
});
//	I'm	a	new	service	worker
// 	file ini akan melakukan pembuatan sebuah event untuk
//	install service worker, log dari installing akan 
//  ditampilkan pada console log keterangan "service worker
//  istalling", kemudian file ini akan melakukan skip waiting
//  pada peroses istallasi 

self.addEventListener('activate', function(event)	{
		console.log('Service worker activating...');
});
//  kemudian pada event diatas dilakukan ketika service worker 
//  selesai dilakukan install, pada change log akan ditampilkan 
//  pesan "Service worker activating".

self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});
//  ketika page atau web tersebut melakukan pindah page atau pergi
//  ke page lain, maka page tersebut akan dilakukan fetching untuk 
//  untuk disimpan dalam cache untuk dapat dibuka  kembali ketika 
//  page tersebut berada pada kondisi offline  