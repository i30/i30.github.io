---
layout:   tut
title:    "CSS Essentials"
category: CSS
date:     2017-06-02 15:20:25 +0700
series:   "Kill your CSS illusion"
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

## 2. Units

### 2.1 em

The `em` unit is equal to **computed value** of the `font-size` property of an element on which it is used. When used for `font-size` property itself, it refers to the font size of its parent element. For example:

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

### 2.2 rem

The `rem` unit is equal to the computed value of `font-size` on the **root element**. When specified on the `font-size` property of the root element, the `rem` units refer to the property’s initial value. For example:

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

## 3. Origins

1. Author who specifies style sheets according to conventions of document language. E.g. a frontend developer. Style sheet comes from this origin are called **author style sheet**.
2. User agent which provides a default style sheets in ways that satisfy general presentation expectations for document language. E.g Chrome browser. Style sheet comes from this origin are called **user agent style sheet**.
3. User who uses the user agent to customize preferable font sizes, colors... E.g. your mom. Style sheet comes from this origin are called **user style sheet**.

## 4. Types

1. **Inline**. E.g. `<p style="color: blue">Lorem Ipsum</p>`
2. **Internal** (embedded). E.g. `<head><style>p { color: blue }</style></head>`.
3. **External**. E.g. `<head><link rel="stylesheet" href="http://xyz.io/app.css"></head>`.

---

## Informative references

- [CSS 2.2 - Syntax and Basic Data Types](https://www.w3.org/TR/CSS22/syndata.html)
- [CSS character escapes](https://mathiasbynens.be/notes/css-escapes)
- [A pixel is not a pixel is not a pixel](https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html)
