$.getJSON("https://restcountries.com/v3.1/all", function(data) {

    var options = "<option value=''>escolha o pais</option>";

    for (var i = 0; i < data.length; i++) {
        options += "<option value='" + data[i].name.common + "'>" + data[i].name.common + "</option>";
    }
    $("#pais").html(options);
});


$("#pais").change(function(){
    
    var country = $(this).val();

    if (country === "Brazil"){
        $.getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/estados", function(data){
            var options = "<option value=''>escolha o estado</option>";
            for (var i = 0; i < data.length; i++) {
                options += "<option value='" + data[i].sigla + "'>" + data[i].nome + "</option>";
            }
            $("#estado").html(options);
            $("#estado").prop('disabled', false);
        });
    }

    else{
        $("#estado").html("<option value=''>primeiro escolha o pais</option>");
        $("#estado").prop('disabled', true);
        $("#cidade").html("<option value=''>primeiro escolha o estado</option>");
        $("#cidade").prop('disabled', true);
    }
});

$("#estado").change(function(){

    var est = $(this).val();

    if (est) {
        $.getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + est + "/municipios", function(data) {
            var options = "<option value=''>escolha a cidade</option>";
            for (var i = 0; i < data.length; i++) {
                options += "<option value='" + data[i].nome + "'>" + data[i].nome + "</option>";
            }
            $("#cidade").html(options);
            $("#cidade").prop('disabled', false);
        });
    } 
    
    else{
        $("#cidade").html("<option value=''>primeiro escolha o estado</option>");
        $("#cidade").prop('disabled', true);
    }
});