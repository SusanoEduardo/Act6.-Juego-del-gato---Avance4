function app() {
                                                //llamar Canvas
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", 500);
    canvas.setAttribute("height", 500);
    canvas.style.border = "solid 2px black"
    canvas.style.background = "red"
    var context = canvas.getContext("2d");
    const gato =
    {
        estados: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        turnoJugador: 0,
        validarMovimiento: false,
        casilla: 0,
        ganador: 0,
        ganadosGato: 0,
        ganadosRaton: 0,
        img: new Image(),
        imgAvatarGato: new Image(),
        imgAvatarRaton: new Image(),

        regilla: function () {
            var rejaA = 100;
            context.strokeStyle = "black";

            for (var n = 0; n < 4; n++) {
                context.setLineDash([4, 14]);
                context.moveTo(0, rejaA);
                context.lineTo(500, rejaA);
                context.stroke();
                context.moveTo(rejaA, 0);
                context.lineTo(rejaA, 500);
                context.stroke();
                rejaA += 100;
            }
        },
        escenario: function () {
            var gatoA = 200;

            for (a = 0; a < 2; a++) {
                context.setLineDash([]);
                context.beginPath();
                context.strokeStyle = "#000";
                context.lineWidth = 3;
                context.moveTo(400, gatoA);
                context.lineTo(100, gatoA);
                context.stroke();
                context.moveTo(gatoA, 100);
                context.lineTo(gatoA, 400);
                context.stroke();
                gatoA += 100;
            }
        },

        seleccionar: function (e) {
            gato.casilla = 0;
            var x = e.offsetX;
            var y = e.offsetY;
            var coordenadas = document.getElementById("coordenadas");
            coordenadas.innerHTML = "coordenadas:  X: " + x + " Y: " + y;
            
            let impImg = (x, y) => {
                context.drawImage(gato.img, x, y, 95, 95);
            };

            let elimImg = (x, y) => {
                context.clearRect(x, y, 95, 95);
            };

            if (x > 100 & x < 200 & y > 100 & y < 200 & gato.estados[0][0] == 0) {
                impImg(102, 102);
                gato.casilla = 0;
            }
            else if (gato.estados[0][0] == 0) {
                elimImg(102, 102);
            };

            if (x > 200 & x < 300 & y > 100 & y < 200 & gato.estados[0][1] == 0) {
                impImg(202, 102);
                gato.casilla = 1;
            }
            else if (gato.estados[0][1] == 0) {
                elimImg(202, 102);
            };

            if (x > 300 & x < 400 & y > 100 & y < 200 & gato.estados[0][2] == 0) {
                impImg(302, 102);
                gato.casilla = 2;
            }
            else if (gato.estados[0][2] == 0) {
                elimImg(302, 102);
            };

            if (x > 100 & x < 200 & y > 200 & y < 300 & gato.estados[1][0] == 0) {
                impImg(102, 202);
                gato.casilla = 3;
            }
            else if (gato.estados[1][0] == 0) {
                elimImg(102, 202);
            };

            if (x > 200 & x < 300 & y > 200 & y < 300 & gato.estados[1][1] == 0) {
                impImg(202, 202);
                gato.casilla = 4;
            }
            else if (gato.estados[1][1] == 0) {
                elimImg(202, 202);
            };

            if (x > 300 & x < 400 & y > 200 & y < 300 & gato.estados[1][2] == 0) {
                impImg(302, 202);
                gato.casilla = 5
            }
            else if (gato.estados[1][2] == 0) {
                elimImg(302, 202);
            };

            if (x > 100 & x < 200 & y > 300 & y < 400 & gato.estados[2][0] == 0) {
                impImg(102, 302);
                gato.casilla = 6;
            }
            else if (gato.estados[2][0] == 0) {
                elimImg(102, 302);
            };

            if (x > 200 & x < 300 & y > 300 & y < 400 & gato.estados[2][1] == 0) {
                impImg(202, 302);
                gato.casilla = 7;
            }
            else if (gato.estados[2][1] == 0) {
                elimImg(202, 302);
            };

            if (x > 300 & x < 400 & y > 300 & y < 400 & gato.estados[2][2] == 0) {
                gato.casilla = 8;
                impImg(302, 302);
            }
            else if (gato.estados[2][2] == 0) {
                elimImg(302, 302);
            };
            if (x > 100 & x < 400 & y > 100 & y < 400) {
                this.validarMovimiento = true;
            }
            else {
                this.validarMovimiento = false;
            };

            

        },

        activarEstados: function () {
            if (this.validarMovimiento) {
                switch (gato.casilla) {
                    case 0:
                        gato.turnoJugador == 0 ? gato.estados[0][0] = 1 : gato.estados[0][0] = 2;
                        break;
                    case 1:
                        gato.turnoJugador == 0 ? gato.estados[0][1] = 1 : gato.estados[0][1] = 2;
                        break;
                    case 2:
                        gato.turnoJugador == 0 ? gato.estados[0][2] = 1 : gato.estados[0][2] = 2;
                        break;
                    case 3:
                        gato.turnoJugador == 0 ? gato.estados[1][0] = 1 : gato.estados[1][0] = 2;
                        break;
                    case 4:
                        gato.turnoJugador == 0 ? gato.estados[1][1] = 1 : gato.estados[1][1] = 2;
                        break;
                    case 5:
                        gato.turnoJugador == 0 ? gato.estados[1][2] = 1 : gato.estados[1][2] = 2;
                        break;
                    case 6:
                        gato.turnoJugador == 0 ? gato.estados[2][0] = 1 : gato.estados[2][0] = 2;
                        break;
                    case 7:
                        gato.turnoJugador == 0 ? gato.estados[2][1] = 1 : gato.estados[2][1] = 2;
                        break;
                    case 8:
                        gato.turnoJugador == 0 ? gato.estados[2][2] = 1 : gato.estados[2][2] = 2;
                        break;
                    case 9:
                        gato.limpiar();
                        break;
                }                
                

                if (gato.turnoJugador == 0) {
                    gato.img.src = "./raton.png";
                    gato.turnoJugador = 1;
                }
                else {
                    gato.img.src = "./gato.png";
                    gato.turnoJugador = 0;
                }
                
            }
        },

        tarjetaDatos: function () {         
        },
       
        play: function (pintarRegilla) {
            if (pintarRegilla)
            this.regilla();
            this.escenario();
            this.tarjetaDatos();
            this.img.src = "./gato.png";
            canvas.addEventListener("mousedown", gato.activarEstados, false);
        }
    }
    canvas.addEventListener("mousemove", gato.seleccionar);
    gato.play(true);
}

window.onload = function () {
    app();
}