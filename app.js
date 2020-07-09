//menu.createMacBuiltin(mea, [options]) (Mac)
var mb = new nw.Menu({type:"menubar"});
var item;
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: 'Installer Pandoc' }));

submenu.append(new nw.MenuItem({ label: 'Installer Latex' }));
submenu.append(new nw.MenuItem({ label: 'Localiser les variables' }));

//item.submenu = submenu;

var submenuf = new nw.Menu();
submenuf.append(new nw.MenuItem({ 
	label: 'Ouvrir',
			 }));



submenuf.append(new nw.MenuItem({ 
	label: 'Enregister',
	click: function(inputId, callback){
		nw.Window.open('index.html', {}, function(new_win) {
  // do something with the newly created window
});
}
		 }));

	
	
	
	
	
	
		 
	 
	 
submenuf.append(new nw.MenuItem({ 
	label: 'Nouveau',
	click: function(){
		nw.Window.open('index.html', {}, function(new_win) {
  // do something with the newly created window
});
}
		 }));




submenuf.append(new nw.MenuItem({ label: 'Enregistger sans mise en forme' }));
mb.append(new nw.MenuItem({
  label: 'Fichier',
  submenu: submenuf
}));

mb.append(new nw.MenuItem({
  label: 'Pandoc',
  submenu: submenu
}));

//item.click = function Open() { console.log('New click callback'); };
//menu.append(menuitem);
//menuitem.click = functionOpen() { 
    //console.log('clicked');
//};
//console.log(menu.items[0].click);
// append, insert or delete items of `mb` to customize your own menu
// then ...
//nw.Window.get().menu = mb,mf;

