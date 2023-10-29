import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('glasses')
    },
    show (glassId) {
        return Api().get('glass/' + glassId)
    },
    post (glass) {
        return Api().post('glass/', glass)
    },
    put (glass) {
        return Api().put('glass/' + glass.id, glass)
    },
    delete (glass) {
        return Api().delete('glass/' + glass.id, glass)
    },
}