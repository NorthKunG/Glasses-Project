<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container">
                    <h1 class="navbar-brand text-light fw-bold">G l a s s e s</h1>
                </div>
            </nav>
        </header>
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <form v-on:submit.prevent="editGlass" class="my-5" style="background: #FAD7A0; width: 70rem;">
                    <div class="my-3 fw-bold" style="color: #7E5109">
                        <h1>Edit Glass</h1>
                        <hr>
                    </div>
                    <div class="text-start p-3">
                        <div class="row">
                            <div class="col-8 mb-3">
                                <label for="product" class="form-label" style="color: #7E5109;">ชื่อสินค้า</label>
                                <input type="text" class="form-control" v-model="glass.product"
                                    style="background: #FDEBD0;">
                            </div>
                            <div class="col mb-3">
                                <label for="brand" class="form-label" style="color: #7E5109;">ยี่ห้อ</label>
                                <input type="text" class="form-control" v-model="glass.brand" style="background: #FDEBD0;">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2 mb-3">
                                <label for="price" class="form-label" style="color: #7E5109;">ราคา</label>
                                <input type="text" class="form-control" v-model="glass.price" style="background: #FDEBD0;">
                            </div>
                            <div class="col-2 mb-3">
                                <label for="weight" class="form-label" style="color: #7E5109;">น้ำหนัก</label>
                                <input type="number" class="form-control" v-model="glass.weight"
                                    style="background: #FDEBD0;">
                            </div>
                            <div class="col mb-3">
                                <label for="size" class="form-label" style="color: #7E5109;">ขนาด</label>
                                <input type="text" class="form-control" v-model="glass.size" style="background: #FDEBD0;">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="lens-width" class="form-label" style="color: #7E5109;">ความกว้างเลนส์</label>
                                <input type="number" class="form-control" v-model="glass.lens_width"
                                    style="background: #FDEBD0;">
                            </div>
                            <div class="col mb-3">
                                <label for="frame-type" class="form-label" style="color: #7E5109;">ประเภทกรอบแว่น</label>
                                <input type="text" class="form-control" v-model="glass.frame_type"
                                    style="background: #FDEBD0;">
                            </div>
                            <div class="col mb-3">
                                <label for="frame-color" class="form-label" style="color: #7E5109;">สีกรอบแว่น</label>
                                <input type="text" class="form-control" v-model="glass.frame_color"
                                    style="background: #FDEBD0;">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="material" class="form-label" style="color: #7E5109;">วัสดุ</label>
                                <input type="text" class="form-control" v-model="glass.material"
                                    style="background: #FDEBD0;">
                            </div>
                            <div class="col mb-3">
                                <label for="frame-shape" class="form-label" style="color: #7E5109;">รูปทรงกรอบแว่น</label>
                                <input type="text" class="form-control" v-model="glass.frame_shape"
                                    style="background: #FDEBD0;">
                            </div>
                            <div class="col mb-3">
                                <label for="warranty" class="form-label" style="color: #7E5109;">การรับประกัน</label>
                                <input type="number" class="form-control" v-model="glass.warranty"
                                    style="background: #FDEBD0;">
                            </div>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary me-2">Edit Glass</button>
                            <a @click="$router.back()" class="btn btn-danger">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
import GlassesService from '@/services/GlassesService'

export default {
    data() {
        return {
            glass: {
                product: '',
                brand: '',
                price: '',
                weight: '',
                size: '',
                lens_width: '',
                frame_type: '',
                frame_color: '',
                material: '',
                frame_shape: '',
                warranty: ''
            }
        }
    },
    methods: {
        async editGlass() {
            try {
                await GlassesService.put(this.glass)
                this.$router.push({
                    name: 'glasses'
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    async created() {
        try {
            let glassId = this.$route.params.glassId
            this.glass = (await GlassesService.show(glassId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>