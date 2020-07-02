### Social Media Buttons Standard styles

```jsx
import SocialMediaButton from "./SocialMediaButton";
import Section from "../basic/containers/Section";

<Section>
  <SocialMediaButton
    id="twitterButton"
    className="dg_Button"
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
    className="dg_button"
    content="Facebook"
  />
</Section>;
```

### Social Media Buttons Brand styles

```jsx
import SocialMediaButton from "./SocialMediaButton";
import Section from "../basic/containers/Section";

<Section>
  <SocialMediaButton
    id="twitterButton"
    className="dg_Button dg_twitter-button"
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
    className="dg_button dg_facebook-button"
    content="Facebook"
  />
</Section>;
```

Html Snippet:

```html
<div class="dg_actions-list">
  <ul>
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
  </ul>
</div>
```
