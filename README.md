<p align="center"><a href="https://themexproject.com/"><img src="https://github.com/karstenbiedermann/themex-project/assets/114942316/6a8d88cf-3a55-4c67-9b14-ee6f4d7dcd27">
 </a></p>



## Getting started with Themex

In Themex, CSS variables serve as powerful helpers, enabling a more nuanced and flexible approach to styling. By leveraging these variables, developers can create a system of modular and component-specific classes that offer the same level of reusability as global modifiers but with much greater adaptability. This approach allows for individual properties to be adjusted without the need for cumbersome overrides or the risk of cascading style conflicts.

[Check out the website](https://themexproject.com)

Themex is NOT a component library! It involves components that suggest a structure you can use for your project.

# How to include the css

Select everything you need. Copy or download the code, paste it into your project, and adjust it to your needs. The code is yours.

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
