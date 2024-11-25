// dynamic-class.ts

export function createDynamicClass(): any {
    const className = process.env.CLASS_NAME;
  
    if (!className) {
      throw new Error('Environment variable CLASS_NAME is not set.');
    }
  
    // Create a dynamic class with the name from the environment variable
    return {
      [className]: class {
        constructor(public name: string) {
          this.name = name;
        }
  
        greet(): string {
          return `Bonjour, je suis ${this.name} de la classe ${className}`;
        }
      },
    }[className];
  }
  