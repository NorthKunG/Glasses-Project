import Vue from 'vue'
import Router from 'vue-router'

//glasses
import GlassIndex from '@/components/Glasses/Index'
import GlassCreate from '@/components/Glasses/CreateGlass'
import GlassEdit from '@/components/Glasses/EditGlass'
import GlassShow from '@/components/Glasses/ShowGlass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/glasses',
      name: 'glasses',
      component: GlassIndex
    },
    {
      path: '/glass/create',
      name: 'glass-create',
      component: GlassCreate
    },
    {
      path: '/glass/edit/:glassId',
      name: 'glass-edit',
      component: GlassEdit
    },
    {
      path: '/glass/:glassId',
      name: 'glass',
      component: GlassShow
    }
  ]
})
