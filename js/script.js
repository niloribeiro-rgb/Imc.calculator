function caculator() {


    let peso = document.getElementById('Peso').value;
    let altura = document.getElementById('Altura').value;

    if (altura == "" || peso == "") {
        // faca nada
        // alert("oi")
    }
    else {
        if (altura >= 300 || peso>700) {
            alert("Ops! Altura ou peso digitado errado. observe unidades de medidas recomendadas.");
            // erro > 300
        }
        else {

            if (altura >= 3 & altura < 10 || altura >= 30 & altura < 100) {
                alert("erro na altura: tamanho da pessoa é grande demais");
                // erro > 2.9m
            }
            else if (altura < 0.5) {
                alert("erro na altura: tamanho da pessoa é pequeno demais");
                // erro < 0.5m
            }
            else {

                if (altura < 3 && altura > 0) {
                    // NAO ajeita ,
                }
                else if (altura >= 3 && altura <= 30) {
                    altura = altura / 10;
                    alert("Aviso! Transformei a altura em m (÷10).\n(Enter, feixar aviso)");
                }
                else if (altura > 30 && altura < 300) {
                    altura = altura / 100;

                    alert("Aviso! Transformei a altura em m (÷100).\n(Enter, feixar aviso)");
                }

                let imc = Number(peso) / (Number(altura) * Number(altura));
                imc = (imc).toFixed(1);
                document.getElementById('show').innerText = "Seu IMC:" + imc;

                // if (imc < 18.5) {

                //     // alert("Abaixo do peso");
                // }
                // else if (imc >= 18 & imc < 24.9) {

                //     // alert("Peso normal");
                // }
                // else if (imc >= 25 & imc < 29.9) {
                //     // alert("Sobrepeso");
                // }
                // else if (imc >= 30 & imc < 34.9) {
                //     // alert("Obesidade I")
                // }
                // else if (imc >= 35 & imc < 39.9) {
                //     // alert("Obesidade II")
                // }
                // else if (imc >= 40) {
                //     // alert("Obesidade III")
                // }
            }
        }
    }
}