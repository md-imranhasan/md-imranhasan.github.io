import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">Computational Biologist & Bioinformatics Researcher</p>
          </div>

          <div className="space-y-4">
            <p>
              I am a computational biologist and bioinformatics researcher currently pursuing my Master of Science in
              Life Sciences at Texas A&M University – San Antonio. My research focuses on computational systems biology
              approaches for unveiling novel drug targets in Staphylococcus aureus and exploring the molecular landscape
              of HIV infection.
            </p>

            <p>
              With a background in Computer Science and Engineering from Islamic University, Bangladesh, I combine
              computational expertise with biological research to address complex challenges in infectious diseases,
              drug discovery, and systems biology.
            </p>

            <p>My research interests include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Computational systems biology and network analysis</li>
              <li>Antimicrobial resistance mechanisms</li>
              <li>Single-cell RNA sequencing and transcriptomics</li>
              <li>Computer-aided drug design and molecular docking</li>
              <li>Machine learning applications in bioinformatics</li>
              <li>Medical image analysis using deep learning</li>
            </ul>

            <p>
              I have published 15 peer-reviewed journal articles with a citation count of 178 and an h-index of 7. My
              work spans various areas including COVID-19 research, cancer detection using deep learning, and systems
              biology approaches to complex diseases.
            </p>

            <p>
              Currently, I am working as a Research Assistant in Dr. Teufel's Lab at Texas A&M University-San Antonio,
              where I am applying integrated whole-genome sequencing and system biology methods to predict antibiotic
              resistance in virulent Staphylococcus aureus strains.
            </p>
          </div>

          <div>
            <Link href="/contact">
              <Button className="flex gap-2">
                <Mail size={16} />
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Md. Imran Hasan"
              width={300}
              height={400}
              className="object-cover w-full"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">San Antonio, TX, USA</p>
            </div>

            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:imranhasaniucse@gmail.com" className="text-primary hover:underline">
                imranhasaniucse@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">(+1) 210-204-8913</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

