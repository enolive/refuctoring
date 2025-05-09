---
# You can also start simply with 'default'
theme: enolive
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Refuctoring
info: |
  ## Refuctoring
  Base Introduction what's all this about
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
src: ./intro.md
---

---
src: ./about.md
---

---
layout: fact
---

# Disclaimer

Don't try this in production 😈!

---
layout: fact
---

# What's refuctoring?

> Refuctoring is the process of taking a well-
designed piece of code and, through a
series of small, reversible changes,
making it completely unmaintainable by
anybody <span v-mark.orange>except yourself</span>.

-- Jason Gorman

<style>
  blockquote {
    @apply text-2xl;

    p {
      @apply leading-relaxed;
    }
  }
</style>

---
layout: fact
---

# Hypothesis

Either you refactor your code, or it gets naturally refuctored!

---
class: fade text-3xl
---

# Why?

<v-clicks>

- Learn the Dont's
- Learn how fast to make a mess 
- Have fun

</v-clicks>

---
class: fade text-3xl
---

# How?

<v-clicks>

- Me as the driver
- Propose to me small changes
- Make code more messy
- Tests must still pass
- Stay under the radar by keeping the original API

</v-clicks>

---
layout: image
image: /coding-unsplash.png
---

# Let's start coding...

---
src: ./thanks.md
---