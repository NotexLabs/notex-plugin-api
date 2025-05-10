import * as React from "react";

export interface iPluginConfig {
    name: string,
    version: string,
    exposes: string[]
}
export class Plugin<T> {
    protected name: string
    protected version: string
    protected exposes: string[]

    constructor(config: iPluginConfig) {
        this.name = config.name
        this.version = config.version
        this.exposes = config.exposes
    }

    public state: T | null = null

    public async init() {
        console.log(`Initialize plugin: ${this.name}`)
    }

    public async saveState(): Promise<string> {
        return ""
    }

    public async loadState(pluginState: T) {

    }

    public async render(): Promise<React.JSX.Element> {
        const App: React.FC = () => {
            return (<div>Hello from {this.name} plugin</div>)
        }

        return <App/>
    }
}