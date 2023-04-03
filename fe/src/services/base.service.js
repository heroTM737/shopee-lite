import http from "@/services/services.js";

class BaseService {
    name = ""

    constructor(name) {
        this.name = name
    }

    search(filter = null) {
        return http.get(`/api/collections/${this.name}/records`, {params: filter})
    }

    read(id) {
        return http.get(`/api/collections/${this.name}/records/${id}`)
    }

    create(data) {
        return http.get(`/api/collections/${this.name}/records`, data)
    }

    update(id) {
        return http.patch(`/api/collections/${this.name}/records/${id}`)
    }

    delete(id) {
        return http.delete(`/api/collections/${this.name}/records/${id}`)
    }
}

export default BaseService