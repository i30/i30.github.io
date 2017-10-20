---
layout:   post
title:    "CSS Positioning"
category: css
date:     2017-06-12 09:05:38 +0700
series:   "Kill your CSS illusion"
---

## 1. Position property
[Positioned elements](/css/terminologies.html#positioned-element) generate positioned boxes that laid out according to four properties: `top`, `right`, `bottom` and `left`.

### 1.1. Static position

A static positioned box is laid out according to the [normal flow](/css/terminologies.html#normal-flow). The `top`, `right`, `bottom`, and `left` properties do not apply.

User agents may treat position as `static` on the [root element](/css/terminologies.html#root-element).

### 1.2. Relative position

A relatively positioned box is laid out normally according to the normal flow before moving to a new position that is **relative to its normal position**. For example:

<figure class="flex wrap justify-between">
  <div class="col col-x-6 padding-clear-left">

{% highlight css %}
#box #relative {
  background-color: #b0e57c;
  position: relative;
  top: 20px;
}
{% endhighlight %}

  </div>
  <div class="col col-x-6 padding-clear-right">
      <iframe name="relative position example" src="/iframes/css-relative-position.html" width="100%"></iframe>
  </div>
</figure>

Relatively positioned boxes' offsets are calculated with respect to their default position in normal flow, not their containing blocks' position.

Note that if all four offsets are specified in a ruleset, `top` and `left` will override `bottom` and `right`.

### 1.3. Absolute position

Absolutely positioned boxes are taken out of the normal flow. Their offsets are calculated with respect to their nearest [containing block](/css/terminologies.html#containing-block).

<figure class="flex wrap justify-between">
  <div class="col col-x-6 padding-clear-left">

{% highlight css %}
#box #relative {
  background-color: #b0e57c;
  position: absolute;
  top: 20px;
}
{% endhighlight %}

  </div>
  <div class="col col-x-6 padding-clear-right">
      <iframe name="absolute position example" src="/iframes/css-absolute-position.html" width="100%"></iframe>
  </div>
</figure>

### 1.4. Fixed position

Fixed boxes are positioned with respect to [viewport](/css/terminologies.html#viewport) instead of a nearest containing block. It always stays in the same place even if the page is scrolled. `top`, `right`, `bottom` and `left` properties are applied normally.

## Display property
