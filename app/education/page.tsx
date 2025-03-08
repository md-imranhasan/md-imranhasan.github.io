import { GraduationCap } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Education</h1>
          <p className="text-xl text-muted-foreground">My academic background and credentials</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Master of Science (M.S.)</CardTitle>
                <p className="text-sm text-muted-foreground">August 2023 - Present</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Department of Life Sciences</h3>
                  <p className="text-muted-foreground">Faculty of the College of Arts and Sciences</p>
                  <p className="text-muted-foreground">Texas A&M University – San Antonio, USA</p>
                </div>

                <div>
                  <p className="font-medium">CGPA: 4.00/4.00 (3rd semester)</p>
                </div>

                <div>
                  <h3 className="font-medium">Master's Thesis</h3>
                  <p className="text-muted-foreground">
                    A computational system biology approach for unveiling novel drug targets in staphylococcus aureus.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Bachelor of Science (B.Sc.)</CardTitle>
                <p className="text-sm text-muted-foreground">January 2016 - July 2020</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Department of Computer Science and Engineering</h3>
                  <p className="text-muted-foreground">Faculty of Engineering and Technology</p>
                  <p className="text-muted-foreground">Islamic University, Bangladesh</p>
                </div>

                <div>
                  <p className="font-medium">CGPA: 3.32/4.00</p>
                  <p className="text-muted-foreground">Total credit hours: 160</p>
                </div>

                <div>
                  <h3 className="font-medium">Bachelor's Project</h3>
                  <p className="text-muted-foreground">
                    Galangin for COVID-19 and Mucormycosis co-infection: a potential therapeutic strategy of targeting
                    critical host signal pathways triggered by SARS-CoV-2 and Mucormycosis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Professional Development</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">High Performance Computing for Biologist</p>
                  <p className="text-sm text-muted-foreground">March 2024</p>
                  <p className="text-muted-foreground">Instructed by: Texas A&M University – San Antonio</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">Basics to Advanced modules in Multiomics data analysis</p>
                  <p className="text-sm text-muted-foreground">May 2022</p>
                  <p className="text-muted-foreground">Instructed by: Nextgenhelper, New Delhi</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">WHOLE EXOME SEQUENCING (5 Days)</p>
                  <p className="text-sm text-muted-foreground">September 2021</p>
                  <p className="text-muted-foreground">Instructed by: BDG Lifesciences (OPC) Pvt. Ltd., India</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">NGS | WHOLE GENOME SEQ</p>
                  <p className="text-sm text-muted-foreground">May 2021</p>
                  <p className="text-muted-foreground">Instructed by: BDG Lifesciences (OPC) Pvt. Ltd., India</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">Crush Course on Python</p>
                  <p className="text-sm text-muted-foreground">December 2020</p>
                  <p className="text-muted-foreground">Instructed by: Google (Coursera)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">Google IT Support Professional Certificate (150 hours)</p>
                  <p className="text-sm text-muted-foreground">November 2020</p>
                  <p className="text-muted-foreground">Instructed by: Google (Coursera)</p>
                  <p className="text-sm text-muted-foreground">
                    This five-course specialization covered technical support, bits and bytes of Computer Networking,
                    system administration etc.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

