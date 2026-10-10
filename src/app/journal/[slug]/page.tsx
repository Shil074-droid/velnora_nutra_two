import { Metadata } from "next";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, Tag, BookOpen, ArrowLeft, Share2 } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

const articles: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "reading-supplement-labels": {
    title: "How to read a supplement label",
    excerpt: "Understanding ingredient forms, dosages, and what matters for efficacy. A practical guide to interpreting any supplement facts panel.",
    category: "Education",
    readTime: "6 min",
    content: `
      <p class="text-lede text-charcoal/70">The supplement facts panel is the single most important tool for evaluating a product. Yet it's often treated as fine print — something to glance at rather than read.</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">The basics</h3>
      <p class="text-charcoal/70">Every supplement sold in the US must display a Supplement Facts panel. It lists the serving size, servings per container, and each ingredient with its amount per serving and percent Daily Value (%DV).</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Serving size vs. servings per container</h3>
      <p class="text-charcoal/70">Start here. The serving size tells you how many capsules, tablets, or scoops constitute one dose. The servings per container tells you how many doses are in the bottle. A bottle of 60 capsules with a serving size of 2 capsules contains 30 servings — a 30-day supply if taken daily.</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Ingredient forms matter</h3>
      <p class="text-charcoal/70">This is where most labels obscure the truth. "Magnesium" could be magnesium oxide (poorly absorbed), magnesium citrate (better), or magnesium glycinate (highly absorbable and gentle). The form determines bioavailability, tolerability, and often the price.</p>
      <p class="text-charcoal/70 mt-2">Look for specific forms: methylcobalamin (B12), pyridoxal-5-phosphate (B6), cholecalciferol (D3), bisglycinate chelates (minerals). If the form isn't listed, assume the cheapest, least absorbable version.</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Dosage and % Daily Value</h3>
      <p class="text-charcoal/70">The amount per serving tells you the dose. The %DV tells you how that dose compares to the government's recommended daily intake for the general population. But %DV has limitations:</p>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>DVs are based on preventing deficiency, not optimizing health</li>
        <li>Some nutrients (like magnesium) have DVs far below therapeutic doses</li>
        <li>No DV exists for many botanicals and specialty compounds</li>
      </ul>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Red flags</h3>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>Proprietary blends that hide individual dosages</li>
        <li>Ingredients listed without forms (just "magnesium")</li>
        <li>Dosages far below researched amounts</li>
        <li>Long lists of ingredients at tiny doses (fairy-dusting)</li>
        <li>Artificial colors, flavors, and unnecessary fillers high on the list</li>
      </ul>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">What to look for</h3>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>Specific ingredient forms with research backing</li>
        <li>Dosages at or near clinically studied amounts</li>
        <li>Third-party testing verification</li>
        <li>Transparent labeling with no proprietary blends</li>
        <li>Clean excipients (rice flour, cellulose vs. artificial additives)</li>
      </ul>

      <div className="rounded-card border border-line bg-cream p-5 mt-8">
        <p className="text-sm text-charcoal/70">
          <strong>Bottom line:</strong> A good label tells you exactly what you're getting, in what form, at what dose, and why. If you have to guess, the brand hasn't earned your trust.
        </p>
      </div>
    `,
  },
  "magnesium-forms-compared": {
    title: "Magnesium glycinate vs citrate vs threonate",
    excerpt: "A practical guide to choosing the right form for your needs. Understanding absorption, tolerability, and specific use cases.",
    category: "Ingredients",
    readTime: "8 min",
    content: `
      <p class="text-lede text-charcoal/70">Magnesium is involved in over 300 enzymatic reactions. Yet the form you choose dramatically affects how much your body actually absorbs and what benefits you experience.</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Quick comparison</h3>
      <div className="rounded-card border border-line bg-ivory p-5 overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="text-left py-2 font-medium text-charcoal">Form</th>
              <th className="text-center py-2 font-medium text-charcoal">Absorption</th>
              <th className="text-center py-2 font-medium text-charcoal">Best for</th>
              <th className="text-center py-2 font-medium text-charcoal">GI tolerance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line/50">
              <td className="py-2 text-charcoal font-medium">Glycinate</td>
              <td className="py-2 text-center text-charcoal">High</td>
              <td className="py-2 text-center text-charcoal">Sleep, anxiety, muscle relaxation</td>
              <td className="py-2 text-center text-charcoal">Excellent</td>
            </tr>
            <tr className="border-b border-line/50">
              <td className="py-2 text-charcoal font-medium">Citrate</td>
              <td className="py-2 text-center text-charcoal">Good</td>
              <td className="py-2 text-center text-charcoal">Constipation, general use</td>
              <td className="py-2 text-center text-charcoal">Moderate (laxative at high doses)</td>
            </tr>
            <tr className="border-b border-line/50">
              <td className="py-2 text-charcoal font-medium">Threonate</td>
              <td className="py-2 text-center text-charcoal">High (crosses blood-brain barrier)</td>
              <td className="py-2 text-center text-charcoal">Cognitive function, memory</td>
              <td className="py-2 text-center text-charcoal">Good</td>
            </tr>
            <tr className="border-b border-line/50">
              <td className="py-2 text-charcoal font-medium">Malate</td>
              <td className="py-2 text-center text-charcoal">Good</td>
              <td className="py-2 text-center text-charcoal">Energy, fibromyalgia support</td>
              <td className="py-2 text-center text-charcoal">Good</td>
            </tr>
            <tr>
              <td className="py-2 text-charcoal font-medium">Taurate</td>
              <td className="py-2 text-center text-charcoal">Good</td>
              <td className="py-2 text-center text-charcoal">Cardiovascular health</td>
              <td className="py-2 text-center text-charcoal">Good</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Deep dive: Glycinate</h3>
      <p class="text-charcoal/70">Magnesium glycinate (bisglycinate chelate) binds magnesium to glycine, an amino acid. This chelation protects the magnesium during digestion and facilitates absorption through amino acid transporters. It's the gold standard for:</p>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>Sleep support (glycine itself has calming properties)</li>
        <li>Anxiety and stress management</li>
        <li>Muscle relaxation and recovery</li>
        <li>People with sensitive digestion</li>
      </ul>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">When to choose others</h3>
      <p class="text-charcoal/70"><strong>Citrate:</strong> Budget-friendly, good for occasional constipation. The laxative effect limits dose tolerance.</p>
      <p class="text-charcoal/70 mt-2"><strong>Threonate:</strong> Uniquely crosses the blood-brain barrier. Best for cognitive support, but more expensive and typically lower elemental magnesium per capsule.</p>
      <p class="text-charcoal/70 mt-2"><strong>Malate:</strong> Combined with malic acid (Krebs cycle). Popular for energy production and fibromyalgia.</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Dosage guidance</h3>
      <p class="text-charcoal/70">The RDA is 310-420 mg/day for adults. Therapeutic doses in studies range from 200-400 mg elemental magnesium. With glycinate, start at 200 mg and adjust based on response. Take with food for best absorption.</p>
    `,
  },
  "nad-precursors-explained": {
    title: "NMN, NR, and NAD+ precursors",
    excerpt: "The science behind cellular energy support and healthy ageing. Comparing the evidence for different NAD+ boosting compounds.",
    category: "Science",
    readTime: "10 min",
    content: `
      <p class="text-lede text-charcoal/70">NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell. It's essential for energy production, DNA repair, and regulating circadian rhythms. Levels decline with age — by middle age, they've dropped roughly 50%.</p>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">The precursors</h3>
      <p class="text-charcoal/70">Several compounds can raise NAD+ levels. The two most researched:</p>

      <h4 class="font-serif text-lg text-charcoal mt-6 mb-3">Nicotinamide Mononucleotide (NMN)</h4>
      <p class="text-charcoal/70">A direct precursor to NAD+. One enzymatic step converts NMN to NAD+. Research highlights:</p>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>Human trials show increased blood NAD+ at 250-1250 mg/day</li>
        <li>Studies suggest benefits for insulin sensitivity, aerobic capacity, and skin ageing</li>
        <li>Stable in supplements, well-tolerated</li>
      </ul>

      <h4 class="font-serif text-lg text-charcoal mt-6 mb-3">Nicotinamide Riboside (NR)</h4>
      <p class="text-charcoal/70">Another direct precursor, converted via a different pathway (NRK enzymes). Research highlights:</p>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>Increases blood NAD+ at 250-1000 mg/day</li>
        <li>Extensive safety data (GRAS status)</li>
        <li>Patented forms (Niagen®) dominate the market</li>
      </ul>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">NMN vs NR: What the evidence says</h3>
      <p class="text-charcoal/70">Both effectively raise NAD+. Head-to-head human data is limited. Key differences:</p>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>NMN is one step closer to NAD+ in the pathway</li>
        <li>NR has more published human trials</li>
        <li>NMN may have better tissue distribution (preliminary data)</li>
        <li>Cost per effective dose is similar</li>
      </ul>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Synergistic compounds</h3>
      <p class="text-charcoal/70">NAD+ precursors work better with supporting ingredients:</p>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li><strong>Trans-resveratrol:</strong> Activates sirtuins (NAD+-dependent longevity proteins)</li>
        <li><strong>CoQ10:</strong> Supports mitochondrial function alongside NAD+</li>
        <li><strong>Trimethylglycine (TMG):</strong> Supports methylation, which consumes NAD+</li>
        <li><strong>B vitamins:</strong> Especially B3 (niacin), B2, B6, B12 for NAD+ metabolism</li>
      </ul>

      <h3 class="font-serif text-xl text-charcoal mt-8 mb-4">Practical recommendations</h3>
      <ul class="list-disc list-inside flex flex-col gap-2 text-charcoal/70 mt-2">
        <li>Start with 250-500 mg NMN or NR daily</li>
        <li>Take in the morning (aligns with circadian NAD+ rhythms)</li>
        <li>Consider combining with trans-resveratrol (150-500 mg)</li>
        <li>Monitor response over 8-12 weeks</li>
        <li>Choose brands with third-party purity testing</li>
      </ul>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="border-b border-line bg-ivory" aria-label="Breadcrumb">
        <Container className="py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-charcoal/50 hover:text-forest transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-2 text-charcoal/30">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href="/journal" className="text-charcoal/50 hover:text-forest transition-colors">Journal</Link>
            </li>
            <li className="flex items-center gap-2 text-charcoal/30">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-charcoal truncate max-w-[200px]" aria-current="page">{article.title}</span>
            </li>
          </ol>
        </Container>
      </nav>

      {/* Article Header */}
      <section className="py-section-space-sm lg:py-section-space">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Link href={`/journal?category=${article.category.toLowerCase()}`} className="text-micro font-medium text-forest hover:underline">
                {article.category}
              </Link>
              <span className="text-micro text-charcoal/40">{article.readTime}</span>
            </div>
            <h1 className="text-display font-light text-charcoal">{article.title}</h1>
            <p className="mt-4 text-lede text-charcoal/70">{article.excerpt}</p>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <Section className="py-section-space">
        <Container className="max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="prose prose-charcoal max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </motion.article>

          {/* Share & Navigation */}
          <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-charcoal/50">Share</span>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-charcoal/50 hover:bg-forest/5 hover:text-forest transition-colors" aria-label="Share on Twitter">
                <Share2 className="h-4 w-4" aria-hidden="true" />
              </button>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-charcoal/50 hover:bg-forest/5 hover:text-forest transition-colors" aria-label="Share on LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </button>
            </div>
            <Link href="/journal" className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to journal
            </Link>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      <Section className="py-section-space bg-cream">
        <Container>
          <div className="flex flex-col items-start gap-6 pb-10 max-w-3xl">
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              More reading
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Related articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(articles)
              .filter(([s]) => s !== slug)
              .slice(0, 3)
              .map(([s, a], index) => (
                <motion.article
                  key={s}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex flex-col gap-4 rounded-card border border-line bg-ivory overflow-hidden hover:border-forest/30 transition-colors"
                >
                  <Link href={`/journal/${s}`} className="block">
                    <div className="aspect-[16/10] bg-forest relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-6xl font-light opacity-20">{a.title.charAt(0)}</span>
                      </div>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/journal?category=${a.category.toLowerCase()}`} className="text-micro font-medium text-forest hover:underline">{a.category}</Link>
                      <span className="text-micro text-charcoal/40">{a.readTime}</span>
                    </div>
                    <Link href={`/journal/${s}`}>
                      <h3 className="font-serif text-lg text-charcoal hover:text-forest transition-colors">{a.title}</h3>
                    </Link>
                    <p className="text-small text-charcoal/70">{a.excerpt}</p>
                    <Link href={`/journal/${s}`} className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1 mt-auto">
                      Read article
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </Container>
      </Section>
    </>
  );
}