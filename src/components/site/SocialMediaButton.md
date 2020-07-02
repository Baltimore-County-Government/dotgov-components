### Social Media Buttons Standard styles

```jsx
import SocialMediaButton from "./SocialMediaButton";

<Section>
  <SocialMediaButton
    id="twitterButton"
    class="dg_Button"
    title="Share on Twitter"
    href="https://twitter.com/intent/tweet?text=Something%20very%20important%20goes%20here"
    icon="twitter"
    content="Twitter"
  />
  <SocialMediaButton
    id="facebookButton"
    href="https://www.facebook.com/sharer/sharer.php"
    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
    target="_blank"
    title="Share on Facebook"
    icon="facebook"
    class="dg_button"
    content="Facebook"
  />
</Section>;
```

### Social Media Buttons Brand styles

```jsx
import SocialMediaButton from "./SocialMediaButton";
<Section>
  <SocialMediaButton
    id="twitterButton"
    class="dg_Button twitter"
    title="Share on Twitter"
    href="https://twitter.com/intent/tweet?text=Something%20very%20important%20goes%20here"
    icon="twitter"
    content="Twitter"
  />

  <SocialMediaButton
    id="facebookButton"
    href="https://www.facebook.com/sharer/sharer.php"
    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
    target="_blank"
    title="Share on Facebook"
    icon="facebook"
    class="dg_button facebook"
    content="Facebook"
  />
</Section>;
```

Html Snippet:

```html
<li class="action twitter">
  <a
    id="twitterButton"
    class="dg_Button"
    title="Share on Twitter"
    href="https://twitter.com/intent/tweet?text=Something%20very%20important%20goes%20here"
    >Twitter
  </a>
</li>
<li class="action facebook">
  <a
    id="facebookButton"
    href="https://www.facebook.com/sharer/sharer.php"
    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
    target="_blank"
    title="Share on Facebook"
    class="dg_button"
    >Facebook
  </a>
</li>
```
