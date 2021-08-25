import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index'
import home from '@/views/home/index'
import about from '@/views/about/index'
import aboutSpace from '@/views/about/aboutSpace'
import academicCommittee from '@/views/about/academicCommittee'
import aiiiiiVision from '@/views/about/aiiiiiVision'
import manifesto from '@/views/manifesto/index'
import exhibition from '@/views/exhibition/index'
import entanledOthers from '@/views/exhibition/entanledOthers'
import sofiaCrespo from '@/views/exhibition/sofiaCrespo'
import jakeElwes from '@/views/exhibition/jakeElwes'
import artistStudio from '@/views/artistStudio/index'
import artist from '@/views/artistStudio/artist'
import residentPlan from '@/views/artistStudio/residentPlan'
import academicResearch from '@/views/academicResearch/index'
import innovation from '@/views/academicResearch/innovation'
import conference from '@/views/academicResearch/conference'
import events from '@/views/events/index'
import workshop from '@/views/events/workshop'
import lecture from '@/views/events/lecture'
import film from '@/views/events/film'
import gallery from '@/views/gallery/index'
import zeroTwoOne from '@/views/gallery/zeroTwoOne'
import certainMeasures from '@/views/gallery/certainMeasures'
import visitPlan from '@/views/visitPlan/index'
import tickketAddress from '@/views/visitPlan/tickketAddress'
import openingHours from '@/views/visitPlan/openingHours'
import contact from '@/views/visitPlan/contact'
import subscribe from '@/views/subscribe/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // name: 'Home',
        component: layout,
        children: [{
            path: '',
            redirect: 'home'
        }, {
            path: 'home',
            name: 'home',
            component: home
        }, {
            path: 'about',
            name: 'about',
            component: about,
            children: [{
                path: 'aboutSpace',
                name: 'aboutSpace',
                component: aboutSpace
            }, {
                path: 'aiiiiiVision',
                name: 'aiiiiiVision',
                component: aiiiiiVision
            }, {
                path: 'academicCommittee',
                name: 'academicCommittee',
                component: academicCommittee
            }]
        }, {
            path: 'manifesto',
            name: 'manifesto',
            component: manifesto
        }, {
            path: 'exhibition',
            name: 'exhibition',
            component: exhibition,
            children: [{
                path: 'entanledOthers',
                name: 'entanledOthers',
                component: entanledOthers
            }, {
                path: 'sofiaCrespo',
                name: 'sofiaCrespo',
                component: sofiaCrespo
            }, {
                path: 'jakeElwes',
                name: 'jakeElwes',
                component: jakeElwes
            }]
        }, {
            path: 'artistStudio',
            name: 'artistStudio',
            component: artistStudio,
            children: [{
                path: 'artist',
                name: 'artist',
                component: artist
            }, {
                path: 'residentPlan',
                name: 'residentPlan',
                component: residentPlan
            }]
        }, {
            path: 'academicResearch',
            name: 'academicResearch',
            component: academicResearch,
            children: [{
                path: 'innovation',
                name: 'innovation',
                component: innovation
            }, {
                path: 'conference',
                name: 'conference',
                component: conference
            }]
        }, {
            path: 'events',
            name: 'events',
            component: events,
            children: [{
                path: 'workshop',
                name: 'workshop',
                component: workshop
            }, {
                path: 'lecture',
                name: 'lecture',
                component: lecture
            }, {
                path: 'film',
                name: 'film',
                component: film
            }]
        }, {
            path: 'gallery',
            name: 'gallery',
            component: gallery,
            children: [{
                path: 'zeroTwoOne',
                name: 'zeroTwoOne',
                component: zeroTwoOne
            }, {
                path: 'certainMeasures',
                name: 'certainMeasures',
                component: certainMeasures

            }]
        }, {
            path: 'visitPlan',
            name: 'visitPlan',
            component: visitPlan,
            children: [{
                path: 'tickketAddress',
                name: 'tickketAddress',
                component: tickketAddress
            }, {
                path: 'openingHours',
                name: 'openingHours',
                component: openingHours
            }, {
                path: 'contact',
                name: 'contact',
                component: contact
            }]
        }, {
            path: 'subscribe',
            name: 'subscribe',
            component: subscribe
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router
