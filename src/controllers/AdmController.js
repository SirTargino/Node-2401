import { Adm } from "../model/AdmModel.js"

let adms = []

export function insertAdm(name, email, password, store){
    const newAdm = new Adm(name, email, password, store);
    adms.push(newAdm);
    return newAdm;
}

export function getAllAdm(){
   return adms;
}

export function getAdmByEmail(email){
    const adm = adms.find(data => data.email === email);
    return adm;
}