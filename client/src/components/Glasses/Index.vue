<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container">
                    <h1 class="navbar-brand text-light fw-bold">G l a s s e s</h1>
                </div>
            </nav>
        </header>
        <div class="container">
            <h3 class="my-3 fw-bold text-secondary">จำนวนแว่นตา {{ glasses.length }}</h3>
            <button class="btn btn-warning my-3 fw-bold" v-on:click="navigateTo('/glass/create/')">สร้างแว่นตา</button>
            <div class="row row-cols-2 d-flex justify-content-center fw-bold my-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="row">ID</th>
                            <th scope="row">ชื่อสินค้า</th>
                            <th scope="row">ยี่ห้อ</th>
                            <th scope="row">ราคา</th>
                            <th scope="row"></th>
                        </tr>
                    </thead>
                    <tbody v-for="glass in glasses" v-bind:key="glass.id">
                        <tr>
                            <td>{{ glass.id }}</td>
                            <td>{{ glass.product }}</td>
                            <td>{{ glass.brand }}</td>
                            <td>฿{{ glass.price }}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="navigateTo('/glass/' + glass.id)">อ่าน</button>
                                <button class="btn btn-success"
                                    v-on:click="navigateTo('/glass/edit/' + glass.id)">แก้ไข</button>
                                <button class="btn btn-danger" v-on:click="deleteGlass(glass)">ลบ</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import GlassesService from '@/services/GlassesService';
export default {
    data() {
        return {
            glasses: []
        }
    },
    async created() {
        this.glasses = (await GlassesService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteGlass(glass) {
            let result = confirm("What to delete?")
            if (result) {
                try {
                    await GlassesService.delete(glass)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.glasses = (await GlassesService.index()).data
        }
    }
}
</script>
<style scoped></style>