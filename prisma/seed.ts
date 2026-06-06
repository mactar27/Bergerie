import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Insert all sheep first
  const names = [
    'BIRAHIM',
    'Djiby',
    'CHEIKH DIOP',
    'BOY SÉRÈRE',
    'LAYE DIAGNE',
    'Samba laobé (le mag)',
    'Lamp',
    'ALGOR',
    'GUELLEWAR',
    'Ferdinand',
    'Mixta',
    'Touareg',
    'Samba Laobé',
    'Dybala',
    'Nabou Diagne',
    'AMIR',
    'Grand Coly',
    'Seynabou Lam',
    'MAGISTRAT',
    'BITAR',
    'Fama',
    'Lif',
    'Alia',
    'Astou',
    'Doudou Sy',
    'LAMP',
    'LAMP F',
    'MAGAL',
    'Bocandé',
    'BOLT',
    'Swarovski',
    'khadissa',
    'Richard',
    'Sambané',
    'Paradise',
    'BIRÉM NIDÈMÈ',
    'Diao',
    'Arame',
    'Zahra',
    'Bachir',
    'Almamy',
    'Adramé',
    'ADO',
    'HASSANE II',
    'Tima',
    'Bébé Marème',
    'NDIAYE FASS',
    'CHAKA ZULU',
    'AICHA',
    'MBEUR',
    'KHADY DIALLO',
    'MARIETOU',
    'BLACK',
    "GRAINE D'OR",
    'DARO',
    'VIP',
    'BEAU GARS',
    'FADAM MBODJ',
    'MILLÉSIME',
    'ROI BACHIR',
    'SALOUM SALOUM',
    'MONSTRE',
    'MADIA',
    'SOUBEROU',
    'GALACTIK',
    'CHALLENGER',
    'KAISER',
    'CHASSIS LONG'
  ];

  const sheepMap = new Map<string, any>();

  for (const name of names) {
    const sheep = await prisma.sheep.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    sheepMap.set(name, sheep);
  }

  // Define relations (sireId = father, damId = mother)
  const relations = [
    // BIRAHIM line
    { child: 'Samba laobé (le mag)', sire: 'BIRAHIM' },
    { child: 'ALGOR', sire: 'BIRAHIM' },
    { child: 'Lamp', sire: 'Samba laobé (le mag)' },
    { child: 'Astou', sire: 'Lamp' }, // Astou in left side
    { child: 'GUELLEWAR', sire: 'ALGOR' },
    { child: 'Ferdinand', sire: 'GUELLEWAR' },
    { child: 'Mixta', sire: 'Ferdinand' },
    { child: 'Touareg', dam: 'Mixta' }, // Wait, Mixta and Touareg had Samba Laobé?
    { child: 'Samba Laobé', sire: 'Mixta', dam: 'Touareg' },
    { child: 'Dybala', sire: 'Samba Laobé', dam: 'Astou' },
    
    // Grand Coly & Seynabou Lam
    { child: 'Seynabou Lam', sire: 'Grand Coly' },

    // MAGISTRAT
    { child: 'MAGISTRAT', sire: 'CHEIKH DIOP' }, // Assuming orange bar Cheikh Diop is sire
    
    // BITAR
    { child: 'BITAR', sire: 'MAGISTRAT' },
    { child: 'Fama', sire: 'BITAR' },
    { child: 'Lif', sire: 'BITAR' },
    { child: 'Alia', sire: 'Lif' },
    
    // LAYE DIAGNE line
    { child: 'Doudou Sy', sire: 'LAYE DIAGNE' },
    { child: 'LAMP F', sire: 'LAYE DIAGNE' },
    { child: 'MAGAL', sire: 'LAMP F', dam: 'Doudou Sy' },
    { child: 'Bocandé', sire: 'MAGAL' },
    
    // BOLT line
    { child: 'Swarovski', sire: 'BOLT' },
    { child: 'khadissa', sire: 'Swarovski' },
    { child: 'Richard', sire: 'BOLT' },
    { child: 'Sambané', sire: 'Richard', dam: 'khadissa' },
    
    // BIRÉM NIDÈMÈ line
    { child: 'Diao', sire: 'BIRÉM NIDÈMÈ' },
    { child: 'Arame', sire: 'Diao' },
    { child: 'Zahra', sire: 'Djiby' },
    { child: 'Bachir', sire: 'CHEIKH DIOP' },
    { child: 'Almamy', sire: 'Bachir', dam: 'Zahra' },
    
    // BOY SÉRÈRE line
    { child: 'ADO', sire: 'BOY SÉRÈRE' },
    { child: 'HASSANE II', sire: 'ADO' },
    { child: 'Tima', sire: 'HASSANE II' },
    { child: 'Adramé', sire: 'Almamy', dam: 'Tima' },
    { child: 'Bébé Marème', sire: 'Adramé', dam: 'Arame' },
    { child: 'Paradise', sire: 'Sambané', dam: 'Bébé Marème' },
    
    // AMIR
    { child: 'AMIR', sire: 'Dybala', dam: 'Nabou Diagne' },
    
    // NDIAYE FASS line
    { child: 'NDIAYE FASS', sire: 'CHAKA ZULU', dam: 'AICHA' },
    { child: 'CHAKA ZULU', sire: 'MBEUR', dam: 'KHADY DIALLO' },
    { child: 'AICHA', sire: 'Dybala', dam: 'MARIETOU' },
    { child: 'MBEUR', sire: 'BLACK', dam: "GRAINE D'OR" },
    { child: 'MARIETOU', sire: 'Alia', dam: 'DARO' },
    { child: 'BLACK', sire: 'VIP', dam: 'BEAU GARS' },
    { child: 'VIP', sire: 'FADAM MBODJ', dam: 'MILLÉSIME' },
    { child: 'BEAU GARS', sire: 'ROI BACHIR', dam: 'SALOUM SALOUM' },
    { child: 'ROI BACHIR', sire: 'MONSTRE', dam: 'SALOUM SALOUM' },
    { child: 'FADAM MBODJ', sire: 'BOY SÉRÈRE' },
    { child: 'MILLÉSIME', sire: 'BOY SÉRÈRE' },
    { child: 'MADIA', sire: 'ALGOR' },
    { child: 'SOUBEROU', sire: 'MADIA' },
    { child: 'GALACTIK', sire: 'SOUBEROU' },
    { child: 'CHALLENGER', sire: 'GALACTIK' },
    { child: 'KAISER', sire: 'LAYE DIAGNE' },
    { child: 'CHASSIS LONG', sire: 'KAISER' },
    { child: 'KHADY DIALLO', sire: 'CHALLENGER' },
    { child: "GRAINE D'OR", sire: 'GALACTIK' },
    { child: 'DARO', sire: 'KAISER' }
  ];

  for (const rel of relations) {
    const sire = rel.sire ? sheepMap.get(rel.sire) : null;
    const dam = rel.dam ? sheepMap.get(rel.dam) : null;
    
    if (sire || dam) {
      await prisma.sheep.update({
        where: { name: rel.child },
        data: {
          sireId: sire ? sire.id : undefined,
          damId: dam ? dam.id : undefined
        }
      });
    }
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
