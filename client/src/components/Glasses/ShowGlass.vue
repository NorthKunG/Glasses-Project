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
                <div class="my-5" style="background: #FAD7A0; width: 70rem;">
                    <div class="my-3 fw-bold" style="color: #7E5109">
                        <h1>Show Glass</h1>
                        <hr>
                    </div>
                    <div class="text-start p-3">
                        <div class="row">
                            <div class="col-8 mb-3">
                                <label for="product" class="form-label" style="color: #7E5109;">ชื่อสินค้า</label>
                                <span class="form-control" style=" background: #FDEBD0;">{{ glass.product }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="brand" class="form-label" style="color: #7E5109;">ยี่ห้อ</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.brand }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2 mb-3">
                                <label for="price" class="form-label" style="color: #7E5109;">ราคา</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.price }}</span>
                            </div>
                            <div class="col-2 mb-3">
                                <label for="weight" class="form-label" style="color: #7E5109;">น้ำหนัก</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.weight }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="size" class="form-label" style="color: #7E5109;">ขนาด</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.size }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="lens-width" class="form-label" style="color: #7E5109;">ความกว้างเลนส์</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.lens_width }} มม.</span>
                            </div>
                            <div class="col mb-3">
                                <label for="frame-type" class="form-label" style="color: #7E5109;">ประเภทกรอบแว่น</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.frame_type }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="frame-color" class="form-label" style="color: #7E5109;">สีกรอบแว่น</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.frame_color }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label for="material" class="form-label" style="color: #7E5109;">วัสดุ</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.material }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="frame-shape" class="form-label" style="color: #7E5109;">รูปทรงกรอบแว่น</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.frame_shape }}</span>
                            </div>
                            <div class="col mb-3">
                                <label for="warranty" class="form-label" style="color: #7E5109;">การรับประกัน</label>
                                <span class="form-control" style="background: #FDEBD0;">{{ glass.warranty }} ปี</span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <a @click="$router.back()" class="btn btn-danger">Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GlassesService from '@/services/GlassesService';

export default {
    data() {
        return {
            glass: null
        }
    },
    async created() {
        try {
            let glassId = this.$route.params.glassId
            this.glass = (await GlassesService.show(glassId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>