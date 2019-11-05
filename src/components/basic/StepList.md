### Default Step List

```jsx
import StepListItem from "./StepListItem";
<StepList type="collapsed">
  <StepListItem id="step-1" buttonText="Step 1: Know the Registration Fees">
    <p>Some really helpful content for step 1 will go here.</p>
  </StepListItem>
  <StepListItem id="step-2" buttonText="Step 2: Have Your Property Inspected">
    <p>Some really helpful content for step 2 will go here.</p>
  </StepListItem>
  <StepListItem id="step-3" buttonText="Step 3: Gather Required Documentation">
    <p>Some really helpful content for step 3 will go here.</p>
  </StepListItem>
</StepList>;
```

### Static Step List

```jsx
import StepListItemStatic from "./StepListItemStatic";
<StepList type="static">
  <StepListItemStatic
    id="step-1"
    buttonText="Step 1: Know the Registration Fees"
  >
    <p>Some really helpful content for step 1 will go here.</p>
  </StepListItemStatic>
  <StepListItemStatic
    id="step-2"
    buttonText="Step 2: Have Your Property Inspected"
  >
    <p>Some really helpful content for step 2 will go here.</p>
  </StepListItemStatic>
  <StepListItemStatic
    id="step-3"
    buttonText="Step 3: Gather Required Documentation"
  >
    <p>Some really helpful content for step 3 will go here.</p>
  </StepListItemStatic>
</StepList>;
```

### Default Step List in a Dark Section

```jsx
import Section from "./containers/Section";
import StepListItem from "./StepListItem";
<Section className="dark">
  <div className="container">
    <div className="row">
      <div className="col">
        <StepList type="collapsed">
          <StepListItem
            id="step-1"
            buttonText="Step 1: Know the Registration Fees"
          >
            <p>Some really helpful content for step 1 will go here.</p>
          </StepListItem>
          <StepListItem
            id="step-2"
            buttonText="Step 2: Have Your Property Inspected"
          >
            <p>Some really helpful content for step 2 will go here.</p>
          </StepListItem>
          <StepListItem
            id="step-3"
            buttonText="Step 3: Gather Required Documentation"
          >
            <p>Some really helpful content for step 3 will go here.</p>
          </StepListItem>
        </StepList>
      </div>
    </div>
  </div>
</Section>;
```

### Static Step List in a Dark Section

```jsx
import Section from "./containers/Section";
import StepListItemStatic from "./StepListItemStatic";
<Section className="dark">
  <div className="container">
    <div className="row">
      <div className="col">
        <StepList type="static">
          <StepListItemStatic
            id="step-1"
            buttonText="Step 1: Know the Registration Fees"
          >
            <p>Some really helpful content for step 1 will go here.</p>
          </StepListItemStatic>
          <StepListItemStatic
            id="step-2"
            buttonText="Step 2: Have Your Property Inspected"
          >
            <p>Some really helpful content for step 2 will go here.</p>
          </StepListItemStatic>
          <StepListItemStatic
            id="step-3"
            buttonText="Step 3: Gather Required Documentation"
          >
            <p>Some really helpful content for step 3 will go here.</p>
          </StepListItemStatic>
        </StepList>
      </div>
    </div>
  </div>
</Section>;
```

## Html Snippet

### Interactive Step List

```html
<div class="dg_step-list collapsed">
  <button class="dg_step-list__show-all-btn">Show All</button>
  <ol class="dg_step-list__list">
    <li class="dg_step-list__list-section" id="registration-step-1">
      <button
        class="dg_step-list__toggle-btn"
        aria-expanded="false"
        aria-controls="registration-panel-1"
        type="button"
      >
        <span class="dg_step-list__toggle-btn__title"
          >Step 1: Know the Registration Fees</span
        >
        <span class="dg_step-list__toggle-btn__btn-text">Show</span>
      </button>
      <div
        id="registration-panel-1"
        class="dg_step-list__details"
        aria-labelledby="registration-step-1"
      >
        <p>Step 1 details.</p>
      </div>
    </li>
    <li class="dg_step-list__list-section" id="registration-step-2">
      <button
        class="dg_step-list__toggle-btn"
        aria-expanded="false"
        aria-controls="registration-panel-2"
        type="button"
      >
        <span class="dg_step-list__toggle-btn__title"
          >Step 2: Have Your Property Inspected</span
        >
        <span class="dg_step-list__toggle-btn__btn-text">Show</span>
      </button>
      <div
        class="dg_step-list__details"
        id="registration-panel-2"
        aria-labelledby="registration-step-2"
      >
        <p>Step 2 details.</p>
      </div>
    </li>
    <li class="dg_step-list__list-section" id="registration-step-3">
      <button
        class="dg_step-list__toggle-btn"
        aria-expanded="false"
        aria-controls="registration-panel-3"
        type="button"
      >
        <span class="dg_step-list__toggle-btn__title"
          >Step 3: Gather Required Documentation</span
        >
        <span class="dg_step-list__toggle-btn__btn-text">Show</span>
      </button>
      <div
        class="dg_step-list__details"
        id="registration-panel-3"
        aria-labelledby="registration-step-3"
      >
        <p>Step 3 details.</p>
      </div>
    </li>
  </ol>
</div>
```

### Static Step List

```html
<div class="dg_step-list static">
  <ol class="dg_step-list__list">
    <li class="dg_step-list__list-section" id="registration-step-1">
      <span class="dg_step-list__toggle-btn">
        <span class="dg_step-list__toggle-btn__title"
          >Step 1: Know the Registration Fees</span
        >
      </span>
      <div
        id="registration-panel-1"
        class="dg_step-list__details"
        aria-labelledby="registration-step-1"
      >
        <p>Step 1 details.</p>
      </div>
    </li>
    <li class="dg_step-list__list-section" id="registration-step-2">
      <span class="dg_step-list__toggle-btn">
        <span class="dg_step-list__toggle-btn__title"
          >Step 2: Have Your Property Inspected</span
        >
      </span>
      <div
        class="dg_step-list__details"
        id="registration-panel-2"
        aria-labelledby="registration-step-2"
      >
        <p>Step 2 details.</p>
      </div>
    </li>
    <li class="dg_step-list__list-section" id="registration-step-3">
      <span class="dg_step-list__toggle-btn">
        <span class="dg_step-list__toggle-btn__title"
          >Step 3: Gather Required Documentation</span
        >
      </span>
      <div
        class="dg_step-list__details"
        id="registration-panel-3"
        aria-labelledby="registration-step-3"
      >
        <p>Step 3 details.</p>
      </div>
    </li>
  </ol>
</div>
```
