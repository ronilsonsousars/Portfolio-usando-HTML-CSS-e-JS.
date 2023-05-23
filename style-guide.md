# Guia de Estilo

## Links de importação HTML

Google font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap" rel="stylesheet" />
```

Remix Icons

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
```

## Cores

```css
--color-black-400: hsl(228, 9%, 11%);
--color-black-300: hsl(228, 11%, 18%);
--color-primary-100: hsl(250, 60%, 96%);
--color-primary-200: hsl(251, 55%, 94%);
--color-primary-300: hsl(252, 56%, 87%);
--color-primary-400: hsl(251, 56%, 60%);
--color-primary-500: hsl(252, 38%, 48%);

--color-text: var(var(--color-primary-100));
--color-title: var(var(--color-primary-300));
```

## Tipografia

### Font Family

```css
--font-sans-serif: "Inter", sans-serif;
```

### Font Size

```css
/*Escala de tipografia  
    1.333 – Perfect Fourth - Desktop (base 18)
    1.250 – Major Third - mobile (base 14) 
    referência: https://www.fluid-type-scale.com/
    --------------------------------------------*/
--font-size-sm: clamp(0.7rem, 0.26vw + 0.63rem, 0.84rem);
--font-size-base: clamp(0.88rem, 0.45vw + 0.76rem, 1.13rem);
--font-size-md: clamp(1.09rem, 0.74vw + 0.91rem, 1.5rem);
--font-size-lg: clamp(1.37rem, 1.15vw + 1.08rem, 2rem);
--font-size-xl: clamp(1.71rem, 1.74vw + 1.27rem, 2.66rem);
--font-size-xxl: clamp(2.14rem, 2.57vw + 1.49rem, 3.55rem);
--font-size-xxxl: clamp(2.67rem, 3.75vw + 1.73rem, 4.73rem);
```

## Criando um SVG Sprite

Supondo que você já tenha exportado seu SVG, podemos começar a preparar o arquivo SVG sprite.

### Está é aparência de SVG sprite vazio

```HTML
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- seu ícone -->
  </defs>
</svg>
```

### Definindo símbolos

Cada ícone está dentro de uma tag `<symbol>`

```HTML
<symbol id="logo" width="32" height="35" viewBox="0 0 32 35">
  <!-- icon content -->
</symbol>
```

Cada símbolo possue um **id único** para fazer referência a partir do nosso documento HTML

Cole seu icone SVG dentro de `symbol`, lembre-se de remover a tag SVG do mesmo.
Copie os atributos de lagura, altura e viewBox do seu elemento e cole em symbol. (conforme mostrado no exemplo acima)

<br>

### Adicionando ícones ao HTML

```HTML
<svg>
  <use xlink:href="assets/images/sprite.svg#logo"></use>
</svg>
```
