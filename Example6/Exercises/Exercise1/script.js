anadirAmigo = (callback) => {
    setTimeout(() => {
            console.log("Se ha enviado soluicitud");
            callback();
        },2000
    )
}

Llegasolicitud = (callback) => {
    setTimeout(() => {
            console.log("Te ha llegado una solicitud");
            callback();
        },2000
    )
}

aceptarSolicitud = (callback) => {
    setTimeout(() => {
            console.log("Has aceptado la solicitud");
            callback();
        },2000
    )
}

notificacionAcaptada = (callback) => {
    setTimeout(() => {
            console.log("Tu solicitud a sido aceptada");
            callback();
        },2000
    )
}

chatear = (callback) => {
    setTimeout(() => {
            console.log("bla, bla, bla");
            callback();
        },2000
    )
}

publicarFoto = (callback) => {
    setTimeout(() => {
            console.log("Tu amigo a publicado una foto");
            callback();
        },2000
    )
}

comentarioAmigo = (callback) => {
    setTimeout(() => {
            console.log("Tu amigo te a comentado");
            callback();
        },2000
    )
}

cerrarSesion = () => {
    console.log("Has cerrado sesion");
}

anadirAmigo(() => {
    Llegasolicitud(() => {
        aceptarSolicitud(() => {
            notificacionAcaptada(() => {
                chatear(() => {
                    publicarFoto(() => {
                        comentarioAmigo(() => {
                            cerrarSesion()
                        })
                    })
                })
            })
        })
    })
})