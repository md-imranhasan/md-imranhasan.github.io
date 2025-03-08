import { Code, Database, FlaskRoundIcon as Flask, Microscope } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Skills</h1>
          <p className="text-xl text-muted-foreground">My technical expertise and capabilities</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>R</Badge>
                <Badge>Python</Badge>
                <Badge>C</Badge>
                <Badge>C++</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>SQL</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Scikit</Badge>
                <Badge>NLP</Badge>
                <Badge>TensorFlow</Badge>
                <Badge>Github</Badge>
                <Badge>Keras</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dry-Lab Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-medium mb-2">Data Analysis</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">RNAseq Analysis</Badge>
                    <Badge variant="outline">Microarray Data Analysis</Badge>
                    <Badge variant="outline">scRNAseq Analysis</Badge>
                    <Badge variant="outline">miRNA Analysis</Badge>
                    <Badge variant="outline">Pathway Analysis</Badge>
                    <Badge variant="outline">Signaling Analysis</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Computational Biology</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Computer-aided Drug Design</Badge>
                    <Badge variant="outline">Molecular Dynamics Simulations</Badge>
                    <Badge variant="outline">Virtual Screening</Badge>
                    <Badge variant="outline">Protein Modelling</Badge>
                    <Badge variant="outline">Molecular Docking</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Genomics</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Phylogenetic Analysis</Badge>
                    <Badge variant="outline">Whole Genome Analysis</Badge>
                    <Badge variant="outline">Genome Annotation</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Other</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Medical Image Analysis</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Flask className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tools & Software</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-medium mb-2">Molecular Modeling</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Schrodinger Suite</Badge>
                    <Badge variant="outline">Discovery Studio</Badge>
                    <Badge variant="outline">PyMol</Badge>
                    <Badge variant="outline">PyRx</Badge>
                    <Badge variant="outline">AutoDock Vina</Badge>
                    <Badge variant="outline">Swiss PDB Viewer</Badge>
                    <Badge variant="outline">UCSF Chimera</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Bioinformatics</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Cytoscape</Badge>
                    <Badge variant="outline">Biorender</Badge>
                    <Badge variant="outline">Galaxy Web</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Data Analysis & Visualization</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SPSS</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Other</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Latex</Badge>
                    <Badge variant="outline">Linux</Badge>
                    <Badge variant="outline">Mendeley</Badge>
                    <Badge variant="outline">EndNote</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Presentations</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Poster Presentation</h3>
                  <p className="text-muted-foreground">New Mexico Research Symposium – 2024</p>
                  <p className="text-muted-foreground">
                    Unveiling the Molecular Landscape of HIV Infection: Identification of Key Gene Biomarkers and
                    Potential Drug Candidates through Single-Cell RNA Sequencing and Network Based Bioinformatics
                    Approach
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-medium">3 Minute Thesis Presentation</h3>
                  <p className="text-muted-foreground">Texas A&M University – San Antonio, 2024</p>
                  <p className="text-muted-foreground">
                    Systems Biology Approach to Identify Drug Targets in Staphylococcus aureus
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Oral Presentation (Paper No: 221)</h3>
                  <p className="text-muted-foreground">
                    International Conference on Innovations in Science, Engineering and Technology 2022 (ICISET 2022),
                    Bangladesh. [26-27 February 2022]
                  </p>
                  <p className="text-muted-foreground">
                    Paper No 221: Machine Learning Approaches to Identify Significant Features for the Diagnosis and
                    Prognosis of Chronic Kidney Disease.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Oral Presentation (Paper No: 56)</h3>
                  <p className="text-muted-foreground">
                    2nd International Conference on Computing Advancements - ICCA 2022, Bangladesh. [10-12 March 2022]
                  </p>
                  <p className="text-muted-foreground">
                    Paper No 56: Identification of Black Fungus Diseases Using CNN and Transfer-Learning Approach.
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

