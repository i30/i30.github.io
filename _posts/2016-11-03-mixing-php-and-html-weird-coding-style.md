---
layout: post
title:  "Mixing PHP and HTML: weird coding style"
date:   2016-11-03 08:24:31 +0700
---

I have no idea why people recommend to mix PHP and HTML like this:

<figure class="flex wrap justify-between">

<div class="col col-x-6 padding-clear-left">

{% highlight php %}
<article>
  <?php if (true) : ?>
    <div>
      <?php echo "Something"; ?>
    </div>
  <?php endif; ?>
</article>
{% endhighlight %}

</div>
<div class="col col-x-6 padding-clear-right">

{% highlight html %}
<article>
      <div>
      Something    </div>
  </article>
{% endhighlight %}

</div>

</figure>

I often do this:

<figure class="flex wrap justify-between">

<div class="col col-x-6 padding-clear-left">

{% highlight php %}
<article><?php
  if (true) :
    ?><div><?php
      echo "Something";
    ?></div><?php    
  endif;
?></article>
{% endhighlight %}

</div>
<div class="col col-x-6 padding-clear-right">

{% highlight html %}
<article><div>Something</div></article>
{% endhighlight %}

</div>

</figure>

Let's not talk about PHP short echo syntax or indentation here. It might look more readable but, personally, the recommended style have two problems:

1. Increases page size with redundant whitespaces if rendered pages are not minified. Even if minified, it needs extra processes on the back-end.

2. Confuses front-end developers with anonymous whitespaces.

For example:

<figure class="flex wrap justify-between">
<div class="col col-x-6 padding-clear-left">

{% highlight php %}
<form action="" method="post">
<?php if (true) : ?>
  <input type="text" name="input" value="">
<?php endif; ?>
  <input type="submit" name="submit" value="Submit">
</form>
{% endhighlight %}

</div>
<div class="col col-x-6 padding-clear-right">
  <iframe name="anonymous whitespaces while mixing PHP and HTML" src="/iframes/anonymous-whitespaces-php-html.html" width="100%"></iframe>
</div>
</figure>

Now, it's impossible to remove the whitespace between the text box and the submit button properly with CSS alone. Negative left margin, huh?
