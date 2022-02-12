function desenharTracosAposSortear() {
    lapis.clearRect(0,0,295,525);
    ilustracaoCaderno();
    baseDaForca();
    sorteia();
    
    var cont;

    x1mt = 50;
    x2lt = 80;
    y = 305;
    cont = 0;
    while (cont <= selecionado.length-1 && cont <= 4) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }

    x1mt = 50;
    x2lt = 80;
    y = 355;
    cont = 5;
    while (cont <= selecionado.length-1 && cont <= 9) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }

    x1mt = 50;
    x2lt = 80;
    y = 405;
    cont = 10;
    while (cont <= selecionado.length-1 && cont <= 14) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }

    x1mt = 50;
    x2lt = 80;
    y = 455;
    cont = 15;
    while (cont <= selecionado.length-1 && cont <= 19) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }

    x1mt = 50;
    x2lt = 80;
    y = 505;
    cont = 20;
    while (cont <= selecionado.length-1 && cont <= 24) {
        if (selecionado[cont].includes(" ")) {
            x1mt = x1mt + 45;
            x2lt = x2lt + 45;
            guardaLetraYes.push("*");
            cont++;
        }
        else {
        lapis.beginPath();
        lapis.strokeStyle = 'black';
        lapis.moveTo(x1mt, y);
        lapis.lineTo(x2lt, y);
        lapis.lineWidth = 3;
        lapis.stroke();
        x1mt = x1mt + 45;
        x2lt = x2lt + 45;
        cont++;
        }
    }
}