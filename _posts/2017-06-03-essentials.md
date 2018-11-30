---
layout:   post
title:    "CSS Essentials"
category: css
date:     2017-06-03 21:30:14 +0700
series:   "CSS Notes"
---

## 1. Syntax

<figure>
    <img src="/images/css-syntax.gif" alt="CSS syntax.">  
</figure>

By default:

- Reserved keywords and identifiers must not be placed between quotes ("" or ''). E.g., `color: "red"` is illegal.

- All CSS syntax is case-insensitive within the ASCII range (i.e., [a-z] and [A-Z] are equivalent). E.g., `P { Color: bluE !IMPORTANT }` is same as `p { color: blue !important }`. Note that element names are case-insensitive in HTML, but case-sensitive in XML.

- Identifiers (element names, classes, and IDs in selectors) can contain only the characters [a-zA-Z0-9_], plus the hyphen (-) and ISO 10646 characters U+0080 and higher; they cannot start with a digit, two hyphens, or a hyphen followed by a digit. Identifiers can also contain escaped characters and any ISO 10646 character as a numeric code. Then, `x&y#z` is a valid identifier.

- All special characters in an identifier must be escaped. E.g., if `<p class="x&y#z">...</p>`, selector for this element should be `.x\&y\#z {}`.

- Any `@import` rule that occurs inside a block or after any non-ignored statement other than an `@charset` or another `@import` rule is invalid. E.g., `@import "vendor.css"; h1 { color: blue } @import "app.css";` will be parsed as `@import "vendor.css"; h1 { color: blue }` because `@import "app.css";` is right after `h1 { color: blue }` which is a non-ignored statement.

## 2. Unit

### 2.1. Relative unit

A relative unit specify a length relative to another length property. Below are common relative units:

#### 2.1.1. em

The `em` unit is equal to [computed value](/css/terminologies.html#computed-value) of the `font-size` property of an element on which it is used. When used for `font-size` property itself, it refers to the font size of its parent element. For example:

<figure class="flex wrap justify-between">
    <div class="col col-x-6 padding-clear-left">

{% highlight css %}
#box {
    font-size: 10px;
}
p {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: 2em;
}
{% endhighlight %}

    </div>
    <div class="col col-x-6 padding-clear-right">
        <iframe name="CSS em unit" src="/iframes/css-em-unit.html" width="100%"></iframe>
    </div>
</figure>

Font size of the `p` element is 20px which is 2 times of the font size of its parent `#box` element (10px). It also has 40px padding which is 2 times of its font size (20px).

#### 2.1.2. rem

The `rem` unit is equal to the [computed value](/css/terminologies.html#computed-value) of `font-size` on the [root element](/css/terminologies.html#root-element). When specified on the `font-size` property of the root element, the `rem` units refer to the property’s initial value. For example:

<figure class="flex wrap justify-between">
    <div class="col col-x-6 padding-clear-left">

{% highlight css %}
html {
    font-size: 8px;
}
#box {
    font-size: 10px;
}
p {
    font-size: 2rem;
    line-height: 1;
    margin: 0;
    padding: 2rem;
}  
{% endhighlight %}

    </div>
    <div class="col col-x-6 padding-clear-right">
        <iframe name="CSS rem unit" src="/iframes/css-rem-unit.html" width="100%"></iframe>
    </div>
</figure>

Font size of the `p` element is 16px which is 2 times of the font size of the `html` element (8px). It also has 16px padding which is 2 times of the `html` element.

#### 2.1.3. vh

vw or viewport-percentage width is equal to 1% of the width of the initial [containing block](/css/terminologies.html#containing-block).

#### 2.1.4. vh

vh or viewport-percentage height is equal to 1% of the height of the initial containing block.

### 2.2. Absolute unit

The following table describes common absolute units with their equivalent value.

| Unit | Name        | Equivalence         |
| :--- | :---------- | :------------------ |
| cm   | centimeters | 1cm = 96px/2.54     |
| mm   | millimeters | 1mm = 1/10th of 1cm |
| in   | inches      | 1in = 2.54cm = 96px |
| pt   | points      | 1pt = 1/72th of 1in |
| px   | pixels      | 1px = 1/96th of 1in |

## 3. Selector

A selector is a chain of one or more simple selectors separated by combinators. Common combinators are: white space, ">", and "+". White space may appear between a combinator and the simple selectors around it.

The following table describes common simple selectors:

| Pattern           | Name                    | Meaning                                                                  |
| :---------------- | :---------------------- | :----------------------------------------------------------------------- |
| *                 | Universal selector      | Matches any element.                                                     |
| E                 | Type selector           | Matches any E element (i.e., an element of type E).                      |
| E F               | Descendant selector     | Matches any F element that is a descendant of an E element.              |
| E > F             | Child selector          | Matches any F element that is a child of an element E.                   |
| E:pseudo-class    | Pseudo-class selector   | Matches element E when E is in a specific state (e.g., `:hover`).        |
| E::pseudo-element | Pseudo-element selector | Matches a specific part of element E (e.g., `::before`).                 |
| E + F             | Adjacent selector       | Matches any F element immediately preceded by a sibling element E.       |
| E[foo]            | Attribute selector      | Matches any E element with the "foo" attribute set (whatever the value). |
| .foo              | Class selector          | Matches any element with `foo` value of the class attribute.             |
| #foo              | ID selector             | Matches any element with `foo` value of the id attribute.                |

---

## Informative references

- [CSS character escapes](https://mathiasbynens.be/notes/css-escapes)
- [A pixel is not a pixel is not a pixel](https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html)
- [CSS 2.2 - Syntax and Basic Data Types](https://www.w3.org/TR/CSS22/syndata.html)
