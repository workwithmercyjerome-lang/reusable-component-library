import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Alert from "./components/Alert/Alert";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import Form from "./components/Form/Form";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Dashboard", href: "#" },
  { label: "Workouts", href: "#" },
  { label: "Progress", href: "#" },
];

function App() {
  return (
    <main className="app">
      <div className="top-nav">
        <Navbar logo="Jerome Walker" links={navLinks} actionText="Get Started" />
      </div>

      <header className="intro">
        <p className="eyebrow">Component library</p>
        <h1>Jerome Walker — UI components</h1>
  
      </header>

      {/* Navigation Bar */}
      <section className="block">
        <div className="block-head">
          <h2>Navigation bar</h2>
          <span className="block-tag">responsive · hamburger menu</span>
        </div>
        <div className="nav-demo">
          <Navbar
            logo="Jerome Walker"
            links={[{ label: "Help", href: "#" }, { label: "Settings", href: "#" }]}
            actionText="Sign Out"
          />
          <div className="phone-frame">
            <p className="phone-label">Mobile width</p>
            <Navbar logo="Jerome Walker" links={navLinks} actionText="Get Started" mobile />
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="block">
        <div className="block-head">
          <h2>Buttons</h2>
          <span className="block-tag">variant · size</span>
        </div>
        <div className="row">
          <Button>Log Workout</Button>
          <Button variant="outline">View Plan</Button>
          <Button variant="danger">Delete</Button>
          <Button size="small">Small</Button>
          <Button size="large">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Input Fields */}
      <section className="block">
        <div className="block-head">
          <h2>Input fields</h2>
          <span className="block-tag">label · type</span>
        </div>
        <div className="stack">
          <Input label="Body weight (kg)" name="weight" type="number" placeholder="72" />
          <Input label="Search exercises" name="search" placeholder="Search exercises..." />
        </div>
      </section>

      {/* Forms */}
      <section className="block">
        <div className="block-head">
          <h2>Forms</h2>
          <span className="block-tag">validation · state</span>
        </div>
        <div className="form-card">
          <Form
            fields={[
              { name: "email", label: "Weekly report email", type: "email", placeholder: "you@example.com", required: true },
            ]}
            submitLabel="Join"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="block">
        <div className="block-head">
          <h2>Cards</h2>
          <span className="block-tag">image · footer</span>
        </div>
        <div className="card-grid">
          <Card
            title="Today's Workout"
            description="Upper body — 45 min."
            footer={<Button size="small">Start</Button>}
          />
          <Card
            title="Weekly Progress"
            description="4 of 5 days trained."
            image="https://picsum.photos/seed/jerome-walker-run/480/320"
          />
          <Card
            title="Delete a log"
            description="Card footer holding a Modal."
            footer={
              <Modal title="Delete workout log" triggerText="Delete">
                <p>Are you sure? This can't be undone.</p>
              </Modal>
            }
          />
        </div>
      </section>

      {/* Alerts */}
      <section className="block">
        <div className="block-head">
          <h2>Alerts</h2>
          <span className="block-tag">success · warning · error · info</span>
        </div>
        <div className="stack" style={{ maxWidth: "480px" }}>
          <Alert type="success" title="Goal achieved">5-day step streak.</Alert>
          <Alert type="warning" title="Sync paused">Watch hasn't synced in 6h.</Alert>
          <Alert type="error" title="Sync failed">Last session saved locally.</Alert>
        </div>
      </section>

      {/* Loaders */}
      <section className="block">
        <div className="block-head">
          <h2>Loaders</h2>
          <span className="block-tag">small · medium · large</span>
        </div>
        <div className="loader-row">
          <Loader size="small" />
          <Loader size="medium" text="Syncing..." />
          <Loader size="large" />
        </div>
      </section>

      <footer className="site-footer">
        <span className="wordmark">Jerome Walker</span>
        <span>Navbar · Button · Input · Form · Card · Alert · Modal · Loader</span>
      </footer>
    </main>
  );
}

export default App;