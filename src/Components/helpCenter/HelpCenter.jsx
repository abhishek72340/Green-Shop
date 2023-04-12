import './HelpCenter.css'
import Footer from "../footer/Footer";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
export default function HelpCenter(){

    return(

        <div>
        <h1 id='help-center-main-header'>Avowal Greens Help Center:</h1>

        <div id='help-text'>
        <p><b>Welcome to the Avowal Greens Help Center.
        Here you will find answers to frequently asked questions, as well as information on how to
        contact us for further assistance.<br/>
        Frequently Asked Questions:</b></p>
       

        <MDBAccordion initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle='Q1. What are microgreens?'>
        Microgreens are young plants that are harvested when they are just a few inches tall. They are
        often used as a garnish or in salads, and are known for their intense flavor and nutrient density.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle='Q2. What types of microgreens do you offer?'>
        We offer a wide variety of microgreens, including arugula, basil, broccoli, cabbage, chives,
        cilantro, kale, mustard, and radish, among others.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle='Q3. How do I place an order?'>
        To place an order, simply visit our website and browse our selection of microgreens. Once you
        have selected the items you wish to purchase, proceed to checkout and enter your shipping and
        payment information.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle='Q4. What payment methods do you accept?'>
        We accept all major credit cards, as well as payment through popular digital wallets such as
        PayPal and Google Pay.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle='Q5.How long does shipping take?'>
        Shipping times vary depending on your location, but most orders are delivered within 24 - 48
        hours business days.
        </MDBAccordionItem>
      </MDBAccordion>
<br/>
      <p>If you have any further questions or concerns, please don't hesitate to contact us on whatsapp
      at <b>+917869945347</b>. Our customer service team is available to assist you <b>Monday through
      Saturday, from 9am to 6pm IST.</b>
      
      </p>
      </div>
      <Footer/>
        </div>
    )
}