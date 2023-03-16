import { handleStatus, logError } from "../utils/promise-helpers.js"
import { partialize, pipe } from "../utils/operators.js"

const API = "http://localhost:3000/notas"

const getItemsFromNotas = notas => notas.$flatMap((nota) => nota?.itens)

const filterItemsByCode = (code, itens) => itens.filter((item) => item?.codigo == code)

const sumItemsValues = items => items.reduce((total, item) => total + item?.valor, 0)

export const notasService = {
    listAll() {
        return fetch(API)
            .then(handleStatus)
            .catch(err => {
                logError(err)
                return Promise.reject('Não foi possível obter as notas fiscais.')
            })
    },
    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code)
        const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValues)
        return this.listAll()
        .then(sumItems)
    }
} 