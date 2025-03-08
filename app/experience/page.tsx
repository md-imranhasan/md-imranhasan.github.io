import { Briefcase } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <p className="text-xl text-muted-foreground">My professional and research experience</p>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Professional Experience</h2>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Research Assistant (Summer Intern)</CardTitle>
                <p className="text-sm text-muted-foreground">June 2024 - August 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">University of Texas Health Science Center at San Antonio, Texas, USA</h3>
                </div>

                <div>
                  <p className="font-medium">Projects:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Vaccine effectiveness and immune response of SARS-CoV-2 vaccines in active military personnel
                      (VIRAMP).
                    </li>
                    <li>
                      Integration of miRNA expression, phenotype data, and associated gene data highlights the
                      multi-protective salutogenic traits sustained by optimal immune resilience and providing insights
                      into gene expression signatures associated with lifespan and immune aging.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Supervised by Dr. Sunil K. Ahuja | Center for Personalized Medicine
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Graduate Teaching Assistant</CardTitle>
                <p className="text-sm text-muted-foreground">August 2023 - Present</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Texas A&M University-San Antonio, Texas, USA</h3>
                </div>

                <div>
                  <p className="font-medium">Responsibilities:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Assist in teaching and mentoring undergraduate students in statistics in biology & medicine
                      classroom, laboratory, or field settings.
                    </li>
                    <li>
                      Grade undergraduate student assignments, exams, and coursework, providing valuable feedback.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Research Experience</h2>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Research Assistant | Dr. Teufel Lab</CardTitle>
                <p className="text-sm text-muted-foreground">August 2023 - Present</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">
                    Department of Life Sciences, Texas A&M University-San Antonio, TX-78224, USA
                  </h3>
                </div>

                <div>
                  <p className="font-medium">
                    Project 1: An integrated whole-genome sequencing and system biology method predicts antibiotic
                    resistance in the virulent Staphylococcus aureus strain.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Analysis of Staphylococcus aureus strains identified antimicrobial resistant genes, highlighting
                      key hub genes, drug class, and resistance mechanisms which can be targeted for new therapies.
                    </li>
                    <li>
                      Functional enrichment of AMR gene networks revealed critical processes and mechanisms related to
                      antibiotic resistance, aiding the development of effective antimicrobial agents and enhancing
                      understanding of S. aureus resistance.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium">
                    Project 2: Unveiling the Molecular Landscape of HIV Infection: Identification of Key Gene Biomarkers
                    and Potential Drug Candidates through Single-Cell RNA Sequencing and Network Based Bioinformatics
                    Approach
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Single-cell RNA sequencing identified differentially expressed genes and key pathways in
                      HIV-infected cells, particularly in CD4+ T cell.
                    </li>
                    <li>
                      Molecular docking studies highlight Hypericin as potential inhibitors of key HIV-related proteins,
                      suggesting new therapeutic avenues.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Supervised by Professor Dr. ASHLEY I. TEUFEL</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Research Assistant</CardTitle>
                <p className="text-sm text-muted-foreground">June 2019 - December 2022</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">
                    Department of Computer Science and Engineering, Islamic University, Kushtia-7003, Bangladesh
                  </h3>
                </div>

                <div>
                  <p className="font-medium">Projects:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Project 1: Identifying molecular mechanisms and key pathways that are linked to type 2 diabetes
                      development of tuberculosis and rheumatoid arthritis.
                    </li>
                    <li>
                      Project 2: Exploring Galangin as a Therapeutic Agent for SARS-CoV-2 and Mucormycosis Co-Infection.
                    </li>
                    <li>
                      Project 3: Automatic Detection and Characterization of Colon Cancer with Deep Convolutional Neural
                      Networks.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Supervised by Dr. Md Habibur Rahman</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Research Assistant</CardTitle>
                <p className="text-sm text-muted-foreground">March 2019 - August 2021</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Projects:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Project 1: Identification of blood-based signatures molecules and prediction of drug targets for
                      COVID-19 patient.
                    </li>
                    <li>Project 2: Diagnosis, Prognosis and Characterise Osteosarcoma with DCNN.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Supervised by Dr. Mohammad Ali Moni</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

