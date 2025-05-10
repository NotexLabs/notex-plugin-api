import * as React from "react";

export interface iPluginConfig {
    name: string,
    version: string,
    exposes: string[]
}
export class Plugin {
    protected name: string
    protected version: string
    protected exposes: string[]

    constructor(config: iPluginConfig) {
        this.name = config.name
        this.version = config.version
        this.exposes = config.exposes
    }

    public async init() {
        console.log(`Initialize plugin: ${this.name}`)
    }

    public async saveState() {

    }

    public async loadState(pluginState: Object) {

    }

    public async render(): Promise<React.JSX.Element> {
        const App: React.FC = () => {
            return (<div>Hello from {this.name} plugin</div>)
        }

        return <App/>
    }
}