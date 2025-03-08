
export interface iPluginConfig {
    name: string,
    version: string,
    exposes: string[]
}
export abstract class Plugin {
    protected name: string
    protected version: string
    protected exposes: string[]

    protected constructor(config: iPluginConfig) {
        this.name = config.name
        this.version = config.version
        this.exposes = config.exposes
    }

    public async init() {
        console.log(`Initialize plugin: ${this.name}`)
    }

    public async render() {
        return (<div>Hello from {this.name} plugin</div>)
    }
}