// ----Máscara de entrada----
//.....Telefone.....
document.getElementById('telefone').addEventListener('input', function (e) {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 15) v = v.slice(0, 11);

    if (v.length > 6) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7, 11)}`;
    } else if (v.length > 2) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 6)}`;
    } else {
        e.target.value = `(${v}`;
    }
    //.....CPF.....
    document.getElementById('cpf').addEventListener('input', function (e) {
        let v = e.target.value.replace(/\D/g, "");

        if (v.length > 11) v = v.slice(0, 11);

        if (v.length > 9) {
            e.target.value = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9, 11)}`;
        } else if (v.length > 6) {
            e.target.value = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}`;
        } else if (v.length > 3) {
            e.target.value = `${v.slice(0, 3)}.${v.slice(3, 6)}`;
        } else {
            e.target.value = v;
        }
    });
});
// ------ Valor em dinheiro------
function formatarMoeda(input) {
    let valor = input.value.replace(/\D/g, '').replace(/(\d)(\d{2})$/, '$1,$2');
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    input.value = `R$ ${valor}`;
}
// ------ Calcular o juros -------
function calcularinvestimento() {

    const nome = document.getElementById("Nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const prazo = parseInt(document.getElementById("meses").value);

    //.....Remoção da máscara de entrada.....
    const valorTexto = document.getElementById("valor").value;

    const investimentoinicial = parseFloat(
        valorTexto
            .replace(/[R$\s]/g, "") // **remove R$ e espaços
            .replace(/\./g, "")     // **remove pontos de milhar
            .replace(",", ".")      // **vírgula -> ponto
    );
// .....Requerimento.....
    if (!nome || !telefone || !email || !cpf || isNaN(investimentoinicial) || prazo <= 0) {
        return alert("Preencha todos os campos corretamente!");
    }

    // ..... Cálculo.....
    const montante = investimentoinicial * (1 + 0.02) ** prazo;
    const ganho = montante - investimentoinicial;

    alert(`
Nome: ${nome}
Telefone: ${telefone}
Email: ${email}
CPF: ${cpf}
Prazo: ${prazo} meses
Investimento: R$ ${investimentoinicial.toFixed(2)}
Montante Final: R$ ${montante.toFixed(2)}
Ganho: R$ ${ganho.toFixed(2)}
`);
}



