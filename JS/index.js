const botao = $("#btnSubmit");
const titulo = $("#titulo");
const resultado = $("#imagem");
const explicação = $("#descrição");
let obj;

botao.on ('click', function(event){
    event.preventDefault();
    console.log('botão pressionado');
    sendApiRequest();
});

function sendApiRequest(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=7IBF0w2CIYNaixkBgJ86YwGxcZNIngxgC7U22JKz&date=` + $(`#date`).val(),
        success: function(result){
            obj = result;
            titulo.html(`${obj.title}`);
            explicação.html(`${obj.explanation}`);
            if(obj.media_type!="video"){
                resultado.html(`<img width = "600px" heigth = "600px" id="picture" src="${obj.url}" alt=""></img>`)
            } else{
                resultado.html(`<iframe id="video" src="${obj.url}" alt=""></iframe`)
            }
        }
    })
}