'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

type Sheep = {
  id: number;
  name: string;
  sireId: number | null;
  damId: number | null;
  sire?: Sheep;
  dam?: Sheep;
};

function PedigreeNode({ sheep, allSheep, level = 0 }: { sheep: Sheep; allSheep: Sheep[]; level?: number }) {
  const sire = allSheep.find(s => s.id === sheep.sireId);
  const dam = allSheep.find(s => s.id === sheep.damId);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        {sire && (
          <div className="flex flex-col items-center">
            <PedigreeNode sheep={sire} allSheep={allSheep} level={level + 1} />
            <div className="w-px h-6 bg-border mt-2"></div>
          </div>
        )}
        {dam && (
          <div className="flex flex-col items-center">
            <PedigreeNode sheep={dam} allSheep={allSheep} level={level + 1} />
            <div className="w-px h-6 bg-border mt-2"></div>
          </div>
        )}
      </div>
      {/* Connector from parents */}
      {(sire || dam) && (
        <div className="flex w-full justify-center mb-2">
          <div className="h-px bg-border w-1/2"></div>
        </div>
      )}
      <Card className={`px-4 py-2 text-center text-sm font-bold shadow-sm ${level === 0 ? 'bg-primary text-primary-foreground text-lg px-6 py-3' : 'bg-card'}`}>
        {sheep.name}
      </Card>
    </div>
  );
}

function NosMoutonsContent() {
  const searchParams = useSearchParams();
  const selectedMouton = searchParams.get('mouton') || 'AMIR';
  const [sheepData, setSheepData] = useState<Sheep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sheep')
      .then(res => res.json())
      .then(data => {
        setSheepData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const rootSheep = sheepData.find(s => s.name === selectedMouton);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Génétique d'Exception
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Découvrez l'arbre généalogique de {selectedMouton}, fruit d'années de sélection rigoureuse.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center p-12">
              <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : rootSheep ? (
            <div className="overflow-x-auto pb-8">
              <div className="min-w-max p-8 flex justify-center">
                <PedigreeNode sheep={rootSheep} allSheep={sheepData} />
              </div>
            </div>
          ) : (
            <div className="text-center p-12 text-muted-foreground">
              Données généalogiques indisponibles pour {selectedMouton}.
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
