// crée le tableau d'objet :

function loadItem(){
    let items;
    var name;
    for(var i=1;i<=732;i++){
        name = downloadFile
    }

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