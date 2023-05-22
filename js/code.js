const searchinput = document.getElementById('rechercheInput');

searchinput.addEventListener('keyup',function(){

    const input = searchinput.value;

    const result = items.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));


    let suggestion =    `<div class="container">
                            <div class ="row">
            
                        `;

    console.log(result.length);

    if(result.length<5){
        result.forEach(element => {
            suggestion +=`
                <div class="col-sm choix" onclick="Commencer(${element.id});">
                    <div class="col-sm suggestion d-flex justify-content-center">${element.name}</div>
                </div>

            `;
        });
    }else{
        suggestion =`
                <div class="col-sm choix" style="margin-left: 1%;margin-right: 1%;" onclick="Commencer(${result[0].id});">
                    <div class="col-sm suggestion d-flex justify-content-center">${result[0].name}</div>
                </div>

                <div class="col-sm choix" style="margin-left: 1%;margin-right: 1%;" onclick="Commencer(${result[1].id});">
                    <div class="col-sm suggestion d-flex justify-content-center">${result[1].name}</div>
                </div>

                <div class="col-sm choix" style="margin-left: 1%;margin-right: 1%;" onclick="Commencer(${result[2].id});">
                    <div class="col-sm suggestion d-flex justify-content-center">${result[2].name}</div>
                </div>

                <div class="col-sm choix" style="margin-left: 1%;margin-right: 1%;" onclick="Commencer(${result[3].id});">
                    <div class="col-sm suggestion d-flex justify-content-center">${result[3].name}</div>
                </div>

                <div class="col-sm choix" style="margin-left: 1%;margin-right: 1%;" onclick="Commencer(${result[4].id});">
                    <div class="col-sm suggestion d-flex justify-content-center">${result[4].name}</div>
                </div>

            `;
    }

    suggestion += ` </div>
                        </div>`;

    document.getElementById('suggestion').innerHTML = `
    <div class="container">
        <div class="row col-sm-12">
            ${suggestion}
        </div>
    </div>`;

})