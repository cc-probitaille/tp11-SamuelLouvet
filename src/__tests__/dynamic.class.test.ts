// dynamic-class.test.ts

import { createDynamicClass } from '../dynamic-class';

describe('Création de classe dynamique', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv }; // Copie de process.env pour éviter les modifications globales
  });

  afterEach(() => {
    process.env = originalEnv; // Restauration de l'environnement d'origine
  });

  it('devrait créer une classe avec le nom de la variable d\'environnement CLASS_NAME', () => {
    process.env.CLASS_NAME = 'TestClass';
    const DynamicClass = createDynamicClass();

    const instance = new DynamicClass('Bob');
    expect(instance.name).toBe('Bob');
    expect(instance.greet()).toBe('Bonjour, je suis Bob de la classe TestClass');
    console.log(instance.greet());
  });


  it('devrait lever une erreur si CLASS_NAME n\'est pas défini', () => {
    delete process.env.CLASS_NAME;

    expect(() => {
      createDynamicClass();
    }).toThrow('Environment variable CLASS_NAME is not set.');
  });
});
