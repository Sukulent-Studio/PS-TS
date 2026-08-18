import type { RequestTypes } from "./RequestTypes.js";

interface IRequest {
    reqType: RequestTypes
    url: string
    headers: Record<string, string>
    body: Record<string, unknown>
}

class RequestBuilder {
    reqType: RequestTypes
    url: string
    headers: Record<string, string>
    body: Record<string, unknown>

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

    setBody(body: Map<string, unknown>) {
        body.forEach((val, key) => {
            this.body[key] = val
        })
        return this
    }

    exec(): IRequest {
        return {
            reqType: this.reqType,
            url: this.url,
            body: this.body,
            headers: this.headers
        }
    }

}