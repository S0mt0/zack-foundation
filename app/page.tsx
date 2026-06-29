import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Empowering Youth, Restoring Lives
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
                ZACK Humanitarian Foundation for Youth Empowerment is dedicated to rehabilitation, mental health support, skill training, and community development in Nigeria.
              </p>
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                Since 2021, we have been transforming lives through compassionate care, vocational training, and holistic support for vulnerable populations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/mission"
                  className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Learn Our Story
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors text-center"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">What We Do</h2>
            <p className="text-center text-foreground mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
              Our comprehensive approach addresses critical needs in our communities through four key pillars of support
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mental Health Support */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-2xl mb-4 text-primary">Mental Health Support</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  We provide comprehensive spiritual and psychological care for individuals facing mental health challenges. Our trained counselors and community support networks work together to ensure every person receives the compassionate care they deserve.
                </p>
                <p className="text-muted-foreground">
                  Through counseling sessions, support groups, and spiritual guidance, we help individuals rebuild their lives and restore their sense of hope.
                </p>
              </div>

              {/* Rehabilitation */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-2xl mb-4 text-primary">Rehabilitation & Reintegration</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  We work to rehabilitate and successfully reintegrate internally displaced persons back into their communities. Our holistic approach addresses both immediate needs and long-term stability.
                </p>
                <p className="text-muted-foreground">
                  We provide shelter, medical care, psychosocial support, and vocational guidance to help individuals rebuild their lives with dignity.
                </p>
              </div>

              {/* Skill Training */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-2xl mb-4 text-primary">Vocational Skill Training</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  We empower youth and underprivileged individuals through comprehensive vocational training programs that equip them with marketable skills and economic independence.
                </p>
                <p className="text-muted-foreground">
                  From tailoring and carpentry to digital skills and entrepreneurship, our programs create pathways to sustainable livelihoods.
                </p>
              </div>

              {/* Welfare Support */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-2xl mb-4 text-primary">Welfare & Community Care</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  We provide essential welfare support and care programs for vulnerable and less privileged populations, ensuring no one is left behind.
                </p>
                <p className="text-muted-foreground">
                  Our support includes feeding programs, healthcare access, educational assistance, and emergency relief during times of crisis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Foundation */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">About ZACK Foundation</h2>
            <p className="text-center text-foreground mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
              Founded in 2021, ZACK Humanitarian Foundation for Youth Empowerment was born from a vision to create lasting positive change in Nigeria. Our journey began with Emmanuel Zackson&apos;s commitment to helping those in need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  To rehabilitate internally displaced persons, provide mental health support, offer skill training, and extend welfare services to vulnerable populations in Nigeria.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-foreground leading-relaxed">
                  A Nigeria where every youth has access to quality education, mental health support, vocational skills, and the opportunity to reach their full potential.
                </p>
              </div>

              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-8">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">•</span>
                    <span><strong>Compassion:</strong> We lead with empathy in all our interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">•</span>
                    <span><strong>Integrity:</strong> We operate with honesty and transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">•</span>
                    <span><strong>Excellence:</strong> We strive for quality in everything we do</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">•</span>
                    <span><strong>Community:</strong> We believe in collective impact and shared responsibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">•</span>
                    <span><strong>Empowerment:</strong> We equip people to become agents of their own change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Impact</h2>
            <p className="text-center text-foreground mb-16 max-w-2xl mx-auto text-lg">
              Through dedicated effort and community support, we continue to create meaningful change
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">100+</div>
                <p className="text-foreground font-semibold">Lives Transformed</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">42+</div>
                <p className="text-foreground font-semibold">Team Members</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">25+</div>
                <p className="text-foreground font-semibold">Beneficiaries Currently</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">4</div>
                <p className="text-foreground font-semibold">Core Programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Stories of Hope</h2>
            <p className="text-center text-foreground mb-16 max-w-2xl mx-auto text-lg">
              Real stories from people whose lives have been changed through our programs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-border rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="bg-accent text-white px-4 py-2 rounded text-sm font-semibold">Mental Health Support</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Finding Peace After Trauma</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  &quot;Through ZACK Foundation&apos;s counseling and support programs, I learned that healing is possible. The compassionate team helped me process my trauma and rebuild my life with confidence and hope.&quot;
                </p>
                <p className="text-muted-foreground font-semibold">— Amara, Umuahia</p>
              </div>

              <div className="bg-white border border-border rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="bg-accent text-white px-4 py-2 rounded text-sm font-semibold">Skill Training</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">From Unemployed to Self-Employed</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  &quot;The vocational training I received transformed my future. I learned tailoring skills and now run my own thriving business. I&apos;m grateful to ZACK Foundation for giving me this opportunity.&quot;
                </p>
                <p className="text-muted-foreground font-semibold">— Chisom, Enugu</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Your support enables us to continue our vital work of empowering youth and restoring dignity to vulnerable populations. Whether through volunteering, donations, or partnerships, there are many ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="#donate"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-primary/5 transition-colors"
              >
                Support Us
              </Link>
              <Link
                href="/about"
                className="inline-block bg-muted text-foreground px-8 py-3 rounded font-semibold hover:bg-muted-foreground/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
