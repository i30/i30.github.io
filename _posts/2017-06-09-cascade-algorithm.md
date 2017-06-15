---
layout:   post
title:    "Cascade Algorithm"
category: css
date:     2017-06-09 16:20:25 +0700
series:   "Kill your CSS illusion"
---

Conflicts between CSS declarations are resolved by assigning a weight to each declaration so that when several declarations apply, the one with the greatest weight takes precedence:

- declarations in [inline CSS](/css/terminologies.html#inline-css) always have more weight than both [internal CSS](/css/terminologies.html#internal-css) and [external CSS](/css/terminologies.html#external-css).
- declarations with `!important` setting always have more weight than declarations without `!important` setting. Declaring a shorthand property (e.g., `font`) to be `!important` is equivalent to declaring all of its sub-properties to be `!important`.
- declarations in [author style sheet](/css/terminologies.html#author-style-sheet) have more weight than declarations in [user style sheet](/css/terminologies.html#user-style-sheet). But, with `!important` setting, declarations in user style sheet have more weight than declarations in author style sheet. Both declarations in author style sheet and user style sheet have more weight than declarations in [user agent style sheet](/css/terminologies.html#user-agent-style-sheet).
- more specific [selectors](/css/essentials.html#selector) will override more general ones. Pseudo-elements and pseudo-classes are counted as normal elements and classes, respectively.
- if two declarations have <u>identical</u> weight, [origin](/css/terminologies.html#origins)  and [specificity](#specificity), the latter specified wins, [internal CSS](/css/terminologies.html#internal-css) or [external CSS](/css/terminologies.html#external-css) doesn't matter. Declarations in imported style sheets using `@import` are considered to be before any declarations in a style sheet itself.

If it's not specified, the word "declarations" means normal declarations or important declarations, not both!

For example:

{% highlight css %}
p { /* User's declarations */
    text-indent: 1em !important;
    font-style: italic !important;
    font-size: 18px
}

p { /* Author's declarations */
    text-indent: 1.5em !important;
    font: normal 12px sans-serif !important;
    font-size: 24px;
    font-family: monospace !important
}
{% endhighlight %}

The first rule in the user's declarations will override the corresponding declaration in the author's declarations. The second declaration will also win due to being marked `!important`. However, the third rule is not `!important` and will therefore lose to the second rule in the author's declarations (even it's using shorthand property). Also, the third author rule will lose to the second author rule since the second rule is `!important` and the second author rule will lose to the fourth author rule because it is declared after.

The most confusing concept is the <strong id="specificity">specificity</strong>. A specificity of a selector is expressed by four value groups (a = 0, b = 0, c = 0, d = 0):

- declarations in inline CSS always have a = 1.
- b is equal to the number of ID selectors.
- c is equal to the number of other attribute selectors and pseudo-classes.
- d is equal to the number of element name selectors and pseudo-elements.

Note that `div[id="content"]` is not a b-group selector. Instead, it is a c-group selector which has (a = 0, b = 0, c = 1, d = 1). Combinators and universal selector do not contribute to a selector specificity.

For example:

{% highlight css %}
*                 {}  /* (a = 0, b = 0, c = 0, d = 0) */
li                {}  /* (a = 0, b = 0, c = 0, d = 1) */
li:first-line     {}  /* (a = 0, b = 0, c = 0, d = 2) */
ul li             {}  /* (a = 0, b = 0, c = 0, d = 2) */
ul ol + li        {}  /* (a = 0, b = 0, c = 0, d = 3) */
h1 + *[rel=xyz]   {}  /* (a = 0, b = 0, c = 1, d = 1) */
ul ol li.red      {}  /* (a = 0, b = 0, c = 1, d = 3) */
li.red.level      {}  /* (a = 0, b = 0, c = 2, d = 1) */
#xyz              {}  /* (a = 0, b = 1, c = 0, d = 0) */
style                 /* (a = 1, b = 0, c = 0, d = 0) */
{% endhighlight %}

**Do not sum up a, b, c and d** to evaluate weights of two selectors before comparing. It will lead to wrong results. For example:

<figure class="flex wrap justify-between">
    <div class="col col-x-6 padding-clear-left">

{% highlight css %}
#box #button1 {
    border: 1px solid red;
}   
#box .button1 {
    border: 1px solid blue;
}     
{% endhighlight %}

    </div>
    <div class="col col-x-6 padding-clear-right">
        <iframe name="CSS specificity example" src="/iframes/css-specificity.html" width="100%"></iframe>
    </div>
</figure>

Specificity of the first selector is (0, 2, 0, 0). Specificity of the second selector is (0, 1, 1, 0). By summing up, they are equal in value. They are also from the same type and origin. But the latter doesn't win. It's because:

- inline CSS always has highest specificity. ID attributes have more specificity than other attributes and pseudo-classes. Element names and pseudo-elements have lowest specificity.
- other attributes and pseudo-classes have same specificity. Element names and pseudo-elements also have same specificity. So, the latter specified wins.

 So, inline CSS always wins and the more ID selectors a selector has, the more specific it is. In other words, **we should concatenate** the four groups' value into a decimal number instead of summing them up before comparing. E.g., (0, 2, 0, 0) -> 200; (0, 1, 1, 0) -> 110; 200 is greater than 110 => the first selector wins.
