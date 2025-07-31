'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Target, Heart, Building, Scale, Briefcase, BookOpen, Tv, GraduationCap } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const keyExperience = [
    {
      title: "Dream.Org",
      role: "Senior Director of Organizing and Partnerships",
      period: "Oct 2023 - Present",
      description: "Oversees capacity building, leadership development programs, and grassroots partnerships. Led the team in building The Dream Justice Cohort - one of the most transformational training programs in the nation.",
      icon: Target
    },
    {
      title: "ACLU of Wisconsin",
      role: "Smart Justice Campaign Manager",
      period: "2018 - 2021",
      description: "Led unprecedented multi-year effort to reduce Wisconsin's jail and prison populations by 50% and eliminate racial disparities in the criminal justice system.",
      icon: Scale
    },
    {
      title: "Governor's Commission on Juvenile Justice",
      role: "Commissioner",
      period: "2019 - 2022",
      description: "Advised DOJ on juvenile justice programs and funding decisions, developing statewide strategic improvement plans and need assessments.",
      icon: Building
    },
    {
      title: "Marquette University",
      role: "Co-Instructor",
      period: "Current",
      description: "Provides academic support and career-building resources for incarcerated and recently released students, bridging education and justice reform.",
      icon: GraduationCap
    }
  ]

  const mediaHighlights = [
    {
      title: "HBO's 'Growing Up Milwaukee'",
      description: "Featured documentary highlighting challenges faced by Black youth and Sean's story of resilience",
      icon: Tv
    },
    {
      title: "Milwaukee Journal Sentinel",
      description: "Speaks on treatment and diversion, advocating for SB 153 and smarter justice solutions",
      icon: BookOpen
    },
    {
      title: "Podcast Guest",
      description: "Sought-after guest on numerous podcasts and media platforms sharing his story and advocating for change",
      icon: Users
    }
  ]

  const topSkills = [
    { skill: "Personal Development", description: "Transforming lives through lived experience" },
    { skill: "Community Development", description: "Building stronger, more just communities" },
    { skill: "Community Engagement", description: "Mobilizing grassroots partnerships" },
    { skill: "Leadership Development", description: "Training the next generation of advocates" },
    { skill: "Interpersonal Skills", description: "Building bridges across political divides" }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative h-80 sm:h-96 lg:h-[500px] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/bw-sw-headshot.jpeg"
                alt="Sean Wilson - Senior Director at Dream.Org"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title mb-8">About Me</h2>
            
            <div className="mb-8">
              <blockquote className="text-2xl font-light italic text-gray-700 mb-6 leading-relaxed">
                "I don't just speak about change. I build it with the people most impacted at the center."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-900">
                -Sean Wilson, Founder
              </cite>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Sean is the <strong>Senior Director of Organizing and Partnerships at Dream.Org</strong>, 
                where he oversees capacity building, leadership development programs, and grassroots partnerships. 
                Over the past years, Sean has led the team in building <strong>The Dream Justice Cohort</strong> - 
                one of the most transformational training programs in the nation.
              </p>

              <p>
                Born and raised in <strong>Milwaukee, Wisconsin</strong>, Sean has organized at the state and local level 
                around policy change related to youth justice, voting rights, police reform, and criminal justice. 
                As a system-impacted person with <strong>17 years of lived experience</strong>, Sean brings an advantage 
                and insight into a system he believes needs reform by investing in the leadership of those most proximate 
                to the issue and problem.
              </p>

              <p>
                Sean is well-positioned to influence real reform and has <strong>trained countless advocates</strong> in 
                organizing and leadership development, bringing about policy and legislative change at the local, 
                state, and federal levels.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="btn-primary">
                Read Full Bio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Key Professional Experience</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {keyExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{exp.title}</h4>
                    <p className="text-primary font-semibold mb-2">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Top Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="font-bold text-lg text-gray-900 mb-3">{item.skill}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Media & Recognition</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mediaHighlights.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <media.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-3">{media.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{media.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Impact Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Current Impact at Dream.Org</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              "So often in states across the country, there's a heavy investment in incarceration 
              and a stark divestment in treatment. Major changes are needed in how the state 
              prioritizes criminal justice funding."
            </p>
            <cite className="block mt-4 text-lg font-semibold opacity-80">
              - Sean Wilson, Milwaukee Journal Sentinel
            </cite>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">17 Years</div>
              <div className="opacity-80">Lived Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">National</div>
              <div className="opacity-80">Training Program</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Countless</div>
              <div className="opacity-80">Advocates Trained</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
