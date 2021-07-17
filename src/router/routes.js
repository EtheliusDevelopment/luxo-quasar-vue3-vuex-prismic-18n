
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'luxury-travel', component: () => import('pages/LuxuryTravel.vue') },
      { path: 'wine-club', component: () => import('pages/WineClub.vue') },
      { path: 'testimonials', component: () => import('pages/Testimonials.vue') },
      { path: 'quiz', component: () => import('pages/Quiz.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') },
      { path: 'contact-us', component: () => import('pages/Contacts.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
