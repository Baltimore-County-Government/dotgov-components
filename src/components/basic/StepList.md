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
import StepListItem from "./StepListItem";
<StepList type="static">
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
import StepListItem from "./StepListItem";
<Section className="dark">
  <div className="container">
    <div className="row">
      <div className="col">
        <StepList type="static">
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
