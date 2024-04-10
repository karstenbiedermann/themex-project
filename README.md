<p align="center"><a href="https://themexproject.com/"><img src="https://github.com/karstenbiedermann/themex-project/assets/114942316/97322e88-7ba0-4af8-883b-dacb8e5b288a">
 </a></p>

## Getting started with Themex

In Themex, CSS variables serve as powerful helpers, enabling a more nuanced and flexible approach to styling. By leveraging these variables, developers can create a system of modular and component-specific classes that offer the same level of reusability as global modifiers but with much greater adaptability. This approach allows for individual properties to be adjusted without the need for cumbersome overrides or the risk of cascading style conflicts.

# How to include the css

```css
<style>
/* normalize */
@import 'index.css';
/* your theme variables */
@import 'theme.css';
/* your components */
...
</style>
```

```shell
npm i the-themex-project
```

# Variables

There are several categories of CSS variables in each component that allow you to customize the appearance, including: color, background, border (encompassing border and border-radius), typography (covering font-size, line-height, and weight), and spacing. These variables allow for detailed control over a component's visual presentation, while facilitating easy adjustments for different variants of a component.

In Themex, we follow a specific pattern for naming variables: `--[attribute]-[context]`. This convention allows for a clear and consistent way to identify the purpose and scope of each variable. When breakpoints are involved, the pattern extends to `--[attribute]-[breakpoint]-[context]`. This approach helps in managing responsive designs by explicitly indicating the attribute, the breakpoint at which it applies, and the context within which it is used. This naming strategy ensures that our codebase remains organized and easy to understand, facilitating smoother development and maintenance processes.

````css
.hero {
  .hero--variant-xxx {
    background: var(--background-hero);
    border-color: var(--border-color-hero);
    border-radius: var(--border-radius-hero);
    border-width: var(--border-width-hero);
  }
}
```
````
