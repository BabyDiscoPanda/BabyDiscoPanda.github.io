const searchinput = document.getElementById('rechercheInput');

searchinput.addEventListener('keyup',function(){

    let limit = 0;

    const input = searchinput.value;

    const result = items.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));


    let suggestion = '';

    console.log(result.length);

    if(result.length<5){
        result.forEach(element => {
            suggestion +=`
                <div class="col-sm suggestion d-flex justify-content-center" onclick="Commencer(${element.id});">${element.name}</div>
            `;
        });
    }else{
        suggestion =`
                <div class="col-sm suggestion d-flex justify-content-center" onclick="Commencer(${result[0].id});">${result[0].name}</div>
                <div class="col-sm suggestion d-flex justify-content-center" onclick="Commencer(${result[1].id});">${result[1].name}</div>
                <div class="col-sm suggestion d-flex justify-content-center" onclick="Commencer(${result[2].id});">${result[2].name}</div>
                <div class="col-sm suggestion d-flex justify-content-center" onclick="Commencer(${result[3].id});">${result[3].name}</div>
                <div class="col-sm suggestion d-flex justify-content-center" onclick="Commencer(${result[4].id});">${result[4].name}</div>
            `;
    }

    document.getElementById('suggestion').innerHTML = `
    <div class="container">
        <div class="row col-sm-12">
            ${suggestion}
        </div>
    </div>`;

})