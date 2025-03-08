import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Research</h1>
          <p className="text-xl text-muted-foreground">
            My research focuses on computational systems biology, bioinformatics, and machine learning applications in
            biology and medicine.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Current Research</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Staphylococcus aureus Research</CardTitle>
                  <CardDescription>Texas A&M University-San Antonio, 2023-Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    An integrated whole-genome sequencing and system biology method predicts antibiotic resistance in
                    the virulent Staphylococcus aureus strain.
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HIV Molecular Landscape</CardTitle>
                  <CardDescription>Texas A&M University-San Antonio, 2023-Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Unveiling the Molecular Landscape of HIV Infection: Identification of Key Gene Biomarkers and
                    Potential Drug Candidates through Single-Cell RNA Sequencing and Network Based Bioinformatics
                    Approach.
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      Single-cell RNA sequencing identified differentially expressed genes and key pathways in
                      HIV-infected cells, particularly in CD4+ T cell.
                    </li>
                    <li>
                      Molecular docking studies highlight Hypericin as potential inhibitors of key HIV-related proteins,
                      suggesting new therapeutic avenues.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Previous Research</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>COVID-19 and Mucormycosis Co-infection</CardTitle>
                  <CardDescription>Islamic University, 2019-2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Exploring Galangin as a Therapeutic Agent for SARS-CoV-2 and Mucormycosis Co-Infection.</p>
                  <p className="mt-4">
                    Investigated the potential of Galangin to target critical host signal pathways triggered by
                    SARS-CoV-2 and Mucormycosis co-infection, providing insights into novel therapeutic strategies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Colon Cancer Detection</CardTitle>
                  <CardDescription>Islamic University, 2019-2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Automatic Detection and Characterization of Colon Cancer with Deep Convolutional Neural Networks.
                  </p>
                  <p className="mt-4">
                    Developed and validated deep learning models for automated detection and characterization of colon
                    cancer from medical images, improving diagnostic accuracy and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Type 2 Diabetes Research</CardTitle>
                  <CardDescription>Islamic University, 2019-2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Identifying molecular mechanisms and key pathways that are linked to type 2 diabetes development of
                    tuberculosis and rheumatoid arthritis.
                  </p>
                  <p className="mt-4">
                    Used systems biology approaches to identify molecular signatures and therapeutic targets for type 2
                    diabetes and its complications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>COVID-19 Biomarkers</CardTitle>
                  <CardDescription>Research Assistant, 2019-2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Identification of blood-based signatures molecules and prediction of drug targets for COVID-19
                    patient.
                  </p>
                  <p className="mt-4">
                    Applied bioinformatics and systems biology approaches to identify blood-based biomarkers and
                    potential drug targets for COVID-19 patients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

