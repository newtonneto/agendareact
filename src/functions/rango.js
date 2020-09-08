import $ from 'jquery';

export default function Rango() {
    var max_fields = 3; //Quantida máxima de inputs
    var wrapper = $(".input_fields_wrap"); //Input wrapper
    var add_button = $(".add_field_button"); //Add input
    var auxiliar_controle = 2; //Usado para concatenar com texto dos inputs
    var index = 1; //Variavel de controle do loop

    $(add_button).click(function(e){ //Adicionar inputs
        e.preventDefault();
        if(index < max_fields){ //Verifica se já atingiu a quantidade máxima de inputs
            index++;
            $(wrapper).append(
                '<div>'
                    +'<input type="text" placeholder="Phone ' + auxiliar_controle + '" class="form-control cellphone" name="number' + auxiliar_controle + '" id="number' + auxiliar_controle + '" />'
                    +'<br/>'
                +'</div>'
            );
            auxiliar_controle++;
        }

        if(index === max_fields){
            $(".add_field_button").remove();
        }
    });
}
