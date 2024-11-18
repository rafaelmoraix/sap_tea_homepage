const menuItems = document.querySelectorAll('.sidebar li');

menuItems.forEach(item => {
    if (item.querySelector('.submenu')) {
        const arrow = document.createElement('span');
        arrow.textContent = '▼';
        arrow.style.marginLeft = '5px';
        item.querySelector('a').appendChild(arrow);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#telefone-resp').addEventListener('input', function() {
        console.log("Input event disparado");
        let validtel = document.querySelector('#telefone-resp').value.replace(/\D/g, "").substring(0, 11);
        console.log(validtel);
        let seqtel = validtel.split("");
        let telform = "";

        if (seqtel.length > 0) {
            telform += `(${seqtel.slice(0, 2).join("")}`;
        }
        if (seqtel.length > 2) {
            telform += `) ${seqtel.slice(2, 7).join("")}`;
        }
        if (seqtel.length > 6) {
            telform += ` - ${seqtel.slice(7, 11).join("")}`;
        }

        document.querySelector('#telefone-resp').value = telform;
    });
});

document.querySelector('#telefone-escola').addEventListener('input', function(e) {
    let validtel = e.target.value.replace(/\D/g, "").substring(0, 11);
    let seqtel = validtel.split("");
    let telform = "";
    
    if (seqtel.length > 0) {
        telform += `(${seqtel.slice(0, 2).join("")}`;
    }
    if (seqtel.length > 2) {
        telform += `) ${seqtel.slice(2, 7).join("")}`;
    }
    if (seqtel.length > 6) {
        telform += ` - ${seqtel.slice(7, 11).join("")}`;
    }
    
    e.target.value = telform;
})

document.querySelector('#cep').addEventListener('input', function(e) {
    let validcep = e.target.value.replace(/[^0-9,]/g, '').substring(0,8)
    let seqcep = validcep.split("")
    let cepform = ""
    
    if(seqcep.length > 0){
        cepform += `${seqcep.slice(0,2).join("")}`
    }
    if(seqcep.length > 2){
        cepform += ` ${seqcep.slice(2,5).join("")}`
    }
    if(seqcep.length > 5){
        cepform += ` - ${seqcep.slice(5,8).join("")}`
    }
    e.target.value = cepform
})

document.querySelector('#cnpj').addEventListener('input', function(e) {
    let validseq = e.target.value.replace(/[^0-9,]/g, '').substring(0,14)
    let seqcnpj = validseq.split("")
    let cnpjform = ""

    if (seqcnpj.length > 0){
        cnpjform += `${seqcnpj.slice(0,2).join("")}`
    }
    if (seqcnpj.length > 2)
    {
        cnpjform += `.${seqcnpj.slice(2,5).join("")}`
    }
    if (seqcnpj.length > 5)
    {
        cnpjform += `.${seqcnpj.slice(5,8).join("")}`
    }
    if (seqcnpj.length > 8)
    {
        cnpjform += `/${seqcnpj.slice(8,12).join("")}`
    }
    if (seqcnpj.length > 12)
    {
        cnpjform += ` - ${seqcnpj.slice(12,14).join("")}`
    }

    e.target.value = cnpjform
})