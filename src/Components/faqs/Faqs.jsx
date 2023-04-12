import "./Faqs.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

export default function Faqs() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 id="faq-main-header">Avowal Greens Partner Onboarding FAQ-</h1>
      <div id="faq-text">
        <p>
          <b>
            If you are a microgreen supplier interested in partnering with
            Avowal Greens, here are some
            <br />
            frequently asked questions that may help you get started:
          </b>
        </p>

        <MDBAccordion initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="Q1. How do I become a partner with Avowal Greens?"
          >
            To become a partner with Avowal Greens, please fill out the "Partner
            With Us" form on our website. We will then reach out to you to begin
            the verification and testing process.{" "}
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="Q2. What documents do I need to provide?"
          >
            What documents do I need to provide? We will require a copy of your
            business registration and any relevant licenses or certifications
            related to your business.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="Q3. What is the testing process for my microgreens?"
          >
            We will require a sample of your microgreens to be sent to us for
            testing. Our team will evaluate the taste, texture, and appearance
            of the microgreens to ensure they meet our quality standards.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="Q4. How long does the verification and testing process take?"
          >
            The verification and testing process can take up to two weeks,
            depending on the volume of requests we receive. We appreciate your
            patience during this time.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="Q5. What happens if my microgreens do not meet Avowal Greens quality standards?"
          >
            If your microgreens do not meet our quality standards, we will
            provide you with feedback on how to improve the quality of your
            product. You are welcome to submit a new sample for testing once you
            have made the necessary improvements.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle="Q5. Can I sell my microgreens under my own brand name?"
          >
            No, as a partner with Avowal Greens, you will be required to sell
            your microgreens under the Avowal Greens brand name. 97
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle="Q5. What are the benefits of partnering with Avowal Greens? "
          >
            As a partner with Avowal Greens, you will gain access to a wider
            customer base and benefit from our marketing and promotional
            activities. Additionally, you will receive support from our team in
            areas such as logistics, packaging, and distribution
          </MDBAccordionItem>
        </MDBAccordion>
        <br />
        <p>
          <b>
            If you have any further questions or concerns about partnering with
            Avowal Greens, go through the{" "}
            <p
              onClick={() => navigate("/supplier")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              "Partner With Us"
            </p>
          </b>
        </p>
      </div>
      <Footer />
    </div>
  );
}
