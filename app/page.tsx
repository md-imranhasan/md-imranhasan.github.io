import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Linkedin, BookOpen, Database, FileText, GraduationCap, Microscope, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Md. Imran Hasan
                </h1>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Computational Biologist & Bioinformatics Researcher
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about" passHref>
                  <Button className="flex gap-2">
                    <User size={16} />
                    About Me
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" className="flex gap-2">
                    <Mail size={16} />
                    Contact
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4">
                <Link href="https://orcid.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="ORCID">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                      <path d="M8 11v5" />
                      <path d="M8 8v.01" />
                      <path d="M12 16v-5" />
                      <path d="M16 16v-3a2 2 0 0 0-4 0" />
                    </svg>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://researchgate.net" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="ResearchGate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M19.64 14.64c0 2.8-2.3 5.06-5.13 5.06-2.84 0-5.15-2.26-5.15-5.06 0-2.8 2.3-5.06 5.15-5.06 2.82 0 5.13 2.26 5.13 5.06Z" />
                      <path d="M11.53 19.7V7.3" />
                      <path d="M7.3 11.7h4.25" />
                    </svg>
                  </Button>
                </Link>
                <Link href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="Google Scholar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 14l6.5-3.5c.8-.5 1.5-1.5 1.5-2.5 0-1.5-1.5-3-3.5-3H7.5C5.5 5 4 6.5 4 8c0 1 .7 2 1.5 2.5L12 14Z" />
                      <path d="M9 17c-1 0-1.5-.5-1.5-1.5V14l4.5 2.5 4.5-2.5v1.5c0 1-.5 1.5-1.5 1.5H9Z" />
                      <path d="M12 14v5" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white dark:border-gray-950">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Md. Imran Hasan"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Research Highlights
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Current Research Focus</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Exploring computational systems biology approaches to unveil novel drug targets and understand complex
                biological systems
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Staphylococcus aureus Research</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Analyzing antimicrobial resistant genes and identifying key hub genes for potential new therapies
                    against S. aureus.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">HIV Molecular Landscape</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Using single-cell RNA sequencing to identify differentially expressed genes and key pathways in
                    HIV-infected cells.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore My Work</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Navigate through my research, publications, and academic journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/research" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                  <Microscope className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Research</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Explore my research projects and interests
                </p>
              </div>
            </Link>
            <Link href="/publications" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                  <BookOpen className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Publications</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Browse my peer-reviewed publications</p>
              </div>
            </Link>
            <Link href="/education" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                  <GraduationCap className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Learn about my academic background</p>
              </div>
            </Link>
            <Link href="/experience" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                  <FileText className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">View my professional experience</p>
              </div>
            </Link>
            <Link href="/skills" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                  <Database className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Skills</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Discover my technical expertise</p>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                  <Mail className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Get in touch with me</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Highlight */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Publications</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Publications</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Selected works from my research portfolio
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                  <h3 className="text-xl font-bold">
                    Galangin for COVID-19 and Mucormycosis co-infection: a potential therapeutic strategy of targeting
                    critical host signal pathways triggered by SARS-CoV-2 and Mucormycosis
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Network Modeling Analysis in Health Informatics and Bioinformatics (Springer)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">DOI: 10.1007/s13721-023-00421-6</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">2022</p>
                  <h3 className="text-xl font-bold">
                    A system biology approach to determine therapeutic targets by identifying molecular mechanisms and
                    key pathways for type 2 diabetes that are linked to the development of tuberculosis and rheumatoid
                    arthritis
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Life Sciences</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">DOI: 10.1016/j.lfs.2022.120483</p>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Link href="/publications" passHref>
                <Button variant="outline">View All Publications</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Md. Imran Hasan. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="mailto:imranhasaniucse@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

