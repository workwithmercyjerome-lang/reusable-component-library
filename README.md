Jerome Walker — Component Library
Task 2 — Reusable Component Library
Overview
A reusable React component library for Jerome Walker, a fitness tracking app. It shares its design tokens — colour, type, radius, shadow — with the Task 1 landing page, so every component looks native if dropped into that page. src/App.jsx is a compact demo page: one short block per component, minimal copy, no marketing filler.
Features
8 reusable components: Button, Input, Form, Navbar, Card, Alert, Modal, Loader
Every component is prop-driven — no hard-coded copy
One shared design-token system (src/index.css)
Real state management: Form validates and tracks submission state, Modal manages its own open/close state
Consistent naming: <Component>.jsx + <Component>.css, one folder per component
Fully responsive demo page (3 → 2 → 1 column grid)
Technologies used
React 19 + Vite
Plain CSS, sharing root design tokens
Manrope (display) + Inter (body) via Google Fonts
Setup instructions
bash
git clone <your-repo-url>
cd jerome-walker-component-library
npm install
npm run dev       # start dev server
npm run build      # production build
Live deployment
https://jerome-walker-components.vercel.app 

Project structure
text
src/
├── components/
│   ├── Alert/    Alert.jsx    Alert.css
│   ├── Button/    Button.jsx   Button.css
│   ├── Card/     Card.jsx    Card.css
│   ├── Form/      Form.jsx    Form.css
│   ├── Input/     Input.jsx   Input.css
│   ├── Loader/    Loader.jsx  Loader.css
│   ├── Modal/     Modal.jsx   Modal.css
│   └── Navbar/    Navbar.jsx  Navbar.css
├── App.jsx
├── index.css
└── main.jsx
Component reference
Button
Prop	Type	Default	Description
variant	"primary" | "outline" | "danger"	"primary"	Visual style — classes match the Task 1 .btn system exactly
size	"small" | "medium" | "large"	"medium"	Height/padding
type	"button" | "submit" | "reset"	"button"	Native button type
disabled	boolean	false	Disables interaction
onClick	function	—	Click handler
jsx
<Button variant="outline" size="large">View Plan</Button>
Input
Prop	Type	Default	Description
label	string	—	Label above the field
type	string	"text"	Native input type
value / onChange	string / function	—	Controlled state
required	boolean	false	Marks the field required
disabled	boolean	false	Disables the field
jsx
<Input label="Body weight (kg)" name="weight" type="number" placeholder="72" />
Form
Composes Input + Button with its own validation and submission state, so any screen can drop in a working form by passing field definitions.
Prop	Type	Default	Description
fields	{ name, label, type, placeholder, required }[]	[]	Fields to render
submitLabel	string	"Submit"	Submit button label
onSubmit	function	—	Called with form values once validation passes
jsx
<Form
  fields={[{ name: "email", label: "Weekly report email", type: "email", required: true }]}
  submitLabel="Join"
  onSubmit={(values) => console.log(values)}
/>
Navbar
Owns its own open/closed state for the mobile menu — the hamburger button toggles a mobile-nav dropdown, matching the Task 1 header exactly (same markup, same animation).
Prop	Type	Default	Description
logo	string	"Navbar"	Brand name
links	{ label, href }[]	[]	Nav links
actionText	string	"Get Started"	Primary action label
mobile	boolean	false	Forces the hamburger layout at any width — used to preview the mobile menu without resizing the window
jsx
<Navbar logo="Jerome Walker" links={[{ label: "Dashboard", href: "#" }]} actionText="Get the App" />
Card
Prop	Type	Description
title	string	Card heading
description	string	One-line summary
image	string	Optional cover image URL
children	node	Optional extra content
footer	node	Optional footer, e.g. a Button or Modal
jsx
<Card title="Today's Workout" description="Upper body — 45 min." footer={<Button size="small">Start</Button>} />
Alert
Prop	Type	Default	Description
type	"success" | "warning" | "error" | "info"	"info"	Alert style
title	string	—	Optional heading
children	node	—	Message body
jsx
<Alert type="success" title="Goal achieved">5-day step streak.</Alert>
Modal
Prop	Type	Default	Description
title	string	"Modal"	Modal heading
triggerText	string	"Open Modal"	Trigger button label
children	node	—	Modal body content
jsx
<Modal title="Delete workout log" triggerText="Delete">
  <p>Are you sure? This can't be undone.</p>
</Modal>
Loader
Prop	Type	Default	Description
size	"small" | "medium" | "large"	"medium"	Spinner size
text	string	—	Optional label next to the spinner
jsx
<Loader size="medium" text="Syncing..." />