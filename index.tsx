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
    public stateRef: {current: T}

    constructor(config: iPluginConfig, state: T) {
        this.name = config.name
        this.version = config.version
        this.exposes = config.exposes
        this.stateRef = {current: state}
        this.saveState = this.saveState.bind(this)
        this.loadState = this.loadState.bind(this)
        this.init = this.init.bind(this)
        this.render = this.render.bind(this)
    }

    public async init() {
        console.log(`Initialize plugin: ${this.name}`)
    }

    public saveState(): T {
        return this.stateRef.current
    }

    public loadState(pluginState: T) {

    }

    public render(): React.JSX.Element {
        const App: React.FC = () => {
            return (<div>Hello from {this.name} plugin</div>)
        }

        return <App/>
    }
}