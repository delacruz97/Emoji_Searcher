import emojiList from "./emojiList.json";
//esta funcion me permite obtener mis resultados

//El parametro VALUE,  es el nombre del emojin que queremos buscar
export const SearchEmoji = (value) => {
  //AQUI utilizo "toLowerCase" para convertir mi valor => "value" a minuscula para hacer la busqueda y para que no falle al buscar
  const lowerValue = value.toLowerCase();
  const response = [];
  emojiList.map((item) => {
    //aqui pregunto si el "keywords" de cada objeto, incluye el "value"
    if (item.keywords.includes(lowerValue)) {
      //aqui agrego al nuevo arreglo todos los datos que coincidan o tengan alguna coincidencia con sus keywords.
      response.push(item);
    }
  });
  //AQUI lo que hago es definir una condicion, la cual me dice que si mi busqueda es vasio, me devuelve todo mi array, sino, si no esta vasio, me cortar mi array para que me devuelva unicamente 24 elementos
  return value === "" ? response : response.slice(0, 24);
};
