import H2eadtag from "@/Components/H2eadtag";
import products from "../../data/products.json";
import Spacing from "@/Components/Spacing";
import Section from "@/Components/Section";
import Card from "@/Components/Card";
import Bookmainbtn from "@/Components/Bookmainbtn";

const Brand = ({ page }) => {
  return (
    <>
      <Spacing />
      <H2eadtag>{page.title}</H2eadtag>
      <Spacing />
      <Section className='pt-3'>
        <div className="container ">
          <div className="row gy-5">
            {page.products.map((item) => (
              <div className="col-md-4">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    
      <Section>
         <div className="container pb-3">
           <h5 className="mb-4">Book an  Appointment To learn more about {page.title} Products</h5>
           <Bookmainbtn/>
         </div>
      </Section>
      <Spacing />
    </>
  );
};

export default Brand;

export const getStaticPaths = async () => {
  const params = Object.keys(products).map((brandValue) => {
    return {
      params: {
        brand: brandValue,
      },
    };
  });

  return {
    paths: [...params],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { brand } = params;

  const page = products[brand];

  return {
    props: {
      page,
    },
  };
};
