export class App{
    constructor () {
        this.message = "I'm thirsty.";
    }

    configureRouter(config, router) {
        config.map([
            { route: "beverages", name: "beverages", moduleId: "beverages", nav: true }
        ]);
    }
}