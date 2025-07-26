// 'use client'
//
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react'
//
// const plans = [
//   {
//     name: 'Starter',
//     icon: Zap,
//     price: '$2,997',
//     period: 'one-time',
//     description: 'Perfect for small Organizations ready to make  moves',
//     features: [
//       'Strategic Planning Session (2 hours)',
//       'Organization Assessment Report',
//       'Growth Roadmap (90 days)',
//       'Implementation Guide',
//       'Email Support (30 days)',
//       'Resource Library Access'
//     ],
//   },
//   {
//     name: 'Growth',
//     icon: Rocket,
//     price: '$7,997',
//     period: 'monthly',
//     description: 'For Organizations serious about transformation',
//     features: [
//       'Everything in Starter',
//       'Monthly Strategy Sessions (4 hours)',
//       'Custom Implementation Plan',
//       'Team Training & Workshops',
//       'Performance Tracking Dashboard',
//       'Priority Support (48h response)',
//       'Quarterly Organization Reviews',
//       'Access to Strategy Network'
//     ],
//     popular: true,
//     cta: 'Start Transformation',
//     color: 'from-orange-500 to-red-600'
//   },
//   {
//     name: 'Enterprise',
//     icon: Crown,
//     price: 'Custom',
//     period: 'tailored',
//     description: 'For organizations demanding  results at scale',
//     features: [
//       'Everything in Growth',
//       'Dedicated Strategy Team',
//       'Weekly Check-ins & Support',
//       'Custom Technology Integration',
//       'Leadership Coaching Program',
//       'Industry-Specific Solutions',
//       '24/7 Priority Support',
//       'Annual Strategy Retreats'
//     ],
//     popular: false,
//     cta: 'Contact Sales',
//     color: 'from-purple-600 to-pink-600'
//   }
// ]
//
// export function PricingSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })
//
//   const [billingCycle, setBillingCycle] = useState('monthly')
//
//   const handleGetStarted = (planName: string) => {
//     // This would integrate with Stripe or your payment processor
//     console.log(`Starting ${planName} plan`)
//     // For now, scroll to contact
//     const element = document.querySelector('#contact')
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }
//
//   return (
//     <section id="pricing" className="section-padding bg-gray-50" ref={ref}>
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
//              <span className="text-gradient">PRICING</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Transparent pricing for transformative results. Choose the plan that matches
//             your ambition and watch your Organization soar.
//           </p>
//
//           {/* Billing Toggle */}
//           <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-lg">
//             <button
//               onClick={() => setBillingCycle('monthly')}
//               className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
//                 billingCycle === 'monthly'
//                   ? 'bg-bold-gradient text-white shadow-lg'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setBillingCycle('annual')}
//               className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
//                 billingCycle === 'annual'
//                   ? 'bg-bold-gradient text-white shadow-lg'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Annual
//               <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
//                 Save 20%
//               </span>
//             </button>
//           </div>
//         </motion.div>
//
//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className={`relative ${
//                 plan.popular
//                   ? 'card-bold transform scale-105 ring-4 ring-orange-500 ring-opacity-50'
//                   : 'card-bold'
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-to-r from-[#ff4c00] to-[#ff9900] text-white px-6 py-2 rounded-full font-bold text-sm">
//                     MOST POPULAR
//                   </div>
//                 </div>
//               )}
//
//               <div className="p-8">
//                 {/* Plan Header */}
//                 <div className="text-center mb-8">
//                   <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
//                     <plan.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
//                   <p className="text-gray-600 mb-4">{plan.description}</p>
//
//                   <div className="mb-6">
//                     <div className="text-4xl md:text-5xl font-black text-gray-900">
//                       {plan.price}
//                     </div>
//                     <div className="text-gray-500 text-sm">
//                       {plan.period !== 'tailored' && `per ${plan.period}`}
//                     </div>
//                   </div>
//                 </div>
//
//                 {/* Features */}
//                 <div className="space-y-4 mb-8">
//                   {plan.features.map((feature) => (
//                     <div key={feature} className="flex items-start gap-3">
//                       <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//
//                 {/* CTA Button */}
//                 <motion.button
//                   onClick={() => handleGetStarted(plan.name)}
//                   className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
//                     plan.popular
//                       ? 'bg-bold-gradient text-white hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1'
//                       : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {plan.cta}
//                   <ArrowRight className="h-4 w-4" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//
//         {/* Money Back Guarantee */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="text-center mt-16"
//         >
//           <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               💯  Results Guarantee
//             </h3>
//             <p className="text-gray-600 text-lg">
//               We're so confident in our Strategy that we offer a 30-day money-back guarantee.
//               If you don't see measurable progress, we'll refund your investment completely.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
