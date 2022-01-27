import { FC } from "react";

import { Container, Navbar } from "../../components";

export const AboutPage: FC = () => {
  return (
    <>
      <Navbar />
      <main className="main__layer">
        <Container>
          <h2>About Page</h2>
        </Container>
      </main>
    </>
  );
};
