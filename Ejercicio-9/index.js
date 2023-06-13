const mensaje = valor => {
    if (typeof valor === "string") {
        return valor;
    }
    throw new Error("Solo cadenas para el mensaje");
}



const logger = require("./logger")

try {
    mensaje("Holaaa");
    logger.info("Se ejecuto de manera correcta");
} catch (e) {
    logger.log("error", e.toString());
}