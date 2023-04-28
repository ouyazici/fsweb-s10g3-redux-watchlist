export const LISTEYE_EKLE = "listeme_ekle";
export const LISTEDEN_CIKAR = "listeden_cikar";

export function listeye_ekle(item) {
  return { type: LISTEYE_EKLE, payload: item };
}

export const listeden_cikar = (id) => {
  return {
    type: LISTEDEN_CIKAR,
    payload: id,
  };
};
//
