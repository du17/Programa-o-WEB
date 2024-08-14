  // Carregar lista de países
  $.getJSON("https://restcountries.com/v3.1/all", function(data) {
    var options = "<option value=''>Escolha o país</option>";
    for (var i = 0; i < data.length; i++) {
        options += "<option value='" + data[i].name.common + "'>" + data[i].name.common + "</option>";
    }
    $("#country").html(options);
});


$("#country").change(function() {
    var country = $(this).val();
    if (country === "Brazil") {
        $.getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/estados", function(data) {
            var options = "<option value=''>Escolha o estado</option>";
            for (var i = 0; i < data.length; i++) {
                options += "<option value='" + data[i].sigla + "'>" + data[i].nome + "</option>";
            }
            $("#state").html(options);
            $("#state").prop('disabled', false);
        });
    } else {
        $("#state").html("<option value=''>Escolha o país primeiro</option>");
        $("#state").prop('disabled', true);
        $("#city").html("<option value=''>Escolha o estado primeiro</option>");
        $("#city").prop('disabled', true);
    }
});

// Quando um estado é selecionado, carregar lista de municípios correspondentes
$("#state").change(function() {
    var uf = $(this).val();
    if (uf) {
        $.getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios", function(data) {
            var options = "<option value=''>Escolha a cidade</option>";
            for (var i = 0; i < data.length; i++) {
                options += "<option value='" + data[i].nome + "'>" + data[i].nome + "</option>";
            }
            $("#city").html(options);
            $("#city").prop('disabled', false);
        });
    } else {
        $("#city").html("<option value=''>Escolha o estado primeiro</option>");
        $("#city").prop('disabled', true);
    }
});