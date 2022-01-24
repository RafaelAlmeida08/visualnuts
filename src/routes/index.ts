import { Router } from "express";
import { printNumbersFactory } from "../modules/exercise1/PrintNumbersFactory";
import { totalCountriesFactory } from "../modules/exercise2/part1/TotalCountriesFactory";
import { countryGermanFactory } from "../modules/exercise2/part2/CountryGermanFactory";
import { totalLanguagesFactory } from "../modules/exercise2/part3/TotalLanguagesFactory";
import { countryHighestLanguagesFactory } from "../modules/exercise2/part4/CountryHighestLanguagesFactory";
import { commonLanguageFactory } from "../modules/exercise2/part5/CommonLanguageFactory";

import SwaggerUi from 'swagger-ui-express';
import swaggerDocs from '../docs/swagger.json';


const routes = Router();

routes.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs))

routes.post("/exercise1", (request, response) => printNumbersFactory().handle(request, response));
routes.get("/exercise2/1", (request, response) => totalCountriesFactory().handle(request, response));
routes.get("/exercise2/2", (request, response) => countryGermanFactory().handle(request, response));
routes.get("/exercise2/3", (request, response) => totalLanguagesFactory().handle(request, response));
routes.get("/exercise2/4", (request, response) => countryHighestLanguagesFactory().handle(request, response));
routes.get("/exercise2/5", (request, response) => commonLanguageFactory().handle(request, response));


export { routes };