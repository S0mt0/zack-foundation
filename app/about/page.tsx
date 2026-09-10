import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About ZACK Foundation
            </h1>
            <p className="text-lg text-gray-100">
              Understanding our mission, values, and commitment to community
              transformation
            </p>
          </div>
        </section>

        {/* Foundation Info */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  ZACK Humanitarian Foundation for Youth Empowerment was founded
                  in 2021 with a mission to transform lives and communities
                  through compassionate care and sustainable development. We are
                  a registered non-profit organization operating in Umuahia,
                  Abia State, Nigeria.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our foundation started with the remarkable journey of Emmanuel
                  Onyenma Ademe, who spent 25 years suffering from severe mental
                  illness. Through dedicated spiritual intervention and care,
                  Emmanuel was healed and restored to society. This
                  transformative experience became the catalyst for establishing
                  our comprehensive support programs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we serve over 100 individuals and have grown to a team
                  of 42 dedicated staff members and volunteers committed to our
                  shared vision of dignity, opportunity, and restored hope.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Organization Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Registration Number
                    </p>
                    <p className="font-semibold">8338692</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Registration Date
                    </p>
                    <p className="font-semibold">March 14, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Registered Address
                    </p>
                    <p className="font-semibold text-sm">
                      No 23 Dozie Way, Off Ikot Ekpene Road, Umuahia, Abia
                      State, Nigeria
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Operational Address
                    </p>
                    <p className="font-semibold text-sm">
                      Sir John Nwadighioha Evangelical and Welfare Foundation’s
                      building,
                      <br />
                      K/m 112 PH/Enugu Express way Nsukwe Ubakala Umuahia Abia
                      State, Nigeria.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Staff Members
                    </p>
                    <p className="font-semibold">42</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Classification
                    </p>
                    <p className="font-semibold">
                      Foundation-Based Association
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-3">Compassion</h3>
                  <p className="text-muted-foreground">
                    We approach every person with deep empathy and genuine
                    concern for their wellbeing and restoration.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    We operate with transparency and accountability in all our
                    activities and financial management.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for quality in all our programs and services to
                    maximize positive impact.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-3">Empowerment</h3>
                  <p className="text-muted-foreground">
                    We believe in enabling individuals to achieve self-reliance
                    and dignity through sustainable support.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    We work collaboratively with communities, partners, and
                    stakeholders for shared progress.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We design programs for lasting change and long-term
                    community development.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">
                      Mental Health Restorations
                    </h3>
                    <p className="text-muted-foreground">
                      Successfully facilitated spiritual deliverance and
                      psychological rehabilitation for over 20 individuals with
                      mental health challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Skill Training Programs</h3>
                    <p className="text-muted-foreground">
                      Provided vocational training in furniture and upholstery,
                      enabling beneficiaries to pursue sustainable livelihoods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Welfare Support</h3>
                    <p className="text-muted-foreground">
                      Established monthly allowance programs for 25+ vulnerable
                      individuals including widows, elderly, and those with
                      health challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Community Deliverance</h3>
                    <p className="text-muted-foreground">
                      Conducted spiritual deliverance and revival programs that
                      liberated communities from oppressive spiritual
                      influences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Healthcare Support</h3>
                    <p className="text-muted-foreground">
                      Provided medical care and treatment for individuals facing
                      serious health challenges and accidents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Team Development</h3>
                    <p className="text-muted-foreground">
                      Built a dedicated team of assistant ministers, nurses, and
                      community workers committed to our mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
