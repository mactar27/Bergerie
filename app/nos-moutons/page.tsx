'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const GENEALOGIES: Record<string, { image: string; width: number; height: number }> = {
  'AMIR': {
    image: '/images/genealogie-amir.jpeg',
    width: 1600,
    height: 680,
  },
  'NDIAYE FASS': {
    image: '/images/genealogie-ndiaye-fass.jpeg',
    width: 1600,
    height: 680,
  },
};

function NosMoutonsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedMouton = searchParams.get('mouton') || 'AMIR';
  const genealogy = GENEALOGIES[selectedMouton];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* En-tête */}
          <div className="mb-10 text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Génétique d&apos;Exception
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Découvrez l&apos;arbre généalogique de{' '}
              <span className="font-bold text-primary">{selectedMouton}</span>,
              fruit d&apos;années de sélection rigoureuse.
            </p>
          </div>

          {/* Sélecteur de mouton */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {Object.keys(GENEALOGIES).map((name) => (
              <button
                key={name}
                id={`selector-${name.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() =>
                  router.push(`/nos-moutons?mouton=${encodeURIComponent(name)}`)
                }
                className={`rounded-full px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-200 border ${
                  selectedMouton === name
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                    : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Image de généalogie */}
          {genealogy ? (
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 border border-border">
              <Image
                src={genealogy.image}
                alt={`Arbre généalogique de ${selectedMouton} - Bergerie Malia`}
                width={genealogy.width}
                height={genealogy.height}
                className="w-full h-auto"
                priority
              />
            </div>
          ) : (
            <div className="text-center p-12 text-muted-foreground">
              Arbre généalogique non disponible pour {selectedMouton}.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function NosMoutonsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Chargement...</div>}>
      <NosMoutonsContent />
    </Suspense>
  );
}
