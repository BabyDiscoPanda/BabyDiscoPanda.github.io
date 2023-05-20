// crée le tableau d'objet :

function loadItem(){
    let tmp = new Object;
    tmp.id = 0;
    tmp.name = "delet";
    var items =[];
    items.push(tmp);
    let name;
    for(let i=1;i<=732;i++){
        if(i==1){
            let item = new Object;
            name = downloadFile(i);
            item.id = i;
            item.name = name;
            items.push(item);
        }
    }
    document.getElementById('Ttest').innerHTML = items.indexOf(1).name;
    document.getElementById('test').innerHTML = "<img src='./item/"+items.indexOf(1).id+"/img.webp'/>";
}

async function downloadFile(name) {
	let response = await fetch("./item/"+name+"/info.txt");
		
	if(response.status != 200) {
		throw new Error("Server Error");
	}
		
	// read response stream as text
	let text_data = await response.text();

	return text_data;
}