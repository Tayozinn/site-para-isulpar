import { ProjetoModel } from "./models/ProjetoModel.js?v=86f6e045";
import { ProjetoView } from "./views/ProjetoView.js";
import { ProjetoController } from "./controllers/ProjetoController.js";

// Inicializa a arquitetura MVC assim que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  const app = new ProjetoController(new ProjetoModel(), new ProjetoView());
  app.inicializar();
});
