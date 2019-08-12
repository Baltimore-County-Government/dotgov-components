## Examples

### Basic

```jsx
<TextInput
    id="full-name"
    label="Full Name"
    placeholder="Enter your full name" />
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
    <label
        for="full-name"
        class="dg_label">
        <span class="dg_label-text">Full Name</span>
    </label>
    <input
        id="full-name"
        class="dg_form-field_input--text"
        label="Name"
        placeholder="Enter your full name"
        type="text">
</div>
```

### With Hint

```jsx
<TextInput
    id="full-name-hint"
    hint="Must contain at least two words with a space between each word."
    label="Full Name"
    placeholder="Enter your full name" />
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
    <label
        for="full-name"
        class="dg_label">
        <span class="dg_label-text">Full Name</span>
        <span class="dg_label-hint">Must contain at least two words with a space between each word.</span>
    </label>
    <input
        id="full-name"
        class="dg_form-field_input--text"
        label="Name"
        placeholder="Enter your full name"
        type="text">
</div>
```
