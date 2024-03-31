## SOLID
# SOLID: los 5 principios que te ayudarán a desarrollar software de calidad

Si hablamos de diseño y desarrollo de aplicaciones, **Principios SOLID** son unas palabras que debes conocer como uno de los fundamentos de la [arquitectura y desarrollo de software](https://profile.es/creamos-soluciones-digitales/custom-development/).

SOLID es el acrónimo que acuñó M[ichael Feathers](https://twitter.com/mfeathers), basándose en los principios de la [programación orientada](https://profile.es/blog/que-es-la-programacion-orientada-a-objetos/) a objetos que Robert C. Martin había recopilado en el año 2000 en su paper “[Design Principles and Design Patterns](http://www.cvc.uab.es/shared/teach/a21291/temes/object_oriented_design/materials_adicionals/principles_and_patterns.pdf)”.

Ocho años más tarde, [el tío Bob](https://twitter.com/unclebobmartin) siguió compendiando consejos y buenas prácticas de desarrollo y se convirtió en el padre del código limpio con su célebre libro Clean Code, del que ya hablamos en la recopilación de [libros esenciales para desarrolladores](https://profile.es/blog/libros-esenciales-para-desarrolladores-y-programadores/).

## Los principios SOLID
- S de Single Responsibility Principle (SRP)
- O de Open/Closed Principle (OCP)
- L de Liskov Substitution Principle (LSP)
- I de Interface Segregation Principle (ISP)
- D de Dependency Inversion Principle (DIP)

## objetivos
- Crear un **software eficaz**: que cumpla con su cometido y que sea **robusto y estable**.
- Escribir un **código limpio y flexible** ante los cambios: que se pueda modificar fácilmente   según necesidad, que sea **reutilizable y mantenible**.
- **Permitir escalabilidad**: que acepte ser ampliado con nuevas funcionalidades de manera ágil.

En este sentido la aplicación de los principios SOLID está muy relacionada con la comprensión y el uso de [patrones de diseño](https://profile.es/blog/patrones-de-diseno-de-software/), que nos permitirán mantener una **alta cohesión** y, por tanto, un **bajo acoplamiento** de software.

## ¿Qué son la cohesión y el acoplamiento?

El acoplamiento se refiere al **grado de interdependencia que tienen dos unidades de software entre sí**, entendiendo por unidades de software: clases, subtipos, métodos, módulos, funciones, bibliotecas, etc.

Si dos unidades de software son completamente independientes la una de la otra, decimos que están desacopladas.

---

La cohesión de software es el **grado en que elementos diferentes de un sistema permanecen unidos para alcanzar un mejor resultado** que si trabajaran por separado. Se refiere a la forma en que podemos agrupar diversas unidades de software para crear una unidad mayor.

## 1.  Principio de Responsabilidad Única
**_“A class should have one, and only one, reason to change.”_**

La S del acrónimo del que hablamos hoy se refiere a **Single Responsibility Principle (SRP)**. Según este principio **“una clase debería tener una, y solo una, razón para cambiar”**. Es esto, precisamente, “razón para cambiar”, lo que Robert C. Martin identifica como “responsabilidad”.

El principio de Responsabilidad Única es **el más importante y fundamental de SOLID**, muy sencillo de explicar, pero el más difícil de seguir en la práctica.

El propio Bob resume cómo hacerlo: “Gather together the things that change for the same reasons. Separate those things that change for different reasons”, es decir: “Reúne las cosas que cambian por las mismas razones. Separa aquellas que cambian por razones diferentes”.

## 2.  Principio de Abierto/Cerrado
**_“You should be able to extend a classes behavior, without modifying it.”_**

El segundo principio de SOLID lo formuló Bertrand Meyer en 1988 en su libro “Object Oriented Software Construction” y dice: “Deberías ser capaz de extender el comportamiento de una clase, sin modificarla”. En otras palabras: las clases que usas deberían estar abiertas para poder extenderse y cerradas para modificarse.

En su blog Robert C. Martin defendió este principio que [a priori puede parecer una paradoja](https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html). Es importante tener en cuenta el Open/Closed Principle (OCP) a la hora de desarrollar clases, [librerías](https://profile.es/blog/librerias-javascript/) o frameworks.

## 3.  Principio de Sustitución de Liskov
**_“Derived classes must be substitutable for their base classes.”_**

La L de SOLID alude al apellido de quien lo creó, [Barbara Liskov](https://www.eldiario.es/sociedad/barbara-liskov-medidas-mujeres-ingenierias_1_2080551.html), y dice que **“las clases derivadas deben poder sustituirse por sus clases base”**.

Esto significa que los objetos deben poder ser reemplazados por instancias de sus subtipos sin alterar el correcto funcionamiento del sistema o lo que es lo mismo: si en un programa utilizamos cierta clase, **deberíamos poder usar cualquiera de sus subclases** sin interferir en la funcionalidad del programa.  

Según Robert C. Martin incumplir el Liskov Substitution Principle (LSP) implica violar también el principio de Abierto/Cerrado.

## 4. Principio de Segregación de la Interfaz
**_“Make fine grained interfaces that are client specific.”_**

En el cuarto principio de SOLID, el tío Bob sugiere: “Haz interfaces que sean específicas para un tipo de cliente”, es decir, para una **finalidad concreta**.

En este sentido, según el **Interface Segregation Principle (ISP)**, es preferible contar con muchas interfaces que definan pocos métodos que tener una interface forzada a implementar muchos métodos a los que no dará uso.

## 5.  Principio de Inversión de Dependencias
**_“Depend on abstractions, not on concretions.”_**

Llegamos al último principio: "**Depende de abstracciones**, no de clases concretas”.

Así, Robert C. Martin recomienda:

1. Los módulos de alto nivel **no deberían depender de módulos de bajo nivel**. Ambos deberían depender de abstracciones.

2. Las **abstracciones no deberían depender de los detalles**. Los detalles deberían depender de las abstracciones.
El objetivo del Dependency Inversion Principle (DIP) consiste en reducir las dependencias entre los módulos del código, es decir, alcanzar un bajo acoplamiento de las clases.
