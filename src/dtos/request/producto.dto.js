import validator from "validator";

export function productoDto({ nombre, precio, tipo, estado }) {
  // nombre no puede esta vacio
  // precio no puede ser negativo
  // tipo puede ser "ABARROTES", "HIGIENE PERSONAL", "OTROS" (no usar validator)
  // estado es opcional pero si me lo pasa tiene que ser un boolean

  if (validator.isEmpty(nombre)){
      throw Error("no puede ser vacio")
  }

  

  if (!validator.isDecimal(precio.toString()) && +precio < 0) {
    throw Error("El precio no puede ser negativo");
  }

   // tipo puede ser "ABARROTES", "HIGIENE PERSONAL", "OTROS" (no usar validator)
   if (tipo !== "ABARROTES" && tipo !== "HIGIENE PERSONAL" && tipo !== "OTROS") {
    throw Error('el tipo debe ser "ABARROTES", "HIGIENE PERSONAL", "OTROS"');
  }

  if (estado && !validator.isBoolean(estado)){
    throw Error("EL ESTADO TIENE QUE SER TRUE O FALSE ")
  }



  return {nombre, precio, tipo, estado}

}

