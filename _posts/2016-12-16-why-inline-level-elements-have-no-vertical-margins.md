---
layout: post
title:  "Why non-replaced inline-level elements have no vertical margins?"
date:   2016-12-16 15:21:28 +0700
---

Many CSS specifications tell me that non-replaced inline-level elements have vertical borders and paddings but no vertical margins without mentioning the "why". It's really troublesome so that I have to create my own theory:

We all know that replaced elements have vertical margins:

<figure class="flex wrap justify-between">
  <div class="col col-x-6 padding-clear-left">

{% highlight html %}
<div class="body">
  <img src="/images/css-is-awesome.png" alt="CSS is awesome">
</div>
{% endhighlight %}

{% highlight css %}
.body img {
  margin: 1em 0;
}
{% endhighlight %}

  </div>
  <div class="col col-x-6 padding-clear-right">
      <iframe name="Replaced inline-level elements have no vertical margins example" src="/iframes/css-replaced-inline-level-elements-have-vertical-margins.html" width="100%"></iframe>
  </div>
</figure>

But why?

Non-replaced inline-level elements surely generate inline boxes and take part in inline formatting contexts.

<figure class="flex wrap justify-between">
  <div class="col col-x-6 padding-clear-left">

{% highlight html %}
<div id="box">
  <p>Lorem ipsum dolor sit amet,
    <em>consectetur adipiscing elit</em>.
  </p>
</div>
{% endhighlight %}

  </div>
  <div class="col col-x-6 padding-clear-right">
      <iframe name="Non-replaced inline-level elements have no vertical margins example 2" src="/iframes/css-non-replaced-inline-level-elements-have-no-vertical-margins.html" width="100%"></iframe>
  </div>
</figure>
