---
layout:   post
title:    "CSS Visual Formatting"
category: css
date:     2017-06-10 16:08:22 +0700
series:   "CSS Notes"
---

Each element in the document tree generates zero or more boxes according to the box model. The layout of these boxes is governed by:

- [box dimensions](/css/box-model.html#box-dimensions) and [type](/css/terminologies.html#types)
- positioning scheme
- relationships between elements
- external information ([viewport](/css/terminologies.html#viewport), intrinsic dimensions...)

## 1. `display` property

### 1.1. `block`

This value causes an element to generate a principal [block box](/css/terminologies.html#block-box).

### 1.2. `inline`

This value causes an element to generate one or more [inline boxes](/css/terminologies.html#inline-box).

### 1.1. `inline-block`

This value causes an element to generate a principal [inline-block box](/css/terminologies.html#inline-block-box).

### 1.1. `list-item`

This value causes an element (e.g., `li` element in HTML) to generate a principal block box and a marker box.

### 1.1. `none`

This value causes an element to not appear in the formatting structure (i.e., in visual media the element generates no boxes and has no effect on layout). Descendant elements do not generate any boxes either; the element and its content are removed from the formatting structure entirely. This behavior cannot be overridden by setting the 'display' property on the descendants.

## 2. `position` property

[Positioned elements](/css/terminologies.html#positioned-element) generate positioned boxes that laid out according to four properties: `top`, `right`, `bottom` and `left`.

### 2.1. `static` position

A static positioned box is laid out according to the [normal flow](/css/terminologies.html#normal-flow). The `top`, `right`, `bottom`, and `left` properties do not apply.

User agents may treat position as `static` on the [root element](/css/terminologies.html#root-element).

### 2.2. `relative` position

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

### 2.3. `absolute` position

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

### 2.4. `fixed` position

Fixed boxes are positioned with respect to [viewport](/css/terminologies.html#viewport) instead of a nearest containing block. It always stays in the same place even if the page is scrolled. `top`, `right`, `bottom` and `left` properties are applied normally.

## 3. Block formatting context

Floated elements, absolute elements and block containers that are not block boxes, and block boxes with `overflow` other than `visible` (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the `margin` properties. Vertical margins between adjacent block-level boxes in a block formatting context [collapse](/css/box-model.html#collapsing-vertical-margins).

In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's line boxes may shrink due to the floats), unless the box establishes a new block formatting context

## 4. Inline formatting contexts

An inline formatting context is established by a block container box that contains no block-level boxes. In an inline formatting context, boxes are laid out horizontally, one after the other, beginning at the top of a containing block. Horizontal margins, borders, and padding are respected between these boxes. The boxes may be aligned vertically in different ways: their bottoms or tops may be aligned, or the baselines of text within them may be aligned.

---

## Informative references

- [CSS 2.2 - Visual formatting model](https://www.w3.org/TR/CSS22/visuren.html)
- [Block-level box vs block container box](https://stackoverflow.com/questions/30883857/css-spec-block-level-box-block-container-box-and-block-box)
