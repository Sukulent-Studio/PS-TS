import type { RequestTypes } from "./RequestTypes.js";

export class RequestBuilder {
    reqType: RequestTypes
    url: string
    headers: Record<string, string> = {}
    body: Record<string, string> = {}

    setRequestType(type: RequestTypes) {
        this.reqType = type
        return this
    }

    setUrl(url: string) {
        this.url = url
        return this
    }

    setHeaders(headers: Map<string, string>) {
        headers.forEach((val, key) => {
            this.headers[key] = val
        })
        return this
    }

    setBody(body: Map<string, string>) {
        body.forEach((val, key) => {
            this.body[key] = val
        })
        return this
    }

    async exec() {
        return await fetch(this.url, {method: this.reqType, headers: this.headers, body: JSON.stringify(this.body)})
    }

}