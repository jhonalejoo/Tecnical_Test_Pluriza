import { baseURL } from "../../utils/env";


export async function getCriptos() {
    return fetch(baseURL).then(res => res.json())
    .then(json => {
        if(json.length >0)
            return json
        throw[]
    })
    .catch(err => {
        throw err
    })
};