import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">Peer-reviewed journal articles and conference papers</p>
          <div className="mt-4 flex items-center gap-2">
            <p className="text-muted-foreground">Total publications: 15</p>
            <p className="text-muted-foreground">|</p>
            <p className="text-muted-foreground">Citations: 178</p>
            <p className="text-muted-foreground">|</p>
            <p className="text-muted-foreground">h-index: 7</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Journal Articles</h2>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge>2023</Badge>
                  <Badge variant="outline">Springer</Badge>
                  <Badge variant="outline">IF: 2.056</Badge>
                </div>
                <h3 className="text-xl font-bold">
                  Galangin for COVID-19 and Mucormycosis co-infection: a potential therapeutic strategy of targeting
                  critical host signal pathways triggered by SARS-CoV-2 and Mucormycosis
                </h3>
                <p className="text-muted-foreground">
                  Md. Imran Hasan, Md. Arju Hossain, Md Habibur Rahman, Md Sohel, Asif Ahsan, Md. Sadat Hossain Soikot,
                  Md. Nazrul Islam, Mohammad Ruhul Amin, and Deepak Kumar Jain
                </p>
                <p className="text-sm text-muted-foreground">
                  Network Modeling Analysis in Health Informatics and Bioinformatics
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href="https://doi.org/10.1007/s13721-023-00421-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1007/s13721-023-00421-6</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge>2023</Badge>
                  <Badge variant="outline">PLOS ONE</Badge>
                  <Badge variant="outline">IF: 3.7</Badge>
                  <Badge variant="outline">Q1</Badge>
                </div>
                <h3 className="text-xl font-bold">
                  Bioinformatics and In silico approaches to identify novel biomarkers and key pathways for cancers that
                  are linked to the progression of female infertility: A comprehensive approach for drug discovery
                </h3>
                <p className="text-muted-foreground">
                  Md. Arju Hossain, Md Sohel, Md Habibur Rahman, Md Imran Hasan, Md. Sharif Khan, Md. Al Amin, Md.
                  Zahidul Islam, and Silong Peng
                </p>
                <p className="text-sm text-muted-foreground">PLOS ONE</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href="https://doi.org/10.1371/journal.pone.0265746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1371/journal.pone.0265746</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge>2022</Badge>
                  <Badge variant="outline">Journal of Healthcare Engineering</Badge>
                  <Badge variant="outline">IF: 3.822</Badge>
                </div>
                <h3 className="text-xl font-bold">
                  Automated Detection and Characterization of Colon Cancer with Deep Convolutional Neural Networks
                </h3>
                <p className="text-muted-foreground">Md Imran Hasan, Shahin Ali, Habibur Rahman, and Khairul Islam</p>
                <p className="text-sm text-muted-foreground">Journal of Healthcare Engineering</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href="https://doi.org/10.1155/2022/5269913"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1155/2022/5269913</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge>2022</Badge>
                  <Badge variant="outline">Life Sciences</Badge>
                  <Badge variant="outline">IF: 5.03</Badge>
                  <Badge variant="outline">Q1</Badge>
                </div>
                <h3 className="text-xl font-bold">
                  A system biology approach to determine therapeutic targets by identifying molecular mechanisms and key
                  pathways for type 2 diabetes that are linked to the development of tuberculosis and rheumatoid
                  arthritis
                </h3>
                <p className="text-muted-foreground">
                  Md. Imran Hasan, Md Arju Hossain, Piplu Bhuiyan, Md Sipon Miah, Md Habibur Rahman
                </p>
                <p className="text-sm text-muted-foreground">Life Sciences</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href="https://doi.org/10.1016/j.lfs.2022.120483"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1016/j.lfs.2022.120483</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge>2022</Badge>
                  <Badge variant="outline">Informatics in Medicine Unlocked</Badge>
                  <Badge variant="outline">IF: 3.8</Badge>
                  <Badge variant="outline">Q2</Badge>
                </div>
                <h3 className="text-xl font-bold">
                  Identifying molecular signatures and pathways shared between Alzheimer's and Huntington's disorders: A
                  bioinformatics and systems biology approach
                </h3>
                <p className="text-muted-foreground">
                  Nosin Ibna Mahbub†, Md. Imran Hasan†, Md Habibur Rahman, Feroza Naznin, Md Zahidul Islam, Mohammad Ali
                  Moni
                </p>
                <p className="text-sm text-muted-foreground italic">† Equal contribution</p>
                <p className="text-sm text-muted-foreground">Informatics in Medicine Unlocked</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href="https://doi.org/10.1016/j.imu.2021.100840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1016/j.imu.2021.100840</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <Link
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <span>View all publications on Google Scholar</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Conference Papers</h2>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge>2022</Badge>
                  <Badge variant="outline">ACM Digital Library</Badge>
                </div>
                <h3 className="text-xl font-bold">
                  Identification of Black Fungus Diseases Using CNN and Transfer-Learning Approach
                </h3>
                <p className="text-muted-foreground">Md. Imran Hasan, Nosin Ibna Mahbub, Bappa Sarkar</p>
                <p className="text-sm text-muted-foreground">ICCA – 2022</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href="https://doi.org/10.1145/3542954.3542972"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1145/3542954.3542972</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

