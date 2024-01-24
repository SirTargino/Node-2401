import express from "express";
import { Adm } from "../model/AdmModel.js";
import { insertAdm, getAllAdm, getAdmByEmail} from "../controllers/AdmController.js";
const admRoute = express.Router();

let adms = [];

admRoute.post("/adm", (req,res)=> {
  const { name, email, password, store } = req.body;
    const newAdm = insertAdm(name, email, password, store);
    res.json({newAdm});
})

admRoute.get("/adm", (req,res)=> {
  const listAdm = getAllAdm();
  res.json({adms});
});

admRoute.get("/adm-find", (req,res)=> {
  const { email } = req.body;
  const adms = getAdmByEmail(email);
  res.json({adms});
});


export { admRoute } 