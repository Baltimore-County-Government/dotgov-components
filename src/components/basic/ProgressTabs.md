### Default Progress Tabs

```jsx
import ProgressTabs from "./ProgressTabs";

const tabItems = [
  {
    name: "Choose a Report Type",
    id: 0,
    key: "ServiceRequestForm",
    isHighlighted: true,
  },
  {
    name: "Provide Details",
    id: 1,
    key: "ProvideDetails",
    isHighlighted: false,
  },
  {
    name: "Additional Contact Information",
    id: 2,
    key: "AdditionalInformation",
    isHighlighted: false,
  },
  {
    name: "",
    id: 3,
    key: "Blank",
    isHighlighted: false,
  },
];

<ProgressTabs tabItems={tabItems} />;
```
