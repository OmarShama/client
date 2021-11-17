import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Home() {
  return (
    <div className="App">
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup>
          <Label for="email">Username</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
